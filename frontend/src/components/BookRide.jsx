import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const BookRide = () => {
  const [inputs, setInputs] = useState(null)

  const {user} = useContext(AuthContext)

  const handleChange = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  return (
    <div className="mt-[-60px] w-[100%] box-border left-0 px-[60px] mb-5">
      <div className="bg-white rounded-md w-[100%] m-auto min-h-[9vh] p-[45px] shadow">
        <h3 className="text-[24px] font-semibold mb-3">Book Your Ride</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[13px] mb-[5px]">Pick Up Location</label>
            <input
              type="text"
              placeholder="Type location"
              className="border-[1.5px] border-gray-300 outline-[1px] px-[10px] py-[5px] rounded-md outline-none text-[14px]
              w-[250px]"
              onChange={handleChange}
              name="pickUpLocation"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[13px] mb-[5px]">Drop Off Location</label>
            <input
              type="text"
              placeholder="Type location"
              className="border-[1.5px] border-gray-300 outline-[1px] px-[10px] py-[5px] rounded-md outline-none text-[14px]
              w-[250px]"
              onChange={handleChange}
              name="dropOfLocation"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[13px] mb-[5px]">No. of Passengers (max: 3)</label>
            <input
              type="Number"
              placeholder="Passengers count"
              className="border-[1.5px] border-gray-300 outline-[1px] px-[10px] py-[5px] rounded-md outline-none text-[14px]
              w-[250px]"
              onChange={handleChange}
              name="passengerCount"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[13px] mb-[5px]">Passengers Name eg: adil, akash</label>
            <input
              type="text"
              placeholder="Passengers name"
              className="border-[1.5px] border-gray-300 outline-[1px] px-[10px] py-[5px] rounded-md outline-none text-[14px]
              w-[250px]"
              onChange={handleChange}
              name="passengerNames"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[13px] mb-[5px]">Contact Number</label>
            <input
              type="number"
              placeholder="Contact number"
              className="border-[1.5px] border-gray-300 outline-[1px] px-[10px] py-[5px] rounded-md outline-none text-[14px]
              w-[250px]"
              onChange={handleChange}
              name="contactNumber"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[13px] mb-[5px]">Pick Up Date</label>
            <input
              type="date"
              className="border-[1.5px] border-gray-300 outline-[1px] px-[10px] py-[5px] rounded-md outline-none text-[14px]
              w-[250px]"
              onChange={handleChange}
              name="pickUpDate"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[13px] mb-[5px]">Pick Up Time</label>
            <input
              type="time"
              className="border-[1.5px] border-gray-300 outline-[1px] px-[10px] py-[5px] rounded-md outline-none text-[14px]
              w-[250px]"
              onChange={handleChange}
              name="pickUpTime"
            />
          </div>
        </div>
        <div className="mt-5 flex items-center justify-end">
        {user ? (
          <Link to='book-new' state={{inputs}}>
            <button 
                className="px-[25px] py-[7px] bg-[var(--secondary-color)] rounded-full font-semibold
                hover:bg-black hover:text-[var(--secondary-color)]"
            >
                Book Taxi
            </button>
          </Link>
            ) : (
              <Link to="/login">
                <button
                  className="px-[20px] py-[5px] bg-[var(--secondary-color)] rounded-md font-medium hover:bg-black
                  hover:text-[var(--secondary-color)]"
                >
                  Login
                </button>
              </Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookRide;
