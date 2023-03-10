import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <header className=" fixed top-0 p-1 pr-5 md:pr-10 flex items-start justify-between min-w-full mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          className=" hover:opacity-80 transition-all ease-in-out duration-300"
          target="_blank"
          rel="noopener"
          url="https://github.com/BlazerXXI"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className=" hover:opacity-80 transition-all ease-in-out duration-300"
          target="_blank"
          rel="noopener"
          url="https://www.linkedin.com/in/ruslan-karliuk-33a988250/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className=" hover:opacity-80 transition-all ease-in-out duration-300"
          target="_blank"
          rel="noopener"
          url="https://t.me/BlazerXXI"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center"
      >
        <SocialIcon
          className=" 
					cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300"
          url="mailto:ruslandendik@gmail.com"
          target="_blank"
          rel="noopener"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <a
          href="mailto:ruslandendik@gmail.com"
          className=" relative uppercase hidden md:flex md:flex-col text-sm text-gray-400 duration-300 hover:text-[#f7ab0a]/40
					"
        >
          Get In Touch
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
