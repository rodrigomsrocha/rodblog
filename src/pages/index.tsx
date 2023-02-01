import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Hero } from "../components/Hero";
import { Post } from "../components/Post";
import { PostsDocument, usePostsQuery } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

export default function Home() {
  const [{ data }] = usePostsQuery();

  return (
    <div>
      <Hero />
      <main className="max-w-5xl w-full mx-auto p-10">
        <h2 className="text-white text-2xl mb-8 font-bold">All blog posts</h2>
        {data?.posts.map((post) => {
          return (
            <Post
              key={post.slug}
              post={{
                title: post.title,
                excerpt: post!.excerpt,
                cover_img: post!.coverImage?.url,
                published_at: post.publishedAt,
                tags: post!.tags,
                author: {
                  img_url: post.author!.picture?.url,
                  name: post.author!.name,
                },
              }}
            />
          );
        })}
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PostsDocument, {}).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
