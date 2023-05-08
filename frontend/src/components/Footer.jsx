import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full h-[10vh] px-[50px] flex items-center bg-black mt-[30px]'>
        <div className="flex-1">
            <p className='text-white'>© Copyright 2023 Taxica All Rights Reserved.</p>
        </div>
        <div className="flex-1 flex items-center justify-end">
            <AiFillTwitterSquare className='mr-[20px] text-white text-[25px] cursor-pointer' />
            <AiFillFacebook className='mr-[20px] text-white text-[25px] cursor-pointer' />
            <AiFillInstagram className='mr-[20px] text-white text-[25px] cursor-pointer' />
            <AiFillYoutube className='mr-[20px] text-white text-[25px] cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer