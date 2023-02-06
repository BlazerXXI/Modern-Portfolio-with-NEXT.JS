import { motion } from "framer-motion";
import React from "react";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        className="-mb-32 md:mb-0 flex-shrink-0 w-28 h-28  rounded-full md:rounded-lg object-cover md:w-63 md:h-80	xl:w-[300px] xl:h-[400px]"
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.8,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/MPJD3ZJ/IMG-20220528-155521-510.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className=" text-base">
          My name is Ruslan, I am a front-end developer. Ready to make a
          high-quality, semantic site layout using HTML, CSS, SCSS, Tailwind,
          JavaScript, React. I create a fully responsive web page that gives you
          the opportunity to save a lot of money.
        </p>
      </div>
    </motion.div>
  );
};
