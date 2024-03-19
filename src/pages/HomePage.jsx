import Navbar from "../components/Navbar";
import TopOffer from "../components/TopOffer";

const HomePage = () => {
  return (
    <div className="bg-white97 px-4 mx-auto pt-10">
      <div>
        <TopOffer />
      </div>
      <div>
        <Navbar />
      </div>
      <div className=" mt-[3.12rem]">
        <div>
          <div className=" flex p-[.875rem]">
            <div>
              <img src="/src/assets/Icon Container.png" />
              <img src="/src/assets/Abstract Line.png" />
            </div>
            <h2>
              <span>Unlock</span> Your Creative Potential
            </h2>
          </div>
          <div>
            <h1>with Online Design and Development Courses.</h1>
            <p>Learn from Industry Experts and Enhance Your Skills.</p>
          </div>
          <div>
            <button>Explore Courses</button>
            <button>View Pricing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
