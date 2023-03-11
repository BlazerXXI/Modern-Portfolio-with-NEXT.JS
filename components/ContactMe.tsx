import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import { easeInOut, motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData: any) =>
    (window.location.href = `mailto:ruslandendik@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);
  return (
    <div className=" relative mt-24 pt-24 h-screen flex flex-col text-center md:text-left  max-w-7xl md:justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl z-20">
        Contact
      </h3>
      <div className=" flex flex-col space-y-10 ">
        <motion.div
          animate={{
            y: [-32, 25, -32],
          }}
          transition={{ duration: 1.8, ease: easeInOut, repeat: Infinity }}
          className="flex flex-col justify-center mt-14 items-center my-2"
        >
          <ChevronDoubleDownIcon className="text-[#f7ab0a] w-20  animate-pulse" />
        </motion.div>
        <h4 className="flex flex-col text-xl md:text-4xl font-semibold text-center ">
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
            <a
              href="tel:380990849108"
              className="relative flex flex-col hover:after:border-b-2 after:absolute after:bottom-0 after:w-full  hover:after:border-[#f7ab0a] text-2xl after:duration-200 hover:opacity-70 duration-200"
            >
              +38-099-084-91-08
            </a>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <a
              href="mailto:ruslandendik@gmail.com"
              className="relative flex flex-col 
						after:absolute after:bottom-0 after:w-full hover:after:border-b-2 hover:after:border-[#f7ab0a] text-2xl after:duration-200 hover:opacity-70 duration-200"
            >
              ruslandendik@gmail.com
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto max-lg:hidden"
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
            className=" contactInput "
          />
          <button
            type="submit"
            className=" bg-[#f7ab0a] py-2 px-5 md:py-5 md:px-10  rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
