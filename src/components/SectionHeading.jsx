import WhiteButton from "./WhiteButton";

const SectionHeading = ({ heading, subHeading, btn }) => {
  return (
    <div className=" mt-[3.13rem] lg:mt-24 flex flex-col lg:flex-row lg:items-end self-stretch  gap-5 lg:gap-72 mb-10 lg:mb-16 lg:justify-between">
      <div>
        <h2 className=" self-stretch text-gray15 text-3xl lg:text-5xl font-semibold mb-1 lg:mb-4">
          {heading}
        </h2>
        <p className=" self-stretch text-gray35 text-medium lg:text-lg">
          {subHeading}
        </p>
      </div>
      <div>
        <WhiteButton btn={btn} />
      </div>
    </div>
  );
};

export default SectionHeading;
