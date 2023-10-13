import React from "react";
import HeroImg1 from "../../assets/png/hero-img-1.png";
import HeroImg2 from "../../assets/png/hero-img-2.png";
import HeroImg3 from "../../assets/png/hero-img-3.png";

const Hero = () => {
  return (
    <div className="container mx-auto flex items-center flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 text-center lg:text-start py-9 lg:py-0 min-h-fit lg:min-h-[calc(803px-85px)] flex flex-col justify-center">
        <h1 className="text-[65px] leading-[80px] font-bold">
          Find Partners (CAs) available online
        </h1>
        <small className="text-[#616161] text-xl">
          <span className="font-bold">CONNECT</span> with us where your services
          are listed and visible to a myriad of businesses seeking CA's for
          compliance support
        </small>
        <form className="">
          <input type="text" name="search_text" id="search_text" />
          <button type="submit">Search</button>
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
