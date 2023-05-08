import React from "react";
import TopAds from "../components/TopAds";
import Navbar from "../components/Navbar";

const BookTaxi = () => {
  return (
    <>
      <TopAds />
      <Navbar />
      <div className="w-[100%] h-[82vh] mt-[18vh] bg-[var(--secondary-color)] flex items-center justify-center">
        <div className="w-[800px] min-h-[55vh] px-[30px] py-[20px] bg-white shadow-md rounded-md">
          <h3 className="text-center text-[20px] font-semibold">
            Book Your Ride
          </h3>
          <div className="mt-3 flex flex-wrap">
            <div className="flex flex-col w-[50%] p-[5px] ">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                Pick Up Location
              </label>
              <input
                type="text"
                placeholder="Type location"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
              />
            </div>
            <div className="flex flex-col w-[50%] p-[5px] ">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                Drop Off Location
              </label>
              <input
                type="text"
                placeholder="Type location"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
              />
            </div>
            <div className="flex flex-col w-[50%] p-[5px] ">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                No. of Passengers (max: 3)
              </label>
              <input
                type="number"
                placeholder="Passengers count"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
              />
            </div>
            <div className="flex flex-col w-[50%] p-[5px] ">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                Passengers Name eg: ashish, adwaith
              </label>
              <input
                type="text"
                placeholder="Passenger name"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
              />
            </div>
            <div className="flex flex-col w-[50%] p-[5px] ">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                Contact Number
              </label>
              <input
                type="number"
                placeholder="Contact number"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
              />
            </div>
            <div className="flex flex-col w-[50%] p-[5px] ">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                Pick Up Date
              </label>
              <input
                type="date"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
              />
            </div>
            <div className="flex flex-col w-[50%] p-[5px]">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                Pick Up Time
              </label>
              <input
                type="time"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              className="px-[20px] py-[5px] bg-[var(--secondary-color)] rounded-md font-medium hover:bg-black
                hover:text-[var(--secondary-color)]"
            >
              Book Taxi
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTaxi;
