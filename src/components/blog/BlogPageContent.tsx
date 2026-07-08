"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/data/resume";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[number];
  index: number;
}) {
  return (
    <SectionReveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -3 }}
        className="card group relative overflow-hidden transition-colors hover:border-border-strong"
      >
        <div className="p-6 sm:p-8">
          {post.featured && (
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
              Featured
            </span>
          )}

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">{post.category}</p>
              <h2 className="mt-2 text-xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                {post.title}
              </h2>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all group-hover:border-accent/30 group-hover:text-accent">
              <ArrowUpRight size={16} />
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs text-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 text-[10px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="absolute inset-0"
          aria-label={`Read ${post.title}`}
        />
      </motion.article>
    </SectionReveal>
  );
}

export function BlogPageContent() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen px-5 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="mt-8">
            <SectionHeader
              label="Blog"
              title="Thoughts on QA, FinTech & AI."
              description="Manual testing strategies, automation insights, API validation tips, and lessons from shipping quality in FinTech and AI products."
            />
          </div>
        </SectionReveal>

        {featured.length > 0 && (
          <div className="mt-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Featured</p>
            <div className="grid gap-4">
              {featured.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">All Posts</p>
          <div className="grid gap-4">
            {rest.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i + featured.length} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
