import React, {useState} from 'react'

export default function Tasbiix() {
    const [counter,setcounter] =useState(0)
    const Increase=() =>{
        setcounter(counter +1)
    }
    const deccrease=() =>{
        if(counter>0){
            setcounter(counter -1)
        }
    
    }
    const handelReset=()=>{
        setcounter(0)
      }
    
  return (
  

    <div className=' flex justify-center items-center mt-[9rem]  '>
        <div className=''>
            <h1 className='text-center  py-10 text-[4rem]   '> {counter} </h1>
        <button onClick={Increase} className=' py-3 px-8 text-white bg-orange-500 mx-5  rounded-[0.7rem]    '>Increase</button>
        <button onClick={deccrease} className=' py-3 px-8 text-white bg-blue-500  mx-5  rounded-[0.7rem]   '>Decrease</button>
        <button onClick={handelReset} className=' py-3 px-8 text-white bg-red-500  mx-5 rounded-[0.7rem]    '>Clear</button>
    </div>
    </div>
    
  )
}
