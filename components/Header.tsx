import React from "react";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          className=" hover:opacity-80 transition-all"
          url="https://github.com/BlazerXXI"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className=" hover:opacity-80 transition-all"
          url="https://www.linkedin.com/in/ruslan-karliuk-33a988250/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className=" hover:opacity-80 transition-all"
          url="https://t.me/BlazerXXI"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div>
        <SocialIcon
          className=" 
					cursor-pointer hover:opacity-80 transition-all"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase">Get In Touch</p>
      </div>
    </header>
  );
};

export default Header;
