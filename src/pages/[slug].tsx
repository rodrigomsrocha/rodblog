import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { PostDocument, usePostQuery } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";
import { formartPostDate } from "../utils/formatPostDate";

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ slug }: PostProps) {
  const [{ data }] = usePostQuery({
    variables: {
      slug,
    },
  });

  return (
    <div>
      <div className="bg-slate-900 py-8">
        <div className="flex items-center gap-10 max-w-5xl w-full mx-auto justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-slate-400">
              <time>{formartPostDate(data?.post?.publishedAt)}</time> -{" "}
              <span>10 min read</span>
            </div>
            <h1 className="text-white text-4xl font-bold">
              {data?.post?.title}
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-700 ring-offset-slate-900">
                {data?.post?.author?.picture?.url && (
                  <Image
                    src={data?.post?.author?.picture?.url}
                    alt=""
                    style={{ objectFit: "cover" }}
                    fill
                  />
                )}
              </div>
              <div>
                <strong className="block text-white font-bold">
                  {data?.post?.author?.name}
                </strong>
              </div>
            </div>
          </div>
          {data?.post?.coverImage?.url && (
            <img
              className="h-[400px] w-[500px] object-cover rounded-lg"
              src={data.post.coverImage.url}
              alt={data.post.title}
            />
          )}
        </div>
      </div>
      <div className="max-w-5xl w-full mx-auto py-6 text-white">
        {data?.post?.content.html && (
          <div dangerouslySetInnerHTML={{ __html: data.post.content.html }} />
        )}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  client.query(PostDocument, { slug: params!.slug }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params!.slug,
    },
  };
};
