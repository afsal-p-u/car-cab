import { AiFillCar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Poster = () => {
  return (
    <div 
        id='home'
        className='mt-[18vh] w-[100%] min-h-[82vh] flex flex-col items-center justify-center bg-image-1 bg-cover px-[250px]'
    >
        <p className='text-[29px] font-bold text-[var(--secondary-color)] letter tracking-widest mb-3'>
            WELCOME TO TAXIKKA!
        </p>
        <h2 className='text-[55px] font-bold text-gray-50 tracking-wide mb-2 '>
            BOOK <span className='text-[var(--secondary-color)]'>TAXI</span> FOR YOUR RIDE
        </h2>
        <small className='text-center mb-2 text-white'>
            There are many variations of passages available the majority have suffered alteration in some forms generations
            on the internet tend to repeat predefined chunks injected humour randomised words look even slightly believable
        </small>
        <Link to="/book-new">
            <button 
                className='mt-5 px-[25px] py-[8px] bg-[var(--secondary-color)] rounded-full font-semibold flex items-center 
                text-[18px] hover:bg-black hover:text-[var(--secondary-color)]'
            >
                <AiFillCar className='mr-2' size={21} />
                Book A Taxi
            </button>
        </Link>
    </div>
  )
}

export default Poster