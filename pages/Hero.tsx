import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";

export const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Ruslan",
      "Guy-who-loves-Coffee.tsx",
      "<Breackfast />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#f7ab0a" />
      </h1>
    </div>
  );
};
