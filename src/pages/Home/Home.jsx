import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import sliderPic1 from '../../assets/sajekvallyfog.jpg';
import sliderPic2 from '../../assets/Sreemongol.png';
import sliderPic3 from '../../assets/sundarban1.jpg';
import sliderPic4 from '../../assets/coxs bazar.jpg'; // 4th image
import bgHome from '../../assets/bg-cover.png'; // 4th image
import { Link } from "react-router-dom";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length); // Adjust for total cards
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const cards = [
    {
      name: "Sajek Valley",
      image: sliderPic1,
    },
    {
      name: "Sreemongol",
      image: sliderPic2,
    },
    {
      name: "Sundorbon",
      image: sliderPic3,
    },
    {
      name: "Cox`s Bazar",
      image: sliderPic4,
    },
  ];

  const cardWidth = 100; // 18rem (72 tailwind width)
  const cardGap = 10; // gap between cards

  return (
    <div style={{ backgroundImage: `url(${bgHome})` }}
    className="  bg-no-repeat h-full bg-cover bg-center">
      <div className="max-w-[1400px] mx-auto">
        <NavBar />
        <div className="grid md:grid-cols-3 gap-5  items-center">
          <div className=" items-start">
            <h1 className="font-bebasNeue text-8xl text-white">Cox's Bazar</h1>
            <p className="text-base text-white mt-2">
              Cox's Bazar is a city, fishing port, tourism centre, and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
            <Link to='/destination'>
            <button className="mt-7 bg-[#F9A51A] font-medium px-6 py-2 rounded-md">
              Booking <span>→</span>
            </button>
            </Link>
          </div>
          {/* carousel */}
          <div className="md:col-span-2">
            <div className="relative flex flex-col items-center justify-center lg:h-screen bg-transparent">
              {/* Carousel Container */}
              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-700 space-x-5"
                  style={{
                    transform: `translateX(-${(cardWidth + cardGap) * activeIndex}px)`, // Adjust by card width + gap
                  }}
                >
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`w-72 h-80 bg-black rounded-2xl flex justify-center items-center transition-all duration-700 ${
                        activeIndex === index ? "border-4 border-yellow-500" : ""
                      }`}
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: activeIndex === index ? "600px" : "250px",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="bod h-full w-full transition-all">
                        <h2 className="text-white ml-4 pt-5 text-xl font-semibold">{card.name}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Carousel Buttons */}
              <div className="flex space-x-4 mt-4">
                <button className="bg-yellow-500 px-4 py-2 text-white rounded" onClick={handlePrev}>
                  Prev
                </button>
                <button className="bg-yellow-500 px-4 py-2 text-white rounded" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
