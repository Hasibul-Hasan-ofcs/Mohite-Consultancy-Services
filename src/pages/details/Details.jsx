import React from "react";
import NavBar from "../../sections/navbar/NavBar";
import Star from "../../assets/png/star.png";
import Calendar from "../../assets/png/calendar.png";
import DetailsRecommendationCard from "../../components/cards/details/DetailsRecommendationCard";

const Details = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc]">
      <NavBar />
      <div className="container mx-auto flex flex-col lg:flex-row gap-[33px] py-[80px]">
        {/* Left portion */}
        <div className="w-full lg:w-2/5">
          <h3 className="text-[35px] leading-[52.5px] font-bold">
            Michael Jackson
          </h3>
          <p className="text-[20px] leading-[32px] font-normal pt-4">
            I am here to provide my expertise in accounting and finance, which
            includes financial statements, economics, and auditing, all to
            assist you effectively
          </p>

          <p className="py-8 flex items-center gap-3">
            <img src={Star} alt="Star image" className="h-6 w-fit" />
            <span className="text-[20px] leading-[30px]">
              <span className="text-[#0076CE] font-bold">4.8</span>(89)
            </span>
          </p>

          <div className="common_shadow rounded-[20px] p-6">
            <p className="flex items-center justify-between">
              <span className="text-xl font-normal">
                Basic to complex tasks
              </span>
              <span className="text-2xl font-bold">₹4,370</span>
            </p>
            <p className="flex gap-1 py-8">
              <img src={Calendar} alt="calendar" />
              <span className="text-xl font-normal">
                Delivers the job within 2 days
              </span>
            </p>
            <div className="flex items-center justify-between gap-[25px]">
              <button className="hidden lg:block bg-[#0076ce] text-white border-[1.5px] border-[#0076ce] rounded-[10px] py-[10px] px-4 font-bold transition_common hover:bg-white shadow-none hover:shadow-lg hover:border-white hover:text-[#0076ce] flex-grow">
                Request Proposal
              </button>
              <button className="hidden lg:block py-[10px] px-5 border-[1.5px] border-[#0076ce] text-[#0076ce] rounded-[10px] font-bold transition_common hover:bg-white shadow-none hover:shadow-lg hover:border-white flex-grow">
                Chat with me
              </button>
            </div>
          </div>

          <div className="common_shadow rounded-[20px] p-6 my-8">
            <h3 className="text-[35px] leading-[52.5px] font-bold">
              What people say?
            </h3>
            <p className="text-[20px] leading-[32px] font-normal pt-4">
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
          </div>
        </div>

        {/* Right Portion */}
        <div className="w-full lg:w-3/5">
          <img
            src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80"
            alt="image"
            className="rounded-[20px]"
          />
          <h3 className="text-[35px] leading-[52.5px] font-bold py-8">
            Michael Jackson
          </h3>
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <p className="text-[#999999] font-bold leading-[34px]">FROM</p>
              <p className="my-2 text-xl leading-[34px]">INDIA</p>
            </div>
            <div className="w-1/3">
              <p className="text-[#999999] font-bold leading-[34px]">
                PARTNER SINCE
              </p>
              <p className="my-2 text-xl leading-[34px]">2011</p>
            </div>
            <div className="w-1/3">
              <p className="text-[#999999] font-bold leading-[34px]">
                AVERAGE RESPONSE TIME
              </p>
              <p className="my-2 text-xl leading-[34px]">30 minutes</p>
            </div>
          </div>

          {/* About */}
          <div className="py-8">
            <p className="text-[#999999] font-bold leading-[34px]">ABOUT</p>
            <p className="my-2 text-xl leading-[34px]">
              I am a Professional Charted Accountant here to offer professional
              services of accounting and finance, financial statements,
              Bookkeeping in affordable price.
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2">
              <p className="text-[#999999] font-bold leading-[34px]">
                SERVICES I OFFER
              </p>
              <ul className="list-disc ps-8">
                <li>One</li>
                <li>One</li>
              </ul>
            </div>
            <div className="w-1/2">
              <p className="text-[#999999] font-bold leading-[34px]">WHY ME?</p>
              <ul className="list-disc ps-8">
                <li>One</li>
                <li>One</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-[132px]">
        <h3 className="text-[35px] leading-[52.5px] font-bold py-8">
          Michael Jackson
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <DetailsRecommendationCard />
        </div>
      </div>
    </div>
  );
};

export default Details;
