"use client";
import { useCallback, useEffect, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function Posts() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json: Posts[] = await res.json();
      setPosts(json);
      if (!res.ok) {
        throw new Error("エラーが発生したため、データが取得できません");
      }
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <div className={``}>ロード中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (posts.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {posts.map((post) => {
        return (
          <li key={post.id} className={`list-decimal`}>
            {post.title}
          </li>
        );
      })}
    </ol>
  );
}
