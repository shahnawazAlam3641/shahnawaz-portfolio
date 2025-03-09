// import DarkIcon from "../svgs/DarkIcon";
import { Link } from "react-router-dom";
import profileImg from "../assets/circleProfilePic.png";

const Navbar = () => {
  return (
    <div
      id="home"
      className=" animate-appear pt-6 pb-2  w-full max-w-[650] flex flex-col gap-4 text-white "
    >
      <img
        src={profileImg}
        alt="profilePic"
        className="w-14 mx-auto md:hidden"
      />
      <div className="flex mx-auto gap-6 items-center">
        <a
          href="#home"
          className=" text-sm md:text-lg font-bold text-[#ffffffcc] cursor-pointer hover:scale-95 transition-all duration-200"
        >
          Home
        </a>
        <a
          href="#projects"
          className=" text-sm md:text-lg font-bold text-[#ffffffcc] cursor-pointer hover:scale-95 transition-all duration-200"
        >
          Projects
        </a>
        <img
          src={profileImg}
          alt="profilePic"
          className="w-14 hidden md:block"
        />
        <a
          href="#about"
          className=" text-sm md:text-lg font-bold text-[#ffffffcc] cursor-pointer hover:scale-95 transition-all duration-200"
        >
          About
        </a>
        <a
          href="#contact"
          className=" text-sm md:text-lg font-bold text-[#ffffffcc] cursor-pointer hover:scale-95 transition-all duration-200"
        >
          Contact
        </a>
        <Link to="/github">GitHub Activity</Link>
        {/* <DarkIcon color={"#ffffffcc"} /> */}
      </div>
    </div>
  );
};

export default Navbar;
