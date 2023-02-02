import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Hero } from "../components/Hero";
import { Post } from "../components/Post";
import { PostsDocument, usePostsQuery } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

export default function Home() {
  const [{ data }] = usePostsQuery();

  const formattedArrayPosts = data?.posts.map((post) => {
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post!.excerpt,
      cover_img: post!.coverImage?.url,
      published_at: post.publishedAt,
      tags: post!.tags,
      author: {
        img_url: post.author!.picture?.url,
        name: post.author!.name,
      },
    };
  });

  const lastPosts = formattedArrayPosts!.slice(0, 4);

  return (
    <div>
      <Hero lastPosts={lastPosts} />
      <main className="max-w-5xl w-full mx-auto p-10">
        <h2 className="text-white text-2xl mb-8 font-bold">All blog posts</h2>
        {formattedArrayPosts &&
          formattedArrayPosts.slice(3, -1).map((post) => {
            return <Post key={post.slug} post={post} />;
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
