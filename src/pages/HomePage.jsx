import Navbar from "../components/Navbar";
import OrangeButton from "../components/OrangeButton";
import SectionHeading from "../components/SectionHeading";
import TopOffer from "../components/TopOffer";
import WhiteButton from "../components/WhiteButton";
import { benefitData, courses, testimonials } from "../data/homePageData";

const HomePage = () => {
  return (
    <div className="bg-white97 px-4 mx-auto pt-10">
      <div>
        <TopOffer />
      </div>
      <div>
        <Navbar />
      </div>

      {/* Header  */}

      <div className=" mt-[3.12rem]">
        <div className=" flex flex-col items-center self-stretch">
          <div className=" flex p-[.875rem] justify-center items-center content-center gap-3 self-stretch flex-wrap rounded-lg border border-white95 bg-white99">
            <div className=" relative">
              <img src="/src/assets/Icon Container.png" />
              <img
                src="/src/assets/Abstract Line.png"
                className=" absolute -top-5 -left-5"
              />
            </div>
            <h2 className=" font-semibold leading-6 text-gray10">
              <span className=" text-orange50">Unlock</span> Your Creative
              Potential
            </h2>
          </div>
          <div className="flex flex-col gap-[.375rem] self-stretch items-center px-7 mt-4">
            <h1 className=" text-gray15 text-center text-2xl font-medium leading-9">
              with Online Design and Development Courses.
            </h1>
            <p className=" text-medium text-gray15 text-center leading-6">
              Learn from Industry Experts and Enhance Your Skills.
            </p>
          </div>
          <div className=" mt-12 flex gap-3 mx-auto items-center">
            <OrangeButton btn={"Explore Courses"} />
            <WhiteButton btn={"View Pricing"} />
          </div>
        </div>
      </div>

      {/* Card  */}

      <div className=" grid grid-cols-3 p-[.625rem] rounded-lg border border-white95 bg-white99 mt-7">
        <div className=" flex items-center justify-center py-5 px-7 border-r-2">
          <img src="/src/assets/zapier.png" />
        </div>
        <div className=" flex items-center justify-center py-5 px-7 border-r-2">
          <img src="/src/assets/spotify.png" />
        </div>
        <div className=" flex items-center justify-center py-5 px-7">
          <img src="/src/assets/zoom.png" />
        </div>
      </div>
      {/* CTA Video  */}
      <div className=" w-full mt-[1.88rem] cursor-pointer">
        <img src="/src/assets/Container.png" className=" w-full" />
      </div>
      {/* Benefits  */}
      <div>
        <SectionHeading
          heading={"Benefits"}
          subHeading={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
        />
        <div>
          {benefitData.map((item) => {
            return (
              <div
                key={item.number}
                className="flex flex-col p-[1.875rem] items-end gap-[1.875rem] self-stretch rounded-xl bg-white mb-5"
              >
                <h1 className=" self-stretch text-gray15 text-right text-5xl font-bold">
                  {item.number}
                </h1>
                <div className=" self-start">
                  <h2 className=" text-gray20 text-xl font-semibold mb-[.62rem]">
                    {item.heading}
                  </h2>
                  <p className=" text-gray30 font-medium">{item.para}</p>
                </div>
                <div className=" cursor-pointer">
                  <img src="/src/assets/Button.png" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Courses  */}

      <div>
        <SectionHeading
          heading={"Our Courses"}
          subHeading={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
        />
        <div className=" flex flex-col gap-5">
          {courses.map((item) => {
            return (
              <div
                key={item.id}
                className="flex p-6 flex-col items-start gap-6 rounded-xl border border-white95 bg-white"
              >
                <div className=" w-full">
                  <img src={item.image} className=" w-full" />
                </div>
                <div className=" flex flex-col items-start gap-4 self-stretch">
                  <div className="flex items-start gap-3">
                    <span className=" py-2 px-[.875rem] rounded-md border border-white95 bg-white text-gray30 text-medium">
                      {item.duration}
                    </span>
                    <span className=" py-2 px-[.875rem] rounded-md border border-white95 bg-white text-gray30 text-medium">
                      {item.level}
                    </span>
                  </div>
                  <h3 className=" text-gray15 font-medium">By {item.author}</h3>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <h2 className=" text-gray15 text-lg font-semibold">
                    {item.courseName}
                  </h2>
                  <p className=" text-gray30 text-medium">{item.courseInfo}</p>
                </div>
                <div className=" w-full">
                  <button className="py-[0.875rem] px-6 rounded-md border border-white95 bg-white97 w-full">
                    Get It Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Testimonials  */}

      <div>
        <SectionHeading
          heading={"Our Testimonials"}
          subHeading={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
        />
        <div className="flex flex-col gap-5">
          {testimonials.map((item) => {
            return (
              <div key={item.id} className=" bg-white rounded-2xl">
                <div className=" p-8 rounded-t-2xl">
                  <p className=" text-gray30 text-medium">{item.description}</p>
                </div>
                <div className="flex items-center justify-between py-5 px-8 bg-white99 border-t rounded-b-2xl">
                  <div className="flex items-center gap-[.625rem]">
                    <img src={item.image} />
                    <h2 className=" text-gray20 font-semibold">{item.name}</h2>
                  </div>
                  <button className=" py-[.875rem] px-4 rounded-md border border-white95 bg-white97">Read Full Story</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Pricing  */}
      <div>
        <div>
          <div>
            <h1>Our Pricing</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
          </div>
          <div>
            <button>Monthly</button>
            <button>Yearly</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
