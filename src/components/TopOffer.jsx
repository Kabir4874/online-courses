import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const TopOffer = () => {
  const [topOffer, setTopOffer] = useState("visible");
  window.addEventListener("scroll", () => {
    if (scrollY > 120) {
      setTopOffer("hidden");
    } else {
      setTopOffer("visible");
    }
  });
  return (
    <div className={`${topOffer}`}>
      <div className="flex py-[0.625rem] px-4 justify-between lg:justify-center lg:gap-6 items-center rounded-md bg-orange50">
        <p className=" text-white text-medium lg:text-lg leading-6">
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </p>
        <FaArrowRight className=" w-5 lg:w-6 text-white" />
      </div>
    </div>
  );
};

export default TopOffer;
