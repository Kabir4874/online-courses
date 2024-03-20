import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [right, setRight] = useState("-right-[100%]");
  function menuHandler() {
    if (menu) {
      setRight("-right-4");
      setMenu(false);
    } else {
      setRight("-right-[100%]");
      setMenu(true);
    }
  }
  const [nav, setNav] = useState("");
  window.addEventListener("scroll", () => {
    if (scrollY > 120) {
      setNav(
        "bg-white px-4 fixed w-[96%] lg:w-[88%] top-0 rounded-md left-[50%] translate-x-[-50%] shadow-md z-50"
      );
    } else {
      setNav("");
    }
  });
  return (
    <div className={`${nav} transition-all ease-in-out duration-300`}>
      <div className="flex py-[0.875rem] lg:py-6  2xl:px-32 justify-between items-center self-stretch relative">
        <div className=" flex items-center gap-12">
          <div className=" w-10 lg:w-14 cursor-pointer">
            <img src="/src/assets/Logo.png" className=" w-full" />
          </div>
          <div
            className={`flex flex-col gap-8 bg-white absolute w-[12rem] top-24 -mt-2 ${right} px-4 py-4 h-screen transition-all duration-500 z-10 lg:hidden`}
          >
            <NavLink to={"/"} className={" text-gray15 text-lg leading-6"}>
              Home
            </NavLink>
            <NavLink
              to={"/courses"}
              className={" text-gray15 text-lg leading-6"}
            >
              Courses
            </NavLink>
            <NavLink to={"/about"} className={" text-gray15 text-lg leading-6"}>
              About Us
            </NavLink>
            <NavLink
              to={"/pricing"}
              className={" text-gray15 text-lg leading-6"}
            >
              Pricing
            </NavLink>
            <NavLink
              to={"/contact"}
              className={" text-gray15 text-lg leading-6"}
            >
              Contact
            </NavLink>
          </div>
          <div className="lg:flex hidden items-center gap-7">
            <NavLink to={"/"} className={" text-gray15 text-lg leading-6"}>
              Home
            </NavLink>
            <NavLink
              to={"/courses"}
              className={" text-gray15 text-lg leading-6"}
            >
              Courses
            </NavLink>
            <NavLink to={"/about"} className={" text-gray15 text-lg leading-6"}>
              About Us
            </NavLink>
            <NavLink
              to={"/pricing"}
              className={" text-gray15 text-lg leading-6"}
            >
              Pricing
            </NavLink>
            <NavLink
              to={"/contact"}
              className={" text-gray15 text-lg leading-6"}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className=" flex items-center gap-5">
          <p className=" text-gray15 text-medium lg:text-lg leading-6 cursor-pointer">
            Sign Up
          </p>
          <button className=" py-3 px-5 rounded-md bg-orange50 text-white text-medium lg:text-lg">
            Login
          </button>

          <div
            className=" w-[2.125rem] cursor-pointer lg:hidden"
            onClick={menuHandler}
          >
            <img src="/src/assets/hamburger.png" className=" w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
