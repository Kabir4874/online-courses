import { useState } from "react";
import Navbar from "../components/Navbar";
import OrangeButton from "../components/OrangeButton";
import SectionHeading from "../components/SectionHeading";
import TopOffer from "../components/TopOffer";
import WhiteButton from "../components/WhiteButton";
import { benefitData, courses, testimonials, faq } from "../data/homePageData";
import Footer from "../components/Footer";

const HomePage = () => {
  const [Faq, setFaq] = useState(null);
  function toggle(i) {
    if (Faq === i) {
      return setFaq(null);
    }
    setFaq(i);
  }
  const [nav, setNav] = useState("");
  const [topOffer, setTopOffer] = useState("visible");
  return (
    <div className="bg-white97 px-4 mx-auto pt-10">
      <TopOffer />

      <Navbar />

      {/* Header  */}

      <div className=" mt-[3.12rem] lg:px-16">
        <div className=" flex flex-col items-center self-stretch">
          <div className=" flex p-[.875rem] justify-center items-center content-center gap-3 self-stretch flex-wrap rounded-lg border border-white95 bg-white99">
            <div className=" relative">
              <img src="/src/assets/Icon Container.png" className=" w-12 lg:w-16" />
              <img
                src="/src/assets/Abstract Line.png"
                className=" absolute -top-5 -left-5 lg:-top-6 lg:-left-6"
              />
            </div>
            <h2 className=" font-semibold leading-6 text-gray10 lg:text-5xl">
              <span className=" text-orange50">Unlock</span> Your Creative
              Potential
            </h2>
          </div>
          <div className="flex flex-col gap-[.375rem] self-stretch items-center px-7 mt-4">
            <h1 className=" text-gray15 text-center text-2xl font-medium leading-9 lg:text-4xl">
              with Online Design and Development Courses.
            </h1>
            <p className=" text-medium text-gray15 text-center leading-6 lg:text-lg">
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
          btn={"View All"}
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
                <div className=" cursor-pointer w-[3.375rem]">
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
          btn={"View All"}
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
          btn={"View All"}
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
                    <img src={item.image} className=" w-[3.125rem]" />
                    <h2 className=" text-gray20 font-semibold">{item.name}</h2>
                  </div>
                  <button className=" py-[.875rem] px-4 rounded-md border border-white95 bg-white97">
                    Read Full Story
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Pricing  */}
      <div>
        <div className=" mt-[3.13rem] flex flex-col gap-5 mb-10">
          <div>
            <h1 className=" self-stretch text-gray15 text-3xl font-semibold mb-1">
              Our Pricing
            </h1>
            <p className=" self-stretch text-gray35 text-medium ">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className=" p-3 flex items-center rounded-lg bg-white mx-auto">
            <button className=" py-3 px-6 rounded-md bg-orange50 text-white text-medium font-medium">
              Monthly
            </button>
            <button className=" py-3 px-6 rounded-md bg-white text-gray30 text-medium font-medium">
              Yearly
            </button>
          </div>
        </div>
        <div>
          {/* Free Plan  */}
          <div className=" p-5 rounded-xl bg-white">
            <div className=" flex flex-col items-center gap-7 self-stretch pt-7 pb-5 px-5 rounded-xl border border-white95 bg-white99">
              <span className=" py-2 px-5 rounded border border-orange90 bg-orange97 w-full text-center text-gray15 font-medium">
                Free Plan
              </span>
              <h1 className=" text-gray15 text-[3.125rem] font-semibold">
                $0
                <span className=" text-gray30 text-medium font-medium">
                  /month
                </span>
              </h1>
              <div className=" w-full">
                <div className=" flex flex-col p-5 items-center gap-5 rounded-t-lg border border-white95 bg-white self-stretch">
                  <h3 className=" text-gray15 text-xl font-medium">
                    Available Features
                  </h3>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Access to selected free courses.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Limited course materials and resources.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Basic community support.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      No certification upon completion.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Ad-supported platform.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/price-cross.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Access to exclusive Pro Plan community forums.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/price-cross.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Early access to new courses and updates.
                    </p>
                  </div>
                </div>
                <button className=" py-5 px-6 rounded-b-lg bg-orange50 text-white w-full text-medium font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Pro Plan  */}

          <div className=" p-5 rounded-xl bg-white">
            <div className=" flex flex-col items-center gap-7 self-stretch pt-7 pb-5 px-5 rounded-xl border border-white95 bg-white99">
              <span className=" py-2 px-5 rounded border border-orange90 bg-orange97 w-full text-center text-gray15 font-medium">
                Pro Plan
              </span>
              <h1 className=" text-gray15 text-[3.125rem] font-semibold">
                $79
                <span className=" text-gray30 text-medium font-medium">
                  /month
                </span>
              </h1>
              <div className=" w-full">
                <div className=" flex flex-col p-5 items-center gap-5 rounded-t-lg border border-white95 bg-white self-stretch">
                  <h3 className=" text-gray15 text-xl font-medium">
                    Available Features
                  </h3>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Unlimited access to all courses.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Unlimited course materials and resources.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Priority support from instructors.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Course completion certificates.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Ad-free experience.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Access to exclusive Pro Plan community forums.
                    </p>
                  </div>
                  <div className=" flex p-3 items-start gap-2 rounded-md border border-white95 w-full">
                    <div className=" w-6">
                      <img
                        src="/src/assets/tik button.png"
                        className=" w-full"
                      />
                    </div>
                    <p className=" text-gray30 text-medium">
                      Early access to new courses and updates.
                    </p>
                  </div>
                </div>
                <button className=" py-5 px-6 rounded-b-lg bg-orange50 text-white w-full text-medium font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ  */}

      <div>
        <SectionHeading
          heading={"Frequently Asked Questions"}
          subHeading={
            "Still you have any questions? Contact our Team via support@skillbridge.com"
          }
          btn={"See All FAQ’s"}
        />
        <div className=" flex flex-col items-start gap-5 self-stretch">
          {faq.map((item, i) => {
            return (
              <div
                key={item.id}
                className="flex p-6 flex-col items-start  self-stretch rounded-xl border border-white95 bg-white gap-5"
              >
                <div
                  className=" flex items-center self-stretch gap-7 justify-between  cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <p className=" text-gray15 font-medium">{item.qus}</p>
                  <button className=" w-10">
                    <img
                      src={`${
                        Faq !== i
                          ? "/src/assets/plus button.png"
                          : "/src/assets/cross button.png"
                      }`}
                      className=" w-full"
                    />
                  </button>
                </div>
                <div
                  className={` w-full ${
                    Faq === i ? "visible" : "hidden"
                  } border-t border-white95 pt-5`}
                >
                  <p className=" self-stretch text-gray30 text-medium mb-5">
                    {item.ans}
                  </p>
                  <div className=" flex py-3 px-5 items-center self-stretch rounded-md border border-white95 bg-white97 justify-between cursor-pointer">
                    <p className=" text-gray20 text-medium font-medium">
                      {item.buttonText}
                    </p>
                    <button>
                      <img src="/src/assets/right button.png" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
