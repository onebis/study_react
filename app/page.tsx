import Image from "next/image";
import { Footer } from "@/app/components/Footer";
import { Headline } from "@/app/components/Headline";
import { Header } from "@/app/components/Header";
import { TestState } from "@/app/components/TestState";
import { TestEffect } from "@/app/components/TestEffect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TestEffect />
      <Header />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Headline title="index page" comp={<div>here</div>}>
          foo
        </Headline>
      </div>
      <TestState />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        this is index
      </div>
      <Footer />
    </main>
  );
}
