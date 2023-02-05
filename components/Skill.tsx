import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

export const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt=""
        className=" rounded-full border border-gray-500 object-cover w-14 h-14 sm:w-24  sm:h-24 md:w-28  md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 sm:h-24 sm:w-24 md:w-28  md:h-28  xl:w-32 xl:h-32 rounded-full z-0">
        <div className=" flex items-center justify-center h-full">
          <p className=" text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};
