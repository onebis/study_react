import Link from "next/link";

export function Header() {
  const LINKS = [
    { href: "/", title: "Index" },
    { href: "/about", title: "About" },
    { href: "/study", title: "Study" },
  ];
  return (
    <footer className="w-1/6 flex justify-around ">
      {LINKS.map((item) => {
        return (
          <Link
            key={item.href}
            className="hover:text-amber-300"
            href={item.href}
          >
            {" "}
            {item.title}{" "}
          </Link>
        );
      })}
    </footer>
  );
}
