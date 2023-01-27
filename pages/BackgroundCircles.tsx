import React from "react";

export const BackgroundCircles = () => {
  return (
    <div className=" relative flex justify-center items-center">
      <div className=" absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className=" rounded-full border border-[#f7abba] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="absolute  border border-[#333333] rounded-full h-[880] w-[880] mt-52 animate-ping" />
      <div />
    </div>
  );
};
