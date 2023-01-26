import { Hero } from "../components/Hero";
import { Post } from "../components/Post";

export default function Home() {
  return (
    <div>
      <Hero />
      <main className="max-w-5xl w-full mx-auto p-10">
        <h2 className="text-white text-2xl mb-8 text-bold">All blog posts</h2>
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  );
}
