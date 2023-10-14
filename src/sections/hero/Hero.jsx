import React from "react";
import HeroImg1 from "../../assets/png/hero-img-1.png";
import HeroImg2 from "../../assets/png/hero-img-2.png";
import HeroImg3 from "../../assets/png/hero-img-3.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-3 lg:px-0 flex items-center flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 text-center lg:text-start py-9 lg:py-0 min-h-fit lg:min-h-[calc(803px-85px)] flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-[65px] leading-[80px] font-bold">
          Find{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
            Partners
          </span>{" "}
          (CAs) available online
        </h1>
        <small className="text-[#616161] text-xl font-os pt-4 pb-[60px]">
          <span className="font-bold">CONNECT</span> with us where your services
          are listed and visible to a myriad of businesses seeking CA's for
          compliance support
        </small>
        <form className="bg-white h-[73px] flex w-[80%] rounded-[10px] overflow-hidden font-inter">
          <input
            type="text"
            name="search_text"
            id="search_text"
            className="border-none outline-none bg-white h-full flex-grow w-[120px] md:w-auto px-4 lg:px-[30px] font-bold text-[18px]"
            placeholder="Search by name"
          />
          <button
            type="submit"
            className="h-[73px] w-[186px] text-[16px] font-bold bg-[#0076ce] text-white border-[1.5px] border-[#0076ce] rounded-[10px] hover:border-white hover:text-[#0076ce] flex items-center justify-center transition_common hover:bg-white shadow-none hover:shadow-lg"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full lg:w-1/2 py-9 lg:py-0 min-h-fit lg:min-h-[calc(803px-85px)] flex flex-col justify-center items-center">
        <div className="flex gap-[16.79px]">
          <div>
            <img src={HeroImg1} alt="hero image 1" />
          </div>
          <div>
            <img src={HeroImg2} alt="hero image 2" />
          </div>
          <div>
            <img src={HeroImg3} alt="hero image 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
