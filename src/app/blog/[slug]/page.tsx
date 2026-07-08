import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/resume";
import { ArrowLeft, Clock } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Ashikul Islam`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen px-5 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>

        <header className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{post.category}</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} read
            </span>
          </div>
        </header>

        <div className="card mt-10 p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-foreground/70">{post.excerpt}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            This is a placeholder for the full blog post. Replace this content with your actual
            article — you can use MDX files, a CMS like Sanity or Contentful, or markdown files
            in the repository.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
