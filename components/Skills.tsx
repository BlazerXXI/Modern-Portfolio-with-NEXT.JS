import { motion } from "framer-motion";
import React from "react";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <motion.div className=" h-screen flex gap-5 relative flex-col text-center md:text-left min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className=" mt-[24px] uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className=" uppercase  tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className=" grid grid-cols-3 sm:grid-cols-5 gap-5 mt-5">
        <Skill  />
      </div>
    </motion.div>
  );
};
