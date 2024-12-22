import ReactIcon from "../svgs/ReactIcon";
import CssIcon from "../svgs/CssIcon";
import GithubIcon from "../svgs/GithubIcon";
import GitIcon from "../svgs/GitIcon";
import HtmlIcon from "../svgs/HtmlIcon";
import JavascriptIcon from "../svgs/JavascriptIcon";
import NextjsIcon from "../svgs/NextJsIcon";
import NodeJsIcon from "../svgs/NodeJsIcon";
import PostgressIcon from "../svgs/PostgressIcon";
import PrismaIcon from "../svgs/PrismaIcon";
import ReduxIcon from "../svgs/ReduxIcon";
import TypescriptIcon from "../svgs/TypescriptIcon";
import ExpressJsIcon from "../svgs/ExpressJsIcon";

const iconData = [
  { icon: <ReactIcon />, title: "React" },
  { icon: <CssIcon />, title: "CSS" },
  { icon: <GithubIcon />, title: "Github" },
  { icon: <GitIcon />, title: "Git" },
  { icon: <HtmlIcon />, title: "HTML" },
  { icon: <JavascriptIcon />, title: "JavaScript" },
  { icon: <NextjsIcon />, title: "NextJS" },
  { icon: <NodeJsIcon />, title: "NodeJS" },
  { icon: <PostgressIcon />, title: "Postgress" },
  { icon: <PrismaIcon />, title: "Prisma" },
  { icon: <ReduxIcon />, title: "Redux" },
  { icon: <TypescriptIcon />, title: "TypeScript" },
  { icon: <ExpressJsIcon />, title: "ExpressJS" },
];

const AboutMeSection = () => {
  return (
    <div className="px-6 flex flex-col gap-10 py-20">
      {/* about me header outside box */}
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

      {/* about me box */}

      <div className="border border-[#515151] flex flex-col gap-6 rounded-xl p-6 bg-[#212121] ">
        {/* about me box header */}
        <div className="flex flex-col gap-2">
          <h1 className=" text-2xl md:text-4xl text-white font-bold">
            My Toolbox
          </h1>
          <p className="text-[#919191] leading-4 text-md md:text-xl">
            Explore the technologies and tools i use <br /> to craft exceptional
            digital expertise
          </p>
        </div>

        {/* about me icons container */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden flex ">
            <div className="flex   animate-scroll whitespace-nowrap">
              {iconData.map((icon, index) => {
                return (
                  <div
                    className="ml-8 flex gap-4 justify-center items-center border border-[#515151] py-2 px-4 rounded-md"
                    key={index}
                  >
                    <span className="">{icon.icon}</span>
                    <span className="text-white font-bold text-xl">
                      {icon.title}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-8  animate-scroll whitespace-nowrap">
              {iconData.map((icon, index) => {
                return (
                  <div
                    className="flex gap-4 justify-center items-center border border-[#515151] py-2 px-4 rounded-md"
                    key={index}
                  >
                    <span className="">{icon.icon}</span>
                    <span className="text-white font-bold text-xl">
                      {icon.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative  overflow-hidden flex ">
            <div className="flex    whitespace-nowrap">
              {iconData.map((icon, index) => {
                return (
                  <div
                    className="ml-8 flex gap-4 justify-center items-center border border-[#515151] py-2 px-4 rounded-md"
                    key={index}
                  >
                    <span className="">{icon.icon}</span>
                    <span className="text-white font-bold text-xl">
                      {icon.title}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-8    whitespace-nowrap">
              {iconData.map((icon, index) => {
                return (
                  <div
                    className="flex gap-4 justify-center items-center border border-[#515151] py-2 px-4 rounded-md"
                    key={index}
                  >
                    <span className="">{icon.icon}</span>
                    <span className="text-white font-bold text-xl">
                      {icon.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
