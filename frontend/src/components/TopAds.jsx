import { BiPhoneCall, BiTimeFive } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopAds = () => {
  return (
    <div className="fixed top-0 w-[100%] h-[8vh] bg-gray-800 flex items-center px-[50px]">
      <div className="flex flex-1">
        <p className="mr-[20px] flex items-center text-[14px] text-white">
          <AiOutlineMail
            size={18}
            color="var(--secondary-color)"
            className="mr-[5px]"
          />
          info@example.com
        </p>
        <p className="mr-[20px] flex items-center text-[14px] text-white">
          <BiPhoneCall
            size={18}
            color="var(--secondary-color)"
            className="mr-[5px]"
          />
          +2 123 324 3322
        </p>
        <p className="flex items-center text-[14px] text-white">
          <BiTimeFive
            size={18}
            color="var(--secondary-color)"
            className="mr-[5px]"
          />
          Sun - Fri (8am - 10pm)
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <Link to='/login'>
            <button 
                className="mr-[30px] text-white font-semibold px-[20px] py-[2px] bg-black rounded-md text-[var(--secondary-color)]
                hover:text-black hover:bg-[--secondary-color]"
            >
            login
            </button>
        </Link>
        <Link to="/register">
            <button 
                className="font-semibold px-[20px] py-[2px] bg-[var(--secondary-color)] rounded-md 
                hover:bg-black hover:text-[var(--secondary-color)]"
            >
            register
            </button>
        </Link>
      </div>
    </div>
  );
};

export default TopAds;
