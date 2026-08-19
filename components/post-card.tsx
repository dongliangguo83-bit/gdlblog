import type { PostMeta } from "@/lib/posts";
import Link from "next/link";

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <time className="text-sm text-zinc-500 dark:text-zinc-400">
          {formatDate(post.date)}
        </time>
        <h2 className="mt-1 text-xl font-semibold tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {post.title}
        </h2>
        <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
