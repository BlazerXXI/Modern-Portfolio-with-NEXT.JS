/* eslint-disable @next/next/no-img-element */
import { easeInOut, motion } from "framer-motion";
import React from "react";
import css from "styled-jsx/css";

type Props = {};

export const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.9 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className=" mt-16 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -60,
                opacity: 0,
              }}
              transition={{ duration: 1, ease: easeInOut }}
              whileInView={{ opacity: 1, y: 0 }}
              className=" max-w-[200px] sm:max-w-[400px]"
              src="https://img001.prntscr.com/file/img001/Y01lTDkNSYihCulTrZgoZQ.png"
              alt=""
            />
            <motion.div
              initial={{
                y: -60,
                opacity: 0,
              }}
              transition={{ duration: 1, ease: easeInOut }}
              whileInView={{ opacity: 1, y: 0 }}
              className=" space-y-10 px-0 md:px-10 max-w-6xl"
            >
              <h4 className=" text-4xl font-semibold text-center ">
                <span className=" underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}
                </span>
                : WebSite
              </h4>
              <p className=" text-lg text-center text-[#cecece]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti illo aperiam reiciendis? Magni nemo non nisi, quidem
                eius et inventore odio ea ullam molestias nihil hic velit! Quasi
                distinctio temporibus reprehenderit delectus animi.
              </p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className=" w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px]  -skew-y-12"></div>
    </motion.div>
  );
};
