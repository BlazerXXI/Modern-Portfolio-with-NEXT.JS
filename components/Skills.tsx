import { motion } from "framer-motion";
import React from "react";
import { Skill } from "./Skill";

export const Skills = () => {
  const linksArr = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433",
  ];
  for (let i = 0; i < linksArr.length; i++) {
    const linkSrc = linksArr[i];
    console.log(linkSrc);
    return linkSrc;
  }
  return (
    <motion.div className=" h-screen flex gap-5 relative flex-col text-center md:text-left min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className=" mt-[24px] uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className=" uppercase  tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className=" grid grid-cols-3 sm:grid-cols-5 gap-5 mt-5">
        <Skill srcLinks={linkSrc} />
      </div>
    </motion.div>
  );
};
