import React from "react";
import LinkedinIcon from "../svgs/LinkedinIcon";
import TwitterIcon from "../svgs/TwitterIcon";
import InstagramIcon from "../svgs/InstagramIcon";
import GithubIcon from "../svgs/GithubIcon";

const Footer = () => {
  return (
    <div className="flex flex-col  mt-10 max-w-[95vw] mx-auto">
      <div className="w-full bg-[#515151] h-[2px]"> </div>

      <div className="text-white flex justify-center md:justify-between items-center my-5 flex-wrap gap-6 ">
        <p>© 2024 All rights reserved.</p>
        <p>
          Built with 💛 by <span className="font-semibold">Shahnawaz Alam</span>
        </p>

        <div className="animate-appear flex gap-5 items-center">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/alam-shahnawaz/"
            target="_blank"
            className="cursor-pointer bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200 border border-[#212121] hover:border-white"
          >
            <LinkedinIcon />
          </a>
          <a
            title="Twitter"
            href="https://x.com/shahnawazCodes"
            target="_blank"
            className="cursor-pointer bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200 border border-[#212121] hover:border-white"
          >
            <TwitterIcon />
          </a>
          <a
            title="Github"
            href="https://github.com/shahnawazAlam3641"
            target="_blank"
            className="cursor-pointer bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200  border border-[#212121] hover:border-white"
          >
            <GithubIcon color={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
