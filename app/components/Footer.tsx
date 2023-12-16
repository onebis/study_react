import Link from "next/link";

const ITEMS = [
  {
    id: 1,
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Learn",
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    id: 2,
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Explore starter templates for Next.js.",
  },
  {
    id: 3,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
  {
    id: 4,
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Learn",
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
];

export function Footer() {
  return (
    <div className="mb-33 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {ITEMS.map((item) => {
        return (
          <a
            href={item.href}
            className="group rounded-lg border border-transparent px-6 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
          >
            <h1 className={`mb-3 text-2xl font-semibold`}>
              {item.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                -&gt;
              </span>
            </h1>
            <p className={`m-1 max-w-[30ch] text-sm opacity-50`}>
              {item.description}
            </p>
          </a>
        );
      })}
    </div>
  );
}
