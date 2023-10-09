"use client";
import { useRouter } from "next/navigation";
import { type } from "os";

type NavbarLinkProps = {
  title: string;
  href: string;
  type: "nav" | "burger" | "burgerTop";
  extra?: string;
};

function NavbarLink({ title, href, type, extra }: NavbarLinkProps) {
  const Router = useRouter();

  const typeStyles = () => {
    switch (type) {
      case "nav":
        return "text-zinc-900 text-xl font-semibold";
      case "burger":
        return "text-white hover:text-gray-300 hover:bg-white/20 p-2 px-3 rounded-md space-y-2 text-lg";
      case "burgerTop":
        return "mt-2 text-white hover:text-gray-300 hover:bg-white/20 p-2 px-3 rounded-md space-y-2";
      default:
        return "text-zinc-900 text-xl font-semibold";
    }
  };

  return (
    <li
      onClick={() => Router.push(href)}
      className={`${typeStyles()} ${extra && extra} cursor-pointer`}
    >
      {title}
    </li>
  );
}

export default NavbarLink;
