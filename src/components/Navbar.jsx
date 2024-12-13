import DarkIcon from "../svgs/DarkIcon";
import profileImg from "../assets/circleProfilePic.png";

const Navbar = () => {
  return (
    <div className="my-6 w-full max-w-[650] flex flex-col gap-4 text-white ">
      <img
        src={profileImg}
        alt="profilePic"
        className="w-14 mx-auto md:hidden"
      />
      <div className="flex mx-auto gap-6 items-center">
        <p className="font-sans text-sm md:text-lg font-bold text-[#ffffffcc] ">
          Home
        </p>
        <p className="font-sans text-sm md:text-lg font-bold text-[#ffffffcc] ">
          Projects
        </p>
        <img
          src={profileImg}
          alt="profilePic"
          className="w-14 hidden md:block"
        />
        <p className="font-sans text-sm md:text-lg font-bold text-[#ffffffcc] ">
          About
        </p>
        <p className="font-sans text-sm md:text-lg font-bold text-[#ffffffcc] ">
          Contact
        </p>
        {/* <DarkIcon color={"#ffffffcc"} /> */}
      </div>
    </div>
  );
};

export default Navbar;
