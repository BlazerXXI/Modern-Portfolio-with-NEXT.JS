import React from "react";
import { SkillImg } from "./SkillImg";

export const Skill = () => {
  return (
    <ul className="group relative flex cursor-pointer gap-5 flex-wrap justify-center [&>*]:justify-center [&>*]:flex">
      <SkillImg />
    </ul>
  );
};
