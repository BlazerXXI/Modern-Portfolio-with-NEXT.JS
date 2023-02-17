import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import { easeInOut, motion } from "framer-motion";
import { useForm } from "react-hook-form";

export const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData: any) => console.log(formData);
  return (
    <div className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className=" flex flex-col space-y-10">
        <motion.div
          animate={{
            y: [-32, 25, -32],
          }}
          transition={{ duration: 1.8, ease: easeInOut, repeat: Infinity }}
          className="flex flex-col justify-center my-2"
        >
          <ChevronDoubleDownIcon className="text-[#f7ab0a] h-28 w-h-28 animate-pulse" />
        </motion.div>
        <h4 className="flex flex-col text-4xl font-semibold text-center ">
          I have got just what you need.
          <a
            href="mailto:ruslandendik@gmail.com"
            className=" decoration-[#f7ab0a]/50 underline"
          >
            Lets Talk.
          </a>
        </h4>
        <div className=" space-y-10">
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <a href="tel:380990849108" className=" text-2xl">
              +38-099-084-91-08
            </a>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <a href="mailto:ruslandendik@gmail.com" className=" text-2xl">
              ruslandendik@gmail.com
            </a>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <a
              href="https://goo.gl/maps/K219nTuTQxDrwJtv6"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className=" text-2xl"
            >
              123 Developer Lane
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className=" contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className=" contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className=" contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className=" contactInput"
          />
          <button
            type="submit"
            className=" bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
