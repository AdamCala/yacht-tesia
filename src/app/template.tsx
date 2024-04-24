"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Background from "@/components/Background";
import styles from "@/styles/main/template.module.scss";
import MenuRectangle from "@/components/assets/props/MenuRectangle";
import Navbar from "@/components/Navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const initialObjectPosition = usePathname() === "/" ? 66 : 27;
  const [objectPosition, setObjectPosition] = useState<number>(
    initialObjectPosition
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setObjectPosition(27);
    } else {
      setObjectPosition(66);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Background objectPosition={objectPosition} />
      <div>{children}</div>
      <MenuRectangle onClick={toggleMenu} className={styles.menu} />
      <h1 className={styles.logo}>
        <span>YACHT </span>
        <span>TESIA</span>
      </h1>
      <div
        className={`${styles.darken} ${
          objectPosition === 27 ? styles.main_darken : styles.sub_darken
        }`}
      />
      <Navbar isOpen={menuOpen} />
    </>
  );
}
