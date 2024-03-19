import Navbar from "../components/Navbar";
import TopOffer from "../components/TopOffer";

const HomePage = () => {
  return (
    <div className=" max-w-[24.375rem] bg-white97 px-4 mx-auto pt-10">
      <div>
        <TopOffer />
      </div>
      <div>
        <Navbar/>
      </div>
    </div>
  );
};

export default HomePage;
