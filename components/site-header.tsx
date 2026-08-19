import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="transition-colors hover:text-foreground">
            文章
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            关于
          </Link>
          <a
            href="/rss.xml"
            className="transition-colors hover:text-foreground"
          >
            RSS
          </a>
        </nav>
      </div>
    </header>
  );
}
