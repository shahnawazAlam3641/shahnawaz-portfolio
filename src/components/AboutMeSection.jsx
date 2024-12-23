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
import WebsocketIcon from "../svgs/WebsocketIcon";
import profileImg from "../assets/circleProfilePic.png";
import FirebaseIcon from "../svgs/FirebaseIcon";
import PostmanIcon from "../svgs/PostmanIcon";
import ArrowIcon from "../svgs/ArrowIcon";

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
  { icon: <WebsocketIcon />, title: "WebSocket" },
  { icon: <FirebaseIcon />, title: "Firebase" },
  { icon: <PostmanIcon />, title: "Postman" },
];

const hobbyData = [
  { title: "Cycling 🚴" },
  { title: "Cricket 🏏" },
  { title: "Gaming 🎮" },
  { title: "Football ⚽" },
  { title: "Fitness 🏋️‍♂️" },
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
          <p className="text-[#919191] leading-4 max-w-[400px] text-md md:text-xl">
            Explore the technologies and tools i use to craft exceptional
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
            <div className="flex  animate-reverseScroll  whitespace-nowrap">
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
            <div className="flex gap-8  animate-reverseScroll  whitespace-nowrap">
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

      {/* hobby and map container */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* beyond the code container */}
        <div className="border border-[#515151] flex flex-col gap-6 rounded-xl p-6 bg-[#212121] ">
          <div className="flex flex-col gap-2">
            <h1 className=" text-2xl md:text-4xl text-white font-bold">
              Beyond the Code
            </h1>
            <p className="text-[#919191] max-w-[400px] leading-4 text-md md:text-xl">
              Explore interest and hobbies beyong the digital realm
            </p>
          </div>
          {/* hobby cards */}
          <div className="flex flex-wrap gap-4 ">
            {hobbyData.map((hobby, index) => {
              return (
                <p
                  key={index}
                  className="py-2 px-3 bg-[#515151] text-white rounded-full "
                >
                  {hobby.title}
                </p>
              );
            })}
          </div>
        </div>

        {/*google map map */}

        <div className="relative rounded-xl w-full group md:w-[40%]  overflow-hidden border border-[#515151]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231277326!2d88.26495090163962!3d22.535406374482605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1734940718028!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />

          <img
            src={profileImg}
            alt="profilePic"
            className="w-14 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-0 rounded-full transition-all duration-500"
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000ba] group-hover:top-1/2 group-hover:bottom-1/2  transition-all duration-500"></div>
        </div>
      </div>

      <div className="border mt-20 border-[#515151] flex justify-center items-center gap-6 rounded-xl p-10 bg-[#212121] ">
        {/* about me box header */}
        <div className="flex flex-col gap-2">
          <h1 className=" text-2xl md:text-4xl text-white font-bold">
            Let's create something amazing together
          </h1>
          <p className="text-[#919191] leading-4  text-md md:text-xl">
            Ready to bring your next project to life? Let's connect and disscuss
            how i can help you acheive your goals
          </p>
        </div>
        <button className="text-[#1d2128] group w-fit h-fit flex justify-center items-center gap-4 bg-white  rounded-lg py-2 px-4 hover:scale-95 transition-all duration-300 font-sans text-lg">
          <p className="text-nowrap"> Contact Me</p>{" "}
          <div className="-rotate-45 group-hover:rotate-0 transition-all duration-200">
            <ArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutMeSection;
