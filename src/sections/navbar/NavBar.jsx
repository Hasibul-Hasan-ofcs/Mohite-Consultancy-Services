import React from "react";
import LogoMainBlack from "../../assets/png/logo-main-black.png";
import { HiChevronDown } from "react-icons/hi";

const linkData = [
  {
    link: "/",
    text: "Solutions",
  },
  {
    link: "/",
    text: "Features",
  },
  {
    link: "/",
    text: "Blogs",
  },
  {
    link: "/",
    text: "About",
  },
];

const NavBar = () => {
  return (
    <nav>
      <div className="container mx-auto h-[85px] flex justify-between items-center">
        <div className="flex items-center gap-[32px]">
          <img src={LogoMainBlack} alt="logo main black" />
          <div className="flex gap-9">
            {linkData.map(({ link, text }, indx) => (
              <a
                href={link}
                className="flex items-center font-bold text-[18px] group"
                key={indx}
              >
                <span>{text}</span>&nbsp;
                <HiChevronDown className="text-[#0076ce] transition_common relative group-hover:translate-y-1" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="py-[10px] px-5 border-[1.5px] border-[#0076ce] text-[#0076ce] rounded-[10px] font-bold transition_common hover:bg-white shadow-none hover:shadow-lg hover:border-white">
            Login
          </button>
          <button className="bg-[#0076ce] text-white border-[1.5px] border-[#0076ce] rounded-[10px] py-[10px] px-4 font-bold transition_common hover:bg-white shadow-none hover:shadow-lg hover:border-white hover:text-[#0076ce]">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
