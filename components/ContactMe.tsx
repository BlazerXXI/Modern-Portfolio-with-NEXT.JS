import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const ContactMe = () => {
  return (
    <div className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className=" flex flex-col space-y-10">
        <motion.div
          animate={{
            y: 32,
          }}
          transition={{ duration: 1.3, ease: "linear", repeat: Infinity }}
          className="flex flex-col justify-center my-2"
        >
          <ChevronDoubleDownIcon className="text-[#f7ab0a] h-28 w-h-28 animate-pulse" />
        </motion.div>
        <h4 className=" text-4xl font-semibold text-center">
          I have got just what you need.
          <span className=" decoration-[#f7ab0a]/50 underline">Lets Talk.</span>
        </h4>
        <div className=" space-y-10">
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">+380990849108</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">ruslandendik@gmail.com</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">123 Developer Lane</p>
          </div>
        </div>
      </div>
    </div>
  );
};
