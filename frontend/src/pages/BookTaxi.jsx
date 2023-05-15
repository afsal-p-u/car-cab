import React, { useState } from "react";
import axios from 'axios';

import TopAds from "../components/TopAds";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const BookTaxi = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [inputs, setInputs] = useState(null)
  
  const handleChange = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_SERVER_URL}/ride/new`, inputs).then((res) => {
      navigate('/')
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <>
      <TopAds />
      <Navbar name="newRide" />
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
                name="pickUpLocation"
                defaultValue={location.state?.inputs?.pickUpLocation}
                onChange={handleChange}
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
                name="dropOfLocation"
                defaultValue={location.state?.inputs?.dropOfLocation}
                onChange={handleChange}
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
                name="passengersCount"
                defaultValue={location.state?.inputs?.passengersCount}
                onChange={handleChange}
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
                defaultValue={location.state?.inputs?.passengersNames}
                onChange={handleChange}
                name="passengersNames"
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
                onChange={handleChange}
                defaultValue={location.state?.inputs?.contactNumber}
                name="contactNumber"
              />
            </div>
            <div className="flex flex-col w-[50%] p-[5px] ">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                Pick Up Date
              </label>
              <input
                type="date"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
                onChange={handleChange}
                defaultValue={location.state?.inputs?.pickUpDate}
                name="pickUpDate"
              />
            </div>
            <div className="flex flex-col w-[50%] p-[5px]">
              <label htmlFor="" className="text-[13px] mb-[2px]">
                Pick Up Time
              </label>
              <input
                type="time"
                className="border-[1px] border-gray-300 px-[10px] py-[5px] text-[14px] outline-none"
                onChange={handleChange}
                defaultValue={location.state?.inputs?.pickUpTime}
                name="pickUpTime"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              className="px-[20px] py-[5px] bg-[var(--secondary-color)] rounded-md font-medium hover:bg-black
              hover:text-[var(--secondary-color)]"
              onClick={handleSubmit}
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
