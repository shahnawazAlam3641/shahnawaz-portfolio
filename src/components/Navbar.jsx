import { useEffect } from "react";
import profileImg from "../assets/circleProfilePic.png";
import { backendUrls } from "../utils/constants";

const Navbar = () => {
  const startBackendServers = () => {
    const requests = backendUrls.map((url) =>
      fetch(url)
        .then((res) => console.log(`Woke up: ${url}`))
        .catch((err) => console.error(`Error waking up ${url}:`, err))
    );

    Promise.all(requests)
      .then(() => console.log("✅ All backend servers pinged"))
      .catch(() => console.warn("⚠️ Some servers failed to wake up"));
  };

  useEffect(() => {
    startBackendServers();
  }, []);

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
      </div>
    </div>
  );
};

export default Navbar;
