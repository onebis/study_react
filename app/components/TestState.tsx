"use client";
import React, { useCallback, useState } from "react";

export function TestState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((count) => count + 1);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText((text) => e.target.value);
  }, []);

  const toggleIsShow = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

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
    </div>
  );
}
