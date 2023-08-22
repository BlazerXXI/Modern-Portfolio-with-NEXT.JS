/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
	const [text] = useTypewriter({
		words: ["Hi, The Name's Ruslan", "Front end developer", "Scroll down"],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			transition={{ duration: 2.2 }}
			whileInView={{ opacity: 1, x: 0 }}
			className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
		>
			<BackgroundCircles />
			<div>
				<img
					className=" rounded-full h-32 w-32 mx-auto object-cover"
					src="./public/avatar.jpg"
					alt=""
				/>
			</div>
			<div className="z-20">
				<h1 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Software Engineer
				</h1>
				<h2 className="text-5xl lg:text-6xl font-semibold px-10 min-h-[160px] mt-[30px]">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#f7ab0a" />
				</h2>
				<div className="md:pt-5 mb-[50px]">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
					<Link href="#contact">
						<button className="heroButton">Contact</button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};
