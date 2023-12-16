"use client";
import React, { useCallback, useState } from "react";

export function TestState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([""]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText((prevText) => e.target.value);
  }, []);

  const toggleIsShow = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray: string[]) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が存在します");
        return prevArray;
      }
      setText((prevText) => "");
      return [...prevArray, text];
    });
  }, [text]);

  return (
    <div>
      <div className="flex justify-center h-7">{isShow ? count : null}</div>

      <button
        className="flex justify-center text-blue-600"
        onClick={handleClick}
      >
        click me（indexページ）
      </button>
      <button
        className="mt-3 w-full flex justify-center bg-blue-900 text-black hover:bg-blue-400"
        onClick={toggleIsShow}
      >
        {isShow ? "非表示" : "表示"}
      </button>
      <label className="block mt-3">お名前</label>
      <input
        className="text-black w-full flex justify-center mt-1"
        value={text}
        onChange={handleChange}
      />
      <button
        className="mt-3 w-full flex justify-center bg-blue-900 text-black hover:bg-blue-400"
        onClick={handleAdd}
      >
        追加
      </button>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
