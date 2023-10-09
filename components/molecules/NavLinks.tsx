import BurgerButton from "./BurgerButton";
import NavbarLink from "../atoms/NavbarLink";
import NavButton from "./NavButton";

import navLinksData from "@/lib/navLinksData";

const NavLinks = () => {
  return (
    <div className=" inline-flex h-[54px] justify-start items-center">
      <ul className="hidden md:flex grow shrink basis-0 h-[54px] justify-end items-center gap-6">
        {navLinksData.map((link) => (
          <NavbarLink key={link.name} title={link.name} href={link.url} type='nav' />
        ))}
        <NavButton title="Get the app" />
      </ul>
      <BurgerButton />
    </div>
  );
};

export default NavLinks;
