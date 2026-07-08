import { BlogPageContent } from "@/components/blog/BlogPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ashikul Islam",
  description:
    "QA automation insights, framework migration guides, and testing strategies from a Software QA Engineer.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
