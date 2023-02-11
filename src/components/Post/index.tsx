import Image from "next/image";
import Link from "next/link";
import { formartPostDate } from "../../utils/formatPostDate";

interface PostProps {
  post: {
    slug: string;
    title: string;
    excerpt: string | null | undefined;
    cover_img: string | null | undefined;
    published_at: string;
    tags: string[];
    author: {
      name: string;
      img_url?: string;
    };
  };
}

export function Post({ post }: PostProps) {
  return (
    <article className="py-8 border-t border-slate-700">
      <header className="flex gap-3 items-center mb-6">
        <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-900 ring-offset-slate-700">
          {post.author.img_url && (
            <Image
              src={post.author.img_url}
              alt={post.author.name}
              style={{ objectFit: "cover" }}
              fill
            />
          )}
        </div>
        <div>
          <strong className="block text-white">{post.author.name}</strong>
          <span className="text-slate-400">
            {formartPostDate(post.published_at)} - 4 min read
          </span>
        </div>
      </header>
      <main className="grid grid-cols-3 gap-16 mb-6">
        <div className="col-span-2">
          <Link href={post.slug}>
            <h1 className="text-3xl text-white mb-4 font-bold">{post.title}</h1>
          </Link>
          <p className="text-slate-400">{post.excerpt}</p>
        </div>
        <div className="relative overflow-hidden min-h-[150px] h-full rounded-md mb-4">
          {post.cover_img && (
            <Image
              src={post.cover_img}
              alt=""
              style={{ objectFit: "cover" }}
              fill
            />
          )}
        </div>
      </main>
      <ul className="flex gap-3 text-slate-400">
        {post.tags.map((tag) => {
          return (
            <li key={tag} className="bg-slate-700 px-4 py-2 rounded-lg">
              {tag}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
