"use client"
import Link from "next/link"
import Image from "next/image"

function CourseAd() {
  return (
    <div className='w-full flex flex-col items-center lg:justify-center mt-25 mb-15'>
        <div className='relative max-b:w-full w-11/12 max-lg:gap-5 flex flex-col lg:flex-row lg:items-center py-5 lg:py-13 justify-between px-4 lg:px-10 h-min-[200px] bg-gray-950 rounded-xl'>
            <div className='flex flex-col gap-7'>
                <p className='text-gray-100 text-xl sm:text-4xl font-bold'>Learn anything you want <span className='text-orange-400'>10,000+</span> Learners</p>
                <div className='w-full flex py-2 justify-around gap-2'>
                    <div className='text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm'>
                        <p className='text-lg sm:text-xl lg:text-2xl font-bold'>15+</p>
                        <p className='text-xs sm:text-sm font-medium'>Job Oriented Courses</p>
                    </div>

                    <div className='text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm'>
                        <p className='text-lg sm:text-xl lg:text-2xl font-bold'>400+</p>
                        <p className='text-xs sm:text-sm font-medium'>DSA Problems for MAANG</p>
                    </div>

                    <div className='text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm'>
                        <p className='text-lg sm:text-xl lg:text-2xl font-bold'>200+</p>
                        <p className='text-xs sm:text-sm font-medium'>Free Video Tutorials</p>
                    </div>
                </div>
            </div>
            <Link href='/courses' className='max-lg:w-full'>
                <button className='w-full px-5 py-3 lg:mx-5 lg:ml-3 rounded-sm bg-orange-400 text-white'>Get Started for free</button>
            </Link>
        </div>
    </div>
  )
}

export default CourseAd
