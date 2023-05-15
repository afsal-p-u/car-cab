import React, { useEffect, useState } from "react";
import axios from "axios";
import TopAds from "../components/TopAds";
import Navbar from "../components/Navbar";
import History from "../components/History";

const Booked = () => {
  const [bookedItem, setBookedItem] = useState(null);

  useEffect(() => {
    const getCurrentItem = () => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/ride/current`).then((res) => {
            setBookedItem(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    getCurrentItem()
  }, [])

  const handleCancel = (e, id) => {
    e.preventDefault()
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/ride/del/${id}`).then((res) => {
        window.location.reload()
    }).catch((res) => {
        console.log(err)
    })
  }

  return (
    <>
      <TopAds />
      <Navbar name="booked" />
      <div className="w-[100%] h-[82vh] mt-[18vh] px-[50px] py-[20px]  bg-[var(--secondary-color)]">
        <div className="w-full h-full bg-white rounded-md flex">
          <div className="w-[50%] h-full py-[10px] px-[30px]">
            <h3 className="my-[10px] text-[18px] font-medium">Booked Ride</h3>
            {bookedItem && (
                <>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className="text-[13px]">Contact Number: </small>
                        <p className="text-[14px] ml-2 font-medium">{bookedItem?.contactNumber}</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className="text-[13px]">No of Passengers: </small>
                        <p className="text-[14px] ml-2 font-medium">{bookedItem?.passengersCount}</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className="text-[13px]">Passenger Names: </small>
                        <p className="text-[14px] ml-2 font-medium">{bookedItem?.passengersNames}</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className="text-[13px]">Pick Up Location: </small>
                        <p className="text-[14px] ml-2 font-medium">{bookedItem?.pickUpLocation}</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className="text-[13px]">Drop Off Location: </small>
                        <p className="text-[14px] ml-2 font-medium">{bookedItem?.dropOfLocation}</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className="text-[13px]">Pick Up Time: </small>
                        <p className="text-[14px] ml-2 font-medium">{bookedItem?.pickUpTime}</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className="text-[13px]">Pick Up Date: </small>
                        <p className="text-[14px] ml-2 font-medium">{bookedItem?.pickUpDate}</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className="text-[13px]">Status: </small>
                        <p className={`text-[14px] ml-2 font-medium ${bookedItem?.status === 'pending' ? 'text-red-500' : 'text-yellow-500'}`}>
                            {bookedItem?.status}
                        </p>
                    </div>
                    <div className="">
                        <button
                            className="px-[20px] py-[6px] bg-[var(--secondary-color)] rounded-full mt-3 font-medium
                            text-[14px] hover:bg-black hover:text-[var(--secondary-color)]"
                            onClick={(e) => handleCancel(e, bookedItem._id)}
                        >
                            Cancel Ride
                        </button>
                    </div>
                </>
            )}
          </div>
          <History />
        </div>
      </div>
    </>
  );
};

export default Booked;
