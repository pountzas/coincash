"use client";
import navLinksData from "@/lib/navLinksData";
import { useState } from "react";
import NavbarLink from "../atoms/NavbarLink";
import CloseButton from "./CloseButton";
import { motion } from "framer-motion";

function BurgerButton() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className="relative" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
      {isBurgerOpen && (
        <motion.ul
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="absolute top-6 right-0 bg-[#0066FF] rounded-md"
        >
          <CloseButton close={() => setIsBurgerOpen(!isBurgerOpen)} />
          <NavbarLink title="Home" href="/" type="burgerTop" />
          {navLinksData.map((link) => (
            <NavbarLink
              key={link.name}
              title={link.name}
              href={link.url}
              type="burger"
            />
          ))}
        </motion.ul>
      )}
      <svg
        className="md:hidden"
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
      >
        <path
          d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
          fill="#1C1B1F"
        />
      </svg>
    </div>
  );
}

export default BurgerButton;
