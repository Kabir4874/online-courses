import { FaArrowRight } from "react-icons/fa6";

const TopOffer = () => {
  return (
    <div className="flex py-[0.625rem] px-4 justify-between items-center rounded-md bg-orange50">
      <p className=" text-white text-medium leading-6">
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </p>
      <FaArrowRight className=" w-5 text-white" />
    </div>
  );
};

export default TopOffer;
