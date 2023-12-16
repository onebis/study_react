"use client";
import { Header } from "@/app/components/Header";
import { useCallback, useEffect, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Posts[]>([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json: Posts[] = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <ol>
        {posts.map((post) => {
          return (
            <li key={post.id} className={`list-decimal`}>
              {post.title}
            </li>
          );
        })}
      </ol>
    </main>
  );
}
