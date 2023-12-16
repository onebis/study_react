"use client";
import { useCounter } from "@/app/hooks/useCounter";
import { useInputArray } from "@/app/hooks/useInputArray";

export function TestState() {
  const { count, isShow, handleClick, toggleIsShow } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();

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
