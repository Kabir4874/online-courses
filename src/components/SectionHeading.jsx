import WhiteButton from "./WhiteButton";

const SectionHeading = ({ heading, subHeading, btn }) => {
  return (
    <div className=" mt-[3.13rem] flex flex-col gap-5 mb-10">
      <div>
        <h2 className=" self-stretch text-gray15 text-3xl font-semibold mb-1">
          {heading}
        </h2>
        <p className=" self-stretch text-gray35 text-medium ">{subHeading}</p>
      </div>
      <div>
        <WhiteButton btn={btn} />
      </div>
    </div>
  );
};

export default SectionHeading;
