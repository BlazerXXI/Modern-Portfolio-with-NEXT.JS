import { motion } from "framer-motion";
import React from "react";

export const SkillImg = () => {
  let linksArr = [
    {
      percent: "35%",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433",
    },
    {
      percent: "60%",
      link: "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",
    },
    {
      percent: "99%",
      link: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    },
    {
      percent: "70%",
      link: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      percent: "65%",
      link: "https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png",
    },
  ];
  console.log();
  const link = linksArr.map((imgLink) => (
    <li key={linksArr.length} className=" list-none relative">
      <div className=" absolute text-center text-black font-extrabold items-center flex justify-center opacity-0 hover:opacity-60 transition duration-300 ease-in-out hover:bg-white w-14 h-14 sm:h-24 sm:w-24 md:w-28  md:h-28  xl:w-32 xl:h-32 rounded-full z-0">
        {imgLink.percent}
      </div>
      <motion.img
        key={imgLink.link.length}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        src={imgLink.link}
        alt=""
        className="rounded-full border border-gray-500 object-cover w-14 h-14 sm:w-24  sm:h-24 md:w-28  md:h-28 xl:w-32 xl:h-32  transition duration-300 ease-in-out "
      />
    </li>
  ));

  console.log(link);
  return <>{link}</>;
};
