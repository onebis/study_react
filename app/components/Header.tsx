import Link from "next/link";

export function Header() {
  return (
    <footer className="w-1/6 flex justify-around ">
      <Link className="hover:text-amber-300" href="/">
        {" "}
        Index{" "}
      </Link>
      <Link className="hover:text-amber-300" href="/about">
        {" "}
        About{" "}
      </Link>
    </footer>
  );
}
