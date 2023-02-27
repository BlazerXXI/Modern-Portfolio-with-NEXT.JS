/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import { Hero } from "../components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ContactMe } from "@/components/ContactMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Ruslan`s Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className=" snap-center ">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className=" snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className=" snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className=" snap-start">
        <ContactMe />
      </section>

      <footer className=" sticky bottom-7 w-full cursor-pointer">
        <div className=" flex items-center justify-center">
          <a className=" flex" href="#hero">
            <svg
              className="flex h-10 w-10 rounded-full border-[#ffffff88] duration-300 transition-all hover:scale-90 hover:opacity-60 filter grayscale hover:grayscale-0 cursor-pointer w- fill-[#f7ab0a]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>{" "}
          </a>
        </div>
      </footer>
    </div>
  );
}
