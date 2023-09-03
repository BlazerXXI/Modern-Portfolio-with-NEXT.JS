/* eslint-disable @next/next/no-img-element */
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Projects = () => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.9 }}
      className=" h-screen  relative flex flex-col text-left  max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className=" mt-12 pb-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className=" w-full flex overflow-x-scroll  snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 items-center">
        {projects.map((project, i) => (
          <div key={i} className=" w-screen h-screen flex-shrink-0 snap-center flex flex-col gap-10 space-y-5 items-center justify-center   ">
            <Link
              href="https://relvise-website.netlify.app/"
              rel="noreferrer noopener nofollow"
              target="_blank"
            >
              <motion.img
                initial={{
                  y: -10,
                  opacity: 0,
                }}
                transition={{ duration: 0.9, ease: easeInOut }}
                whileInView={{ opacity: 1, y: 10 }}
                className=" bg-cover max-w-[200px] sm:max-w-[400px]"
                src="https://img001.prntscr.com/file/img001/Y01lTDkNSYihCulTrZgoZQ.png"
                alt=""
              />
            </Link>
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{ duration: 0.8, ease: easeInOut }}
              whileInView={{ opacity: 1 }}
              className=" space-y-10 px-0 md:px-10 max-w-6xl"
            >
              <h4 className=" text-4xl font-semibold text-center ">
                <span className=" underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}{" "}
                </span>
                :{" "}
                <a
                  href="https://relvise-website.netlify.app/"
                  rel="noreferrer noopener nofollow"
                  target="_blank"
                >
                  WebSite
                </a>
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
