import { formatDate } from "@/components/post-card";
import { getPost, getPostSlugs } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;

  let Post: React.ComponentType;
  let post;
  try {
    const mod = await import(`@/content/posts/${slug}.mdx`);
    Post = mod.default;
    post = { slug, ...mod.metadata };
  } catch {
    notFound();
  }

  return (
    <div>
      <Link
        href="/"
        className="text-sm text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400"
      >
        ← 返回文章列表
      </Link>
      <header className="mt-6 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <time>{formatDate(post.date)}</time>
          {post.tags?.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <article className="prose mt-8 max-w-none prose-zinc dark:prose-invert prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-800">
        <Post />
      </article>
    </div>
  );
}
