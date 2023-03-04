import { motion } from "framer-motion";
import React from "react";

export const SkillImg = () => {
  const linksArr = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  ];
  var linkSrc: any = [];
  for (let i = 0; i < linksArr.length; i++) {
    linkSrc = linksArr[i];
    console.log(linkSrc);
  }
  return (
    <>
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        src={linkSrc}
        alt=""
        className="rounded-full border border-gray-500 object-cover w-14 h-14 sm:w-24  sm:h-24 md:w-28  md:h-28 xl:w-32 xl:h-32  transition duration-300 ease-in-out"
      />
      ;
    </>
  );
};
