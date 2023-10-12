"use client";
import navLinksData from "@/lib/navLinksData";
import { useState } from "react";
import NavbarLink from "../atoms/NavbarLink";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerIcon from "@/public/icons/HamburgerIcon";
import CloseIcon from "@/public/icons/CloseIcon";

function BurgerButton() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div
      className="relative md:hidden"
      onClick={() => setIsBurgerOpen(!isBurgerOpen)}
    >
      <AnimatePresence>
        {isBurgerOpen && (
          <motion.ul
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="absolute top-6 right-0 bg-[#0066FF] rounded-md"
          >
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
      </AnimatePresence>
      {!isBurgerOpen ? <HamburgerIcon /> : <CloseIcon />}
    </div>
  );
}

export default BurgerButton;
