"use client";
import { useCallback, useEffect, useState } from "react";
import { usePosts } from "@/app/hooks/usePosts";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type State = {
  data: Posts[];
  loading: boolean;
  error: string;
};

export function Posts() {
  const { data, error, isLoading, isEmpty } = usePosts();
  // const { data, isLoading, error } = useSWR<Posts[]>(URL, fetcher);

  // const [state, setState] = useState<State>({
  //   data: [],
  //   loading: true,
  //   error: "",
  // });
  //
  // const getPosts = useCallback(async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const json: Posts[] = await res.json();
  //     setState({ ...state, data: json, loading: false });
  //     if (!res.ok) {
  //       throw new Error("エラーが発生したため、データが取得できません");
  //     }
  //   } catch (error: any) {
  //     setState({
  //       ...state,
  //       error: "エラーが発生したため、データが取得できません",
  //     });
  //   }
  // }, []);
  //
  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  // if (data.length === 0) {
  //   return <div>データは空です</div>;
  // }

  return (
    <ol>
      {isLoading ? (
        <div>ロード中</div>
      ) : (
        data!.map((post) => {
          return (
            <li key={post.id} className={`list-decimal`}>
              {post.title}
            </li>
          );
        })
      )}
    </ol>
  );
}
