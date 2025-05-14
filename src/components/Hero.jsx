import TwitterIcon from "../svgs/TwitterIcon";
import LinkedinIcon from "../svgs/LinkedinIcon";
import TypescriptIcon from "../svgs/TypescriptIcon";
import { useEffect, useState } from "react";
import MongoDbIcon from "../svgs/MongoDbIcon";
import JavascriptIcon from "../svgs/JavascriptIcon";
import PostgressIcon from "../svgs/PostgressIcon";
import GithubIcon from "../svgs/GithubIcon";

// const Hero = () => {
//   return (
//     <div className="relative max-w-full mt-24 flex flex-col gap-1 ">
//       <p className="animate-appear text-center  font-semibold text-xl md:text-2xl text-[#ffffffcc]">
//         Shahnawaz Alam,
//       </p>
//       <h1 className="animate-appear text-center  font-bold text-3xl md:text-6xl lg:text-7xl text-white ">
//         FULLSTACK DEVELOPER
//       </h1>

//       <div className="flex gap-6 mx-auto mt-8 justify-center items-center flex-wrap">
//         <button className="animate-appear text-[#1d2128] bg-white rounded-lg py-2 px-4 hover:scale-95 transition-all duration-300 font-medium text-lg">
//           Hire Me
//         </button>
//         <button className="animate-appear text-[#1d2128] bg-white rounded-lg py-2 px-4 hover:scale-95 transition-all duration-300 font-medium text-lg">
//           Download CV
//         </button>
//       </div>

//       <div className="flex  flex-col-reverse md:flex-row items-center gap-8 justify-between mt-56 px-5">
//         <div className="animate-appear flex gap-5 items-center">
//           <p className="text-xs text-white  font-bold">SAY HELLO,</p>
//           <div className=" bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200">
//             <LinkedinIcon />
//           </div>
//           <div className=" bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200">
//             <TwitterIcon />
//           </div>
//           <div className=" bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200">
//             <InstagramIcon />
//           </div>
//         </div>

//         <p className="animate-appear text-sm text-white  font-semibold max-w-72 text-center md:text-start">
//           Hi, I'm Shahnawaz Alam, a web developer passionate about crafting
//           user-friendly and visually appealing web applications. Based in
//           Kolkata, India.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="max-w-[1060px] mx-auto relative  mt-24 flex flex-col gap-1 ">
      <div
        className="hidden md:block absolute animate-appear -top-20 left-5 transform transition-all"
        style={{
          transform: `translate(${cursorPosition.x * 0.05}px, ${
            cursorPosition.y * 0.05
          }px)`,
        }}
      >
        <JavascriptIcon shadow={true} width={14} />
      </div>
      <div
        className="hidden md:block absolute  animate-appear  -top-20 right-20 transform transition-all"
        style={{
          transform: `translate(${cursorPosition.x * 0.05}px, ${
            cursorPosition.y * 0.05
          }px)`,
        }}
      >
        <MongoDbIcon shadow={true} width={14} />
      </div>
      <div
        className="hidden md:block absolute shadow-2xl shadow-blue-600 animate-appear bottom-44 left-5 transform transition-all"
        style={{
          transform: `translate(${cursorPosition.x * 0.05}px, ${
            cursorPosition.y * 0.05
          }px)`,
        }}
      >
        <PostgressIcon shadow={true} width={14} />
      </div>
      <div
        className="hidden md:block absolute animate-appear bottom-44   right-5 transform transition-all"
        style={{
          transform: `translate(${cursorPosition.x * 0.05}px, ${
            cursorPosition.y * 0.05
          }px)`,
        }}
      >
        <TypescriptIcon shadow={true} width={14} />
      </div>
      {/* Moving Blurred Background */}

      <p className="animate-appear text-center font-semibold text-xl md:text-2xl text-[#ffffffcc]">
        Shahnawaz Alam,
      </p>
      <h1 className="animate-appear text-center font-bold text-3xl md:text-6xl lg:text-7xl text-white">
        FULLSTACK DEVELOPER
      </h1>

      <div className="flex gap-6 mx-auto mt-8 justify-center items-center flex-wrap">
        <button
          onClick={() =>
            (window.location.href =
              "mailto:shahnawazalam3641@gmail.com?subject=Hiring Inquiry")
          }
          className="animate-appear text-[#1d2128] bg-white hover:bg-transparent border-2 hover:text-white rounded-md md:rounded-lg py-1 px-2 md:py-2 md:px-4  transition-all duration-300 font-medium text-md md:text-lg"
        >
          Hire Me
        </button>
        <a
          href="https://drive.google.com/file/d/1ufS7JY-5fbnE5sksDRrOlaqPR8ShiIkA/view?usp=sharing"
          target="_blank"
          className="animate-appear text-[#1d2128] bg-white hover:bg-transparent border-2 hover:text-white  rounded-md md:rounded-lg py-1 px-2 md:py-2 md:px-4  transition-all duration-300 font-medium text-md md:text-lg"
        >
          Download CV
        </a>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8 justify-between mt-56 px-5">
        <div className="animate-appear flex gap-5 items-center">
          <p className="text-xs text-white font-bold">SAY HELLO,</p>
          <a
            href="https://www.linkedin.com/in/alam-shahnawaz/"
            target="_blank"
            className="cursor-pointer bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200 border border-[#212121] hover:border-white"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://x.com/shahnawazCodes"
            target="_blank"
            className="cursor-pointer bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200 border border-[#212121] hover:border-white"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/shahnawazAlam3641"
            target="_blank"
            className="cursor-pointer bg-[#212121] p-2 rounded-full hover:scale-95 transition-all duration-200  border border-[#212121] hover:border-white"
          >
            <GithubIcon color={"white"} />
          </a>
        </div>

        <p className="animate-appear text-sm text-white font-semibold max-w-72 text-center md:text-start">
          Hi, {`I'm `}Shahnawaz Alam, a web developer passionate about crafting
          user-friendly and visually appealing web applications. Based in
          Kolkata, India.
        </p>
      </div>
    </div>
  );
};

export default Hero;
