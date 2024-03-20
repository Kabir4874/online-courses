import React from "react";

const WhiteButton = ({ btn }) => {
  return (
    <button className=" py-[0.875rem] lg:py-5 lg:px-6 lg:text-lg px-5 rounded-md bg-white border border-white95 text-medium font-medium text-gray15 leading-6 text-nowrap">
      {btn}
    </button>
  );
};

export default WhiteButton;
