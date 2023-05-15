import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({name}) => {

  console.log(name)
  return (
    <div className="fixed top-[8vh] w-[100%] h-[10vh] bg-black flex px-[50px] items-center justify-between">
      <div className="flex items-center">
        <p className="text-white text-[25px] font-semibold">Taxikka</p>
      </div>
      <div className="">
        <ul>
          <li className="text-white">
            <Link
              className="mr-3 font-medium px-[20px] py-[6px] hover:text-black hover:bg-[var(--secondary-color)] 
              rounded-full"
              to="/"
            >
              Home
            </Link>
            {name === 'newRide' ? '' : name === 'booked' ? '' : (
              <> 
              <a
                className="mr-3 font-medium px-[20px] py-[6px] hover:text-black hover:bg-[var(--secondary-color)] 
                rounded-full"
                href="#services"
              >
                Services
              </a>
              <a
                className="mr-4 font-medium px-[20px] py-[6px] hover:text-black hover:bg-[var(--secondary-color)] 
                rounded-full"
                href="#features"
              >
                Features
              </a>
              </>
            )}
            <Link
              className="mr-3 font-medium px-[20px] py-[6px] hover:text-black hover:bg-[var(--secondary-color)] 
              rounded-full"
              to="/booked"
            >
              Booked
            </Link>
            <Link to="/book-new">
              <button
                className="ml-[35px] px-[20px] py-[5px] rounded-full bg-[var(--secondary-color)] font-semibold
                hover:bg-[#fff] hover:text-[var(--secondary-color)]"
              >
                Book a Taxi
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
