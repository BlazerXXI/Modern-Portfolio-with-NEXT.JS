import { motion } from "framer-motion";
import React from "react";

export const SkillList = (srcLink: any) => {
  return (
    <motion.img
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      src={srcLink}
      alt=""
      className="rounded-full border border-gray-500 object-cover w-14 h-14 sm:w-24  sm:h-24 md:w-28  md:h-28 xl:w-32 xl:h-32  transition duration-300 ease-in-out"
    />
  );
};
