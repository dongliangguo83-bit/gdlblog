import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "关于",
  description: `关于 ${siteConfig.author} 与这个博客`,
};

export default function AboutPage() {
  return (
    <div className="prose max-w-none prose-zinc dark:prose-invert">
      <h1>关于我</h1>
      <Image
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minimalist%20flat%20illustration%20avatar%20of%20a%20software%20developer%2C%20smiling%2C%20working%20on%20a%20laptop%2C%20clean%20geometric%20shapes%2C%20soft%20blue%20and%20warm%20neutral%20tones%2C%20modern%20vector%20art%20style%2C%20centered%20composition%2C%20solid%20light%20background&image_size=square"
        alt="博主头像"
        width={160}
        height={160}
        className="rounded-full"
      />
      <p>
        你好，我是{siteConfig.author}。这是我的个人博客，用来记录技术学习、
        项目实践和生活思考。
      </p>
      <h2>这个博客</h2>
      <p>
        本站使用 Next.js 16 构建，文章以 MDX 格式撰写，通过 Vercel 部署。
        所有内容在构建时静态生成，访问速度极快。
      </p>
      <h2>联系方式</h2>
      <ul>
        <li>
          GitHub：
          <a href="https://github.com" target="_blank" rel="noreferrer">
            @yourname
          </a>
        </li>
        <li>邮箱：hi@example.com</li>
      </ul>
    </div>
  );
}
