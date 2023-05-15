import React from 'react'
import f1 from '../assets/f1.svg'
import f2 from '../assets/f2.svg'
import f3 from '../assets/f3.svg'
import f4 from '../assets/f4.svg'

const Features = () => {
  return (
    <div className='w-full py-[50px] px-[60px]' id='features'>
        <h3 className='text-center text-[23px] text-[var(--secondary-color)] font-semibold'>FEATURES</h3>
        <h2 className='text-center text-[27px] font-medium'>Our Awesome Features</h2>
        <div className="flex flex-wrap mt-[30px] gap-10 justify-center">
            <div 
              className="group w-[250px] h-[41vh] bg-slate-100 p-[15px] cursor-pointer rounded-md shadow-xl
              hover:bg-slate-200"
            >
              <div className="flex justify-center">
                <div className="w-[100px] h-[100px] bg-[var(--secondary-color)] rounded-full p-5">
                  <img src={f1} alt="" className='w-full h-full' />
                </div>
              </div>
              <div className="mt-5">
                <h3 className='group-hover:text-slate-500 text-[17px] font-semibold'>Safety Guarantee</h3>
                <p className='group-hover:text-slate-800 text-[13px] mt-1 text-gray-400'>
                  There are many variations of majority have suffered alteration in some form injected humour randomised words.
                </p>
              </div>
            </div>
            <div 
              className="group w-[250px] h-[41vh] bg-slate-100 p-[15px] cursor-pointer rounded-md shadow-xl
              hover:bg-slate-200"
            >
              <div className="flex justify-center">
                <div className="w-[100px] h-[100px] bg-[var(--secondary-color)] rounded-full p-5">
                  <img src={f2} alt="" className='w-full h-full' />
                </div>
              </div>
              <div className="mt-5">
                <h3 className='group-hover:text-slate-500 text-[17px] font-semibold'>Fast Pickup</h3>
                <p className='group-hover:text-slate-800 text-[13px] mt-1 text-gray-400'>
                  There are many variations of majority have suffered alteration in some form injected humour randomised words.
                </p>
              </div>
            </div>
            <div 
              className="group w-[250px] h-[41vh] bg-slate-100 p-[15px] cursor-pointer rounded-md shadow-xl
              hover:bg-slate-200"
            >
              <div className="flex justify-center">
                <div className="w-[100px] h-[100px] bg-[var(--secondary-color)] rounded-full p-5">
                  <img src={f3} alt="" className='w-full h-full' />
                </div>
              </div>
              <div className="mt-5">
                <h3 className='group-hover:text-slate-500 text-[17px] font-semibold'>Affordable Rate</h3>
                <p className='group-hover:text-slate-800 text-[13px] mt-1 text-gray-400'>
                  There are many variations of majority have suffered alteration in some form injected humour randomised words.
                </p>
              </div>
            </div>
            <div 
              className="group w-[250px] h-[41vh] bg-slate-100 p-[15px] cursor-pointer rounded-md shadow-xl
              hover:bg-slate-200"
            >
              <div className="flex justify-center">
                <div className="w-[100px] h-[100px] bg-[var(--secondary-color)] rounded-full p-5">
                  <img src={f4} alt="" className='w-full h-full' />
                </div>
              </div>
              <div className="mt-5">
                <h3 className='group-hover:text-slate-500 text-[17px] font-semibold'>24/7 Support</h3>
                <p className='group-hover:text-slate-800 text-[13px] mt-1 text-gray-400'>
                  There are many variations of majority have suffered alteration in some form injected humour randomised words.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Features