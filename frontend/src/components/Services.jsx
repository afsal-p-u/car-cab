import React from 'react'

import img1 from '../assets/1.jpg'
import img2 from '../assets/02.jpg'
import img3 from '../assets/05.jpg'

const Services = () => {
  return (
    <div className='w-[100%] min-h-[50vh] py-[50px] px-[60px] mt-[10vh] bg-gray-50' id='services'>
        <h3 className='text-center font-semibold text-[23px] text-[var(--secondary-color)]'>SERVICES</h3>
        <h2 className='text-center font-medium text-[27px] mb-[30px]'>Our Best Services For You</h2>
        <div className="w-full flex flex-wrap gap-10 justify-center">
            <div className="group w-[270px] h-[45vh] bg-[#fff] p-[15px] rounded-md cursor-pointer shadow-xl hover:bg-[var(--secondary-color)]">
                <div className="w-full h-[55%]">
                    <img src={img1} alt="" className='w-full h-full' />
                </div>
                <div className="">
                    <h4 className='mt-[10px] font-semibold group-hover:text-white'>Online Booking</h4>
                    <p className='font-normal text-[12px] text-gray-500 group-hover:text-gray-50'>
                        There are many variations of passages orem psum available but the 
                        majority have suffered alteration in some form by injected.
                    </p>
                </div>
            </div>
            <div className="group w-[270px] h-[45vh] bg-[#fff] p-[15px] rounded-md cursor-pointer shadow-xl hover:bg-[var(--secondary-color)]">
                <div className="w-full h-[55%]">
                    <img src={img2} alt="" className='w-full h-full' />
                </div>
                <div className="">
                    <h4 className='mt-[10px] font-semibold group-hover:text-white'>City Transpot</h4>
                    <p className='font-normal text-[12px] text-gray-500 group-hover:text-gray-50'>
                        There are many variations of passages orem psum available but the 
                        majority have suffered alteration in some form by injected.
                    </p>
                </div>
            </div>
            <div className="group w-[270px] h-[45vh] bg-[#fff] p-[15px] rounded-md cursor-pointer shadow-xl hover:bg-[var(--secondary-color)]">
                <div className="w-full h-[55%]">
                    <img src={img3} alt="" className='w-full h-full' />
                </div>
                <div className="">
                    <h4 className='mt-[10px] font-semibold group-hover:text-white'>Regular Transport</h4>
                    <p className='font-normal text-[12px] text-gray-500 group-hover:text-gray-50'>
                        There are many variations of passages orem psum available but the 
                        majority have suffered alteration in some form by injected.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services