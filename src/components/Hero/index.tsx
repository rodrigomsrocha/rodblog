import Image from "next/image";
import { formartPostDate } from "../../utils/formatPostDate";

interface HeroProps {
  lastPosts: {
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
  }[];
}

export function Hero({ lastPosts }: HeroProps) {
  const lastPost = lastPosts[0];

  return (
    <div className="bg-slate-900 flex flex-col items-center py-8">
      <h1 className="text-white text-5xl after:h-0.5 after:w-10 after:bg-slate-700 after:block after:mx-auto after:mt-4 after:rounded-md">
        Last readings
      </h1>
      <div className="max-w-5xl w-full mx-auto grid grid-cols-2 grid-rows-3 p-10 gap-x-4">
        <div className="row-span-full p-4 border-2 border-slate-700 rounded-md">
          <div className="relative overflow-hidden w-full h-96 rounded-md mb-4">
            {lastPost.cover_img && (
              <Image
                src={lastPost.cover_img}
                alt=""
                style={{ objectFit: "cover" }}
                fill
              />
            )}
          </div>
          <span className="text-gray-400 mb-4 block text-sm">8 min read</span>
          <h1 className="text-white text-2xl mb-4 font-bold">
            {lastPost.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-700 ring-offset-slate-900">
              {lastPost.author.img_url && (
                <Image
                  src={lastPost.author.img_url}
                  alt=""
                  style={{ objectFit: "cover" }}
                  fill
                />
              )}
            </div>
            <div>
              <strong className="block text-white font-bold">
                {lastPost.author.name}
              </strong>
              <time className="text-gray-400">
                {formartPostDate(lastPost.published_at)}
              </time>
            </div>
          </div>
        </div>
        {lastPosts.slice(1, 4).map((post) => {
          return (
            <div key={post.slug} className="flex gap-4 p-4">
              <div className="h-full relative overflow-hidden min-w-[220px] rounded-md">
                {post.cover_img && (
                  <Image
                    src={post.cover_img}
                    alt={post.title}
                    style={{ objectFit: "cover" }}
                    fill
                  />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 mb-3 text-sm">8 min read</span>
                <strong className="text-xl font-bold text-white w-48 truncate">
                  {post.title}
                </strong>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-700 ring-offset-slate-900">
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
                    <strong className="block text-white font-bold">
                      {post.author.name}
                    </strong>
                    <time className="text-gray-400">20 apr 2022</time>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
