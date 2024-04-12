
import React,{useState,useEffect} from 'react'
import Alltimesheet from './Alltimesheet'
import jsondata from "../component/data.json"

const data=jsondata.employeeData
function filterdata(sear,data){
  const fill=data.filter((data)=>(data.name.toLowerCase().includes(sear.toLowerCase())))
  return fill
}

const SearchTimesheet =()=> {
  const [sear,setsear]=useState("")
  const [jdata,setjdata]=useState(data)
  useEffect(()=>{ 
    const filt=filterdata(sear,data)
    setjdata(filt)
  },[sear])
  return (
    <div className='searchTimesheet'>
        <div className='searchbox'>
        <div className='search'>
        <input className="inpt" type="text"
        value={sear}
        onChange={(e)=>{
          setsear(e.target.value)
        }}
        />
      </div>
      <div className='anything'>{jdata.map((data)=>(<p>{data.name}</p>))}</div>
     </div>
         <Alltimesheet prop={jdata}/>
    </div>
  )
}

export default SearchTimesheet
