import axios from 'axios'
import React, { useEffect, useState } from 'react'

const History = () => {
  const [data, setData] = useState(null)
  const [view, setView] = useState(null)

  useEffect(() => {
    const getHistory = () => {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/ride/history`).then((res) => {
        setData(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getHistory()
  }, [])

  const handleView = (e, view) => {
    e.preventDefault()
    setView(view)
  }

  console.log(view)

  return (
    <>
      <div className='w-[50%] py-[10px] px-[30px]'>
        <h3 className='text-[17px]'>
          History
        </h3>
        <div className="mt-3 flex flex-col gap-3">
          {data?.map((item) => (
            <div className="flex items-center justify-between bg-slate-200 py-[7px] px-[15px] rounded-sm">
              <h4 className='text-[14px]'>{item?._id}</h4>
              <button 
                className='px-[15px] py-[5px] bg-[var(--secondary-color)] rounded-md text-[13px] font-medium'
                onClick={(e) => {handleView(e, item)}}
              >
                view
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* view container */}
      {view && (
        <div 
          className="absolute w-full h-[82vh] bg-[#e0e0e08e] left-0 top-[18vh] flex items-center justify-center
          shadow-md rounded-md"
        >
          <div className="w-[500px] min-h-[20vh] bg-white p-[20px]">
          <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
              <small className="text-[13px]">Contact Number: </small>
              <p className="text-[14px] ml-2 font-medium">{view?.contactNumber}</p>
            </div>
            <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
              <small className="text-[13px]">No of Passengers: </small>
              <p className="text-[14px] ml-2 font-medium">{view?.passengersCount}</p>
            </div>
            <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
              <small className="text-[13px]">Passenger Names: </small>
              <p className="text-[14px] ml-2 font-medium">{view?.passengersNames}</p>
            </div>
            <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
              <small className="text-[13px]">Pick Up Location: </small>
              <p className="text-[14px] ml-2 font-medium">{view?.pickUpLocation}</p>
            </div>
            <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
              <small className="text-[13px]">Drop Off Location: </small>
              <p className="text-[14px] ml-2 font-medium">{view?.dropOfLocation}</p>
            </div>
            <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
              <small className="text-[13px]">Pick Up Time: </small>
              <p className="text-[14px] ml-2 font-medium">{view?.pickUpTime}</p>
            </div>
            <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
              <small className="text-[13px]">Pick Up Date: </small>
              <p className="text-[14px] ml-2 font-medium">{view?.pickUpDate}</p>
            </div>
            <div className="flex items-center px-[20px] py-[8px] mb-[10px] bg-[#eee]">
              <small className="text-[13px]">Status: </small>
              <p className={`text-[14px] ml-2 font-medium`}>
                  {view?.status}
              </p>
            </div>
            <div className="mt-[20px] flex items-center justify-center">
              <button 
                onClick={() => {setView(null)}}
                className='px-[15px] py-[7px] bg-[var(--secondary-color)] font-medium rounded-md text-[12px]'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default History