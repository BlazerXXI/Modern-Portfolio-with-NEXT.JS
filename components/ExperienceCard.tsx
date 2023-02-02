/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ExperienceCard = () => {
  return (
    <div>
      <article className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10">
        <img
          className=" w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover"
          src="https://picsum.photos/200"
          alt=""
        />
        <div className=" px-0 md:px-10">
          <h4 className=" text-4xl font-light">Software engineer</h4>
          <p className="font-bold text-2xl mt-1">COMPANY NAME</p>
          <div className="flex space-x-2 my-2">
            <img
              className=" h-10 w-10 rounded-full"
              src="https://cutewallpaper.org/24/javascript-png/the-future-is-javascript.png"
              alt=""
            />
            <img
              className=" h-10 w-10 rounded-full"
              src="https://cutewallpaper.org/24/javascript-png/the-future-is-javascript.png"
              alt=""
            />
            <img
              className=" h-10 w-10 rounded-full"
              src="https://cutewallpaper.org/24/javascript-png/the-future-is-javascript.png"
              alt=""
            />
          </div>
          <p className=" uppercase py-5 text-gray-300">
            Started work... - Ended...
          </p>
          <ul className="list-disc space-y-4 mt-5 text-lg">
            <li>Sumary points</li>
            <li>Sumary points</li>
            <li>Sumary points</li>
            <li>Sumary points</li>
            <li>Sumary points</li>
          </ul>
        </div>
      </article>
    </div>
  );
};
