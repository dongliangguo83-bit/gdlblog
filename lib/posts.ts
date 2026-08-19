import fs from "node:fs";
import path from "node:path";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

type MdxModule = {
  metadata: Omit<PostMeta, "slug">;
};

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string): Promise<PostMeta> {
  const { metadata } = (await import(
    `@/content/posts/${slug}.mdx`
  )) as MdxModule;
  return { slug, ...metadata };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(getPost));
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
