const Footer = () => {
  return (
    <div className=" flex flex-col items-start gap-5 pt-14 pb-6 px-5 bg-white mt-14 w-screen -ml-4">
      <div className=" flex flex-col items-start gap-7 self-stretch">
        <div>
          <img src="/src/assets/Logo.png" />
        </div>
        <div className=" flex items-start content-start gap-3 self-stretch flex-wrap flex-col">
          <div className=" flex gap-2 items-center">
            <div>
              <img src="/src/assets/sms.png" />
            </div>
            <p className=" text-gray15 text-medium">hello@skillbridge.com</p>
          </div>
          <div className=" flex gap-2 items-center">
            <div>
              <img src="/src/assets/call.png" />
            </div>
            <p className=" text-gray15 text-medium">+91 91813 23 2309</p>
          </div>
          <div className=" flex gap-2 items-center">
            <div>
              <img src="/src/assets/location.png" />
            </div>
            <p className=" text-gray15 text-medium">Somewhere in the World</p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-8 self-stretch">
        <div className="flex flex-col gap-3 items-start">
          <h3 className=" text-gray15 text-lg font-semibold">Home</h3>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <p className=" text-gray35 text-medium">Benefits</p>
            <p className=" text-gray35 text-medium">Our Courses</p>
            <p className=" text-gray35 text-medium">Our Testimonials</p>
            <p className=" text-gray35 text-medium">Our FAQ</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h3>About Us</h3>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <p className=" text-gray35 text-medium">Company</p>
            <p className=" text-gray35 text-medium">Achievements</p>
            <p className=" text-gray35 text-medium">Our Goals</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3">
        <h3 className=" text-gray15 text-lg font-semibold">Social Profiles</h3>
        <div className="flex items-start gap-4">
          <div>
            <img src="/src/assets/fb.png" />
          </div>
          <div>
            <img src="/src/assets/twitter.png" />
          </div>
          <div>
            <img src="/src/assets/linkedin.png " />
          </div>
        </div>
      </div>
      <hr className="bg-[#f1f1f3] w-full -ml-2" />
      <div className=" w-full">
        <p className=" text-gray40 text-center text-medium">
          © 2024 Kabir Ahmed Ridoy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
