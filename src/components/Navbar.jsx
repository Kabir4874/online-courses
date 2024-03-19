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
  return (
    <div className="flex py-[0.875rem] justify-between items-center self-stretch relative">
      <div>
        <div className=" w-10">
          <img src="/src/assets/Logo.png" className=" w-full" />
        </div>
        <div
          className={`flex flex-col gap-8 bg-white absolute w-[12rem] top-20 -mt-2 ${right} px-4 py-4 h-screen transition-all duration-500`}
        >
          <NavLink to={"/"} className={" text-gray15 text-lg leading-6"}>
            Home
          </NavLink>
          <NavLink to={"/courses"} className={" text-gray15 text-lg leading-6"}>
            Courses
          </NavLink>
          <NavLink to={"/about"} className={" text-gray15 text-lg leading-6"}>
            About Us
          </NavLink>
          <NavLink to={"/pricing"} className={" text-gray15 text-lg leading-6"}>
            Pricing
          </NavLink>
          <NavLink to={"/contact"} className={" text-gray15 text-lg leading-6"}>
            Contact
          </NavLink>
        </div>
      </div>
      <div className=" flex items-center gap-5">
        <p className=" text-gray15 text-medium leading-6">Sign Up</p>
        <button className=" py-3 px-5 rounded-md bg-orange50 text-white text-medium">
          Login
        </button>

        <div className=" w-[2.125rem] cursor-pointer" onClick={menuHandler}>
          <img src="/src/assets/hamburger.png" className=" w-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
