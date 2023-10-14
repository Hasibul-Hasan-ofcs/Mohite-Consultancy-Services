import React from "react";
import Star from "../../../assets/png/star.png";

const DetailsRecommendationCard = () => {
  return (
    <div className="common_shadow rounded-[20px]">
      <div className="h-[244px] w-full overflow-hidden rounded-[20px]">
        <img
          src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80"
          alt="image"
          className="rounded-[20px]"
        />
      </div>
      <div className="p-6">
        <p className="flex items-center justify-between">
          <span className="text-xl font-bold">Michael Jackson</span>
          <span className="text-2xl font-bold">₹4,370</span>
        </p>
        <p className="text-base">
          I will do business evaluation and corporate services
        </p>
        <p className="pt-4 pb-8 flex items-center gap-3">
          <img src={Star} alt="Star image" className="h-5 w-fit" />
          <span className="text-[16px] leading-[24px]">
            <span className="text-[#0076CE] font-bold">4.8</span>(89)
          </span>
        </p>
        <button className="hidden w-full lg:block bg-[#0076ce] text-white border-[1.5px] border-[#0076ce] rounded-[10px] py-[10px] px-4 font-bold transition_common hover:bg-white shadow-none hover:shadow-lg hover:border-white hover:text-[#0076ce] flex-grow">
          Request Proposal
        </button>
      </div>
    </div>
  );
};

export default DetailsRecommendationCard;
