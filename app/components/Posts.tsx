"use client";
import { useCallback, useEffect, useReducer, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type State = {
  data: Posts[];
  loading: boolean;
  error?: string;
};

type Action = {
  type: string;
  data: Posts[];
};

const initialState: State = {
  data: [],
  loading: true,
  error: undefined,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: "エラーが発生したため、データが取得できません",
      };

    default:
      throw new Error();
  }
};

export function Posts() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [state, setState] = useState<{
  //   data: Posts[];
  //   loading: boolean;
  //   error?: string;
  // }>({
  //   data: [],
  //   loading: true,
  //   error: undefined,
  // });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json: Posts[] = await res.json();
      dispatch({ type: "end", data: json });

      if (!res.ok) {
        throw new Error("エラーが発生したため、データが取得できません");
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: "error",
          data: [],
        });
      }
    }
    // setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div className={``}>ロード中</div>;
  }

  if (state.error) {
    return <div>{state.error}</div>;
  }

  if (state.data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return (
          <li key={post.id} className={`list-decimal`}>
            {post.title}
          </li>
        );
      })}
    </ol>
  );
}
