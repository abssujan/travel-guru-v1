import NavBar from "../NavBar/NavBar";
import bgDestination from '../../assets/bg-destination.jpg'

const Destination = () => {
  return (
    <div style={{ backgroundImage: `url(${bgDestination})` }}
    className=" bg-bg-destination h-screen">
      <NavBar></NavBar>
      <div className=" xl:w-[1400px] mx-auto mt-10 ">
        
        <div className="flex justify-between items-center mt-52">
          <div className=" w-6/12">
            <div className=" items-start">
              <h1 className="font-bebasNeue text-8xl text-white">
                Cox's Bazar
              </h1>
              <p className="text-base text-white mt-2">
                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
                known for its very long, sandy beachfront, stretching from Sea
                Beach in the north to Kolatoli Beach in the south. Aggameda
                Khyang monastery is home to bronze statues and centuries-old
                Buddhist manuscripts. South of town, the tropical rainforest of
                Himchari National Park has waterfalls and many birds. North, sea
                turtles breed on nearby Sonadia Island.
              </p>
              <button className="mt-7 bg-[#F9A51A] font-medium px-6 py-2 rounded-md">
                Booking <span>→</span>
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="bg-white rounded-md p-8 w-3/6 flex flex-col">
              {/* Original Origin Input */}
              <div className="w-full">
                <p className="font-base text-[#818181]">Origin</p>
                <input
                  className="w-full border-2 border-transparent focus:border-[#F9A51A] focus:outline-none mt-2 bg-gray-200 placeholder:px-2 placeholder:text-xs placeholder:font-medium placeholder:text-black rounded-md py-1"
                  type="text"
                  placeholder="Dhaka"
                />
              </div>

              {/* Original Destination Input */}
              <div className="w-full mt-2">
                <p className="font-base text-[#818181]">Destination</p>
                <input
                  className="border-2 border-transparent focus:border-[#F9A51A] focus:outline-none w-full mt-2 bg-gray-200 placeholder:px-2 placeholder:text-xs placeholder:font-medium placeholder:text-black rounded-md py-1"
                  type="text"
                  placeholder="Cox's Bazar"
                />
              </div>

              {/* New From and To Inputs Side by Side */}
              <div className="w-full flex justify-between mt-4">
                <div className="w-1/2 pr-2">
                  <p className="font-base text-[#818181]">From</p>
                  <div className="relative">
                    <input
                      className="border-2 border-transparent focus:border-[#F9A51A] focus:outline-none w-full mt-2 bg-gray-200 placeholder:px-2 placeholder:text-xs placeholder:font-medium placeholder:text-black rounded-md py-1 pl-8"
                      type="text"
                      placeholder="Select Date"
                    />
                    <span className="absolute left-2 top-7 transform -translate-y-1/2 text-gray-500">
                      📅
                    </span>
                  </div>
                </div>

                <div className="w-1/2 pl-2">
                  <p className="font-base text-[#818181]">To</p>
                  <div className="relative">
                    <input
                      className="border-2 border-transparent focus:border-[#F9A51A] focus:outline-none w-full mt-2 bg-gray-200 placeholder:px-2 placeholder:text-xs placeholder:font-medium placeholder:text-black rounded-md py-1 pl-8"
                      type="text"
                      placeholder="Select Date"
                    />
                    <span className="absolute left-2 top-7 transform -translate-y-1/2 text-gray-500">
                      📅
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking Button */}
              <button className="w-full mt-6 bg-[#F9A51A] text-white rounded-md py-2 font-medium hover:bg-opacity-90 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
