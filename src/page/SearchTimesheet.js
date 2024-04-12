
import React, { useState, useEffect } from 'react'
import Alltimesheet from './Alltimesheet'
import jsondata from "../component/data.json"



const data = jsondata.employeeData
function filterdata(sear, data) {
  const fill = data.filter((data) => (data.name.toLowerCase().includes(sear.toLowerCase())))
  return fill
}

const SearchTimesheet = () => {
  const [sear, setsear] = useState("")
  const [jdata, setjdata] = useState(data)
  useEffect(() => {
    const filt = filterdata(sear, data)
    setjdata(filt)
  }, [sear])


  const getRandomColorHex = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Applying the random background color
  const backgroundColor = getRandomColorHex();
  console.log(backgroundColor, "color");
  return (
    <div className='searchTimesheet shadow-2xl bg-white'>
      <div className='searchbox'>
        <div className='search relative'>
          <div className='absolute top-5 left-5'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </div>
          <input className="inpt" type="text"
            placeholder='Search candidate'

            value={sear}
            onChange={(e) => {
              setsear(e.target.value)
            }}
          />
        </div>
        {/* <div className='anything'>{jdata.map((data)=>(<p>{data.name}</p>))}</div> */}
        <div className='anything'>{jdata.map((data) => (<div className="p-2 rounded-xl border bg-[#FEF8F9] ">
          <div className="flex flex-row items-center gap-4">
            <div className='rounded-full w-[40px] h-[40px]  text-white flex items-center justify-center bg-[#BEAD1F]'>
              {data.name.charAt(0).toUpperCase()}
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-medium leading-none">{data.name}</h2>
              <p className="text-base text-black">{data.position}</p>
            </div>
          </div>
        </div>))}</div>
      </div>
      <Alltimesheet prop={jdata} />
    </div>
  )
}

export default SearchTimesheet
