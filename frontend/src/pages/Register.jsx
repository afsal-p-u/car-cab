import React from "react";
import TopAds from "../components/TopAds";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <TopAds />
      <Navbar />
      <div className="mt-[18vh] w-[100%] h-[82vh] flex items-center justify-center bg-[var(--secondary-color)]">
        <div className="w-[400px] min-h-[50vh] py-[25px] px-[35px] bg-gray-100 rounded-[5px]">
          <h3 className="text-center text-[20px]">Register</h3>
          <div className="mt-5">
            <div className="flex flex-col mb-2">
              <label htmlFor="" className="text-[13px] mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="px-[10px] py-[5px] text-[13px] outline-none border-[1px] border-gray-300"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="" className="text-[13px] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="px-[10px] py-[5px] text-[13px] outline-none border-[1px] border-gray-300"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="" className="text-[13px] mb-1">
                Contact
              </label>
              <input
                type="number"
                placeholder="Contact number"
                className="px-[10px] py-[5px] text-[13px] outline-none border-[1px] border-gray-300"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="" className="text-[13px] mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="px-[10px] py-[5px] text-[13px] outline-none border-[1px] border-gray-300"
              />
            </div>
            <div className="flex flex-col mt-3">
                <button 
                    className="px-[20px] py-[7px] bg-[var(--secondary-color)] rounded-md mt-3 cursor-pointer
                    hover:bg-black hover:text-[var(--secondary-color)] font-semibold"
                >
                    Register
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
