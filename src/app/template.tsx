"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Background from "@/components/Background";
import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const initialObjectPosition = usePathname() === "/" ? 66 : 27;
  const [objectPosition, setObjectPosition] = useState<number>(
    initialObjectPosition
  );

  useEffect(() => {
    if (pathname === "/") {
      setObjectPosition(27);
    } else {
      setObjectPosition(66);
    }
  }, [pathname]);

  return (
    <>
      <Background objectPosition={objectPosition} />
      <div>{children}</div>
    </>
  );
}
