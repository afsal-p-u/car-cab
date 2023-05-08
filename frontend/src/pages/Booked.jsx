import React from 'react'
import TopAds from '../components/TopAds'
import Navbar from '../components/Navbar'
import History from '../components/History'

const Booked = () => {
  return (
    <>
        <TopAds />
        <Navbar />
        <div className="w-[100%] h-[82vh] mt-[18vh] px-[50px] py-[20px]  bg-[var(--secondary-color)]">
            <div className="w-full h-full bg-white rounded-md flex">
                <div className="w-[50%] h-full py-[10px] px-[30px]">
                    <h3 className='my-[10px] text-[18px] font-medium'>Booked Ride</h3>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className='text-[13px]'>Contact Number: </small>
                        <p className='text-[14px] ml-2 font-medium'>+2 3332 322 3234</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className='text-[13px]'>No of Passengers: </small>
                        <p className='text-[14px] ml-2 font-medium'>1</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className='text-[13px]'>Passenger Names: </small>
                        <p className='text-[14px] ml-2 font-medium'>Afsal</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className='text-[13px]'>Pick Up Location: </small>
                        <p className='text-[14px] ml-2 font-medium'>Kochi</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className='text-[13px]'>Drop Off Location: </small>
                        <p className='text-[14px] ml-2 font-medium'>Kannur</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className='text-[13px]'>Pick Up Time: </small>
                        <p className='text-[14px] ml-2 font-medium'>22:33</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className='text-[13px]'>Pick Up Date: </small>
                        <p className='text-[14px] ml-2 font-medium'>03/23/33</p>
                    </div>
                    <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
                        <small className='text-[13px]'>Status: </small>
                        <p className='text-[14px] ml-2 font-medium'>Pending</p>
                    </div>
                    <div className="">
                        <button 
                            className='px-[20px] py-[6px] bg-[var(--secondary-color)] rounded-full mt-3 font-medium
                            text-[14px] hover:bg-black hover:text-[var(--secondary-color)]'
                        >
                            Cancel Ride
                        </button>
                    </div>
                </div>
                <History />
            </div>
        </div>
    </>
  )
}

export default Booked