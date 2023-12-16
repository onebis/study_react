"use client";
import React, { useState } from "react";

export function TestState() {
  const [count, setCount] = useState(0);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <div className="flex justify-center">{count}</div>
      <button
        className="flex justify-center text-blue-600"
        onClick={handleClick}
      >
        click me（indexページ）
      </button>
    </div>
  );
}
