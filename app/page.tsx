import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <section className="border-b border-zinc-200 pb-10 dark:border-zinc-800">
        <h1 className="text-3xl font-bold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
          {siteConfig.description}
        </p>
      </section>
      <section className="mt-10 flex flex-col gap-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
