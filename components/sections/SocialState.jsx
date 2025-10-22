"use client"
import '../../global.css'
import { useState, useEffect } from 'react'

function SocialState() {

  const [value1, setValue1] = useState(0)
  useEffect(() => {
    if(value1 < 120)
    {
      setTimeout( () => {
        setValue1(() => value1+1)
      }, 110)
    }
  }, [value1])

  const [value2, setValue2] = useState(0)
  useEffect(() => {
    if(value2 < 90)
    {
      setTimeout( () => {
        setValue2(() => value2+1)
      }, 90)
    }
  }, [value2])

  const [value3, setValue3] = useState(0)
  useEffect(() => {
    if(value3 < 150)
    {
      setTimeout( () => {
        setValue3(() => value3+1)
      }, 130)
    }
  }, [value3])

  const [value4, setValue4] = useState(0)
  useEffect(() => {
    if(value4 < 20)
    {
      setTimeout( () => {
        setValue4(() => value4+1)
      }, 100)
    }
  }, [value4])

  return (
    <div className='w-full flex items-center flex-col max-sm:my-23 my-30'>
      <h1 className='social-animate text-xl py-5 sm:text-[40px] font-bold font-stretch-50% text-center mb-10 px-5'>
        Join Our Ever-Growing Global Community
      </h1>

      {/* Responsive Grid */}
      <div className='max-sm:w-full w-5/6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 place-items-center'>

        <div className='bg-gradient-to-r from-[#FEEEE6] to-[#f7e6dd] aspect-square w-full max-w-[150px] sm:max-w-[250px] p-10 shadow-xm shadow-[#ebcaba] rounded-xl flex justify-center items-center'>
          <div className='bg-white rounded-xl flex flex-col justify-center items-center w-full h-full gap-2 p-5'>
            <p className='text-xl sm:text-4xl font-semibold'>{value1}K+</p>
            <p className='text-xs sm:text-base font-sans'>Trained</p>
          </div>
        </div>

        <div className='bg-gradient-to-r from-[#FEEEE6] to-[#f7e6dd] aspect-square w-full max-w-[150px] sm:max-w-[250px] p-10 shadow-xm shadow-[#ebcaba] rounded-xl flex justify-center items-center'>
          <div className='bg-white rounded-xl flex flex-col justify-center items-center w-full h-full gap-2 p-5'>
            <p className='text-xl sm:text-4xl font-semibold'>{value2}K+</p>
            <p className='text-xs sm:text-base font-sans'>Placed</p>
          </div>
        </div>

        <div className='bg-gradient-to-r from-[#FEEEE6] to-[#f7e6dd] aspect-square w-full max-w-[150px] sm:max-w-[250px] p-10 shadow-xm shadow-[#ebcaba] rounded-xl flex justify-center items-center'>
          <div className='bg-white rounded-xl flex flex-col justify-center items-center w-full h-full gap-2 p-5'>
            <p className='text-xl sm:text-4xl font-semibold'>{value3}K+</p>
            <p className='text-xs sm:text-base font-sans'>Community</p>
          </div>
        </div>

        <div className='bg-gradient-to-r from-[#FEEEE6] to-[#f7e6dd] aspect-square w-full max-w-[150px] sm:max-w-[250px] p-10 shadow-xm shadow-[#ebcaba] rounded-xl flex justify-center items-center'>
          <div className='bg-white rounded-xl flex flex-col justify-center items-center w-full h-full gap-2 p-5'>
            <p className='text-xl sm:text-4xl font-semibold'>{value4}+</p>
            <p className='text-xs sm:text-base font-sans'>Trainers</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SocialState
