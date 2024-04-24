import React, { useState } from "react";
import Image from "next/image";
import background from "../../public/assets/background.jpg";

interface Props {
  objectPosition: number;
}

const Background = ({ objectPosition }: Props) => {
  return (
    <Image
      alt="Background"
      src={background}
      placeholder="blur"
      quality={100}
      fill
      priority={true}
      sizes="100vw"
      style={{
        objectFit: "cover",
        objectPosition: `center ${objectPosition}%`,
        zIndex: -2,
        transition: "object-position 1s ease-in-out",
      }}
    />
  );
};

export default Background;
