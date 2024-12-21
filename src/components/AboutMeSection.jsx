import React from "react";

const AboutMeSection = () => {
  return (
    <div className="px-6 flex flex-col gap-10 py-20">
      <div className="flex gap-2 md:gap-4 flex-col">
        <h1 className="font-sans font-semibold text-xl md:text-3xl text-white text-center">
          About Me
        </h1>
        <h1 className="font-sans font-bold text-2xl md:text-5xl text-white text-center">
          A Glimpse Into My World
        </h1>
        <h4 className="font-sans  text-md md:text-xl text-[#616161] text-center">
          Learn more about who i am, what i do, <br /> and what inspires me.
        </h4>
      </div>

      <div className="border border-[#515151] flex flex-col gap-4 rounded-xl p-6">
        <h1 className=" text-2xl md:text-4xl text-white font-bold">
          My Toolbox
        </h1>
        <p className="text-[#919191] leading-4 text-md md:text-xl">
          Explore the technologies and tools i use <br /> to craft exceptional
          digital expertise
        </p>
      </div>
    </div>
  );
};

export default AboutMeSection;
