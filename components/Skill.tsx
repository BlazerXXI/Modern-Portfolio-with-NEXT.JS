import React from "react";
import { SkillList } from "./SkillList";

export const Skill = (srcLinks: any) => {
  return (
    <div className="group relative flex cursor-pointer">
      <SkillList key={srcLinks?.length} srcLink={srcLinks} />
      <div className=" absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 sm:h-24 sm:w-24 md:w-28  md:h-28  xl:w-32 xl:h-32 rounded-full z-0"></div>
    </div>
  );
};
