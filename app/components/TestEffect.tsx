"use client";
import { useEffect } from "react";

export function TestEffect() {
  useEffect(() => {
    //マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    return () => {
      //アンマウント時の処理
      document.body.style.backgroundColor = "";
    };
  }, []);
}
