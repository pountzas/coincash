import React from "react";
import Logo from "../molecules/Logo";
import LogoSmall from "../molecules/LogoSmall";
import NavLinks from "../molecules/NavLinks";

function Navbar() {
  return (
    <div className="pt-4 md:pt-11 px-6 lg:px-[164px] max-w-[1440px] grid-cols-1">

      <div className="flex items-center justify-between ">
        <LogoSmall />
        <Logo />
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;
