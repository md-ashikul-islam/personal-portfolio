"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { clients, type Client } from "@/data/resume";
import { cn } from "@/lib/utils";

const SCROLL_SPEED = 0.55;

function normalizeOffset(offset: number, loopWidth: number) {
  if (loopWidth <= 0) return offset;
  let normalized = offset % loopWidth;
  if (normalized > 0) normalized -= loopWidth;
  return normalized;
}

function ClientLogo({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="client-logo-slot" title={client.name}>
      {failed ? (
        <span className="client-logo-fallback">{client.name}</span>
      ) : (
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          width={152}
          height={48}
          draggable={false}
          className="client-logo-img pointer-events-none"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function MarqueeTrack() {
  return (
    <div className="client-marquee-track flex w-max shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6">
      {clients.map((client) => (
        <ClientLogo key={client.name} client={client} />
      ))}
    </div>
  );
}

export function ClientMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const rafRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const applyTransform = useCallback(() => {
    if (innerRef.current) {
      innerRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, []);

  const measureLoop = useCallback(() => {
    if (trackRef.current) {
      loopWidthRef.current = trackRef.current.offsetWidth;
      offsetRef.current = normalizeOffset(offsetRef.current, loopWidthRef.current);
      applyTransform();
    }
  }, [applyTransform]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    measureLoop();
    const ro = new ResizeObserver(measureLoop);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [measureLoop]);

  useEffect(() => {
    if (reducedMotion) return;

    const tick = () => {
      if (!isDraggingRef.current && loopWidthRef.current > 0) {
        offsetRef.current -= SCROLL_SPEED;
        offsetRef.current = normalizeOffset(offsetRef.current, loopWidthRef.current);
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [applyTransform, reducedMotion]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const delta = event.clientX - dragStartXRef.current;
    offsetRef.current = normalizeOffset(dragStartOffsetRef.current + delta, loopWidthRef.current);
    applyTransform();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="mt-14 sm:mt-16">
      <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted sm:text-xs">
        Clients I&apos;ve worked with
      </p>

      <div
        ref={containerRef}
        className={cn(
          "client-marquee relative overflow-hidden",
          !reducedMotion && "client-marquee--draggable",
          isDragging && "client-marquee--dragging"
        )}
        aria-label="Clients worked with — drag to scroll"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="client-marquee-fade client-marquee-fade--left" aria-hidden />
        <div className="client-marquee-fade client-marquee-fade--right" aria-hidden />

        <div
          ref={innerRef}
          className={cn("client-marquee-inner flex w-max", reducedMotion && "client-marquee-inner--static")}
        >
          <div ref={trackRef}>
            <MarqueeTrack />
          </div>
          <div aria-hidden>
            <MarqueeTrack />
          </div>
        </div>
      </div>
    </div>
  );
}
