"use client"
import CoursesData from '../../assets/data/CoursesData'
import CourseCard from '../../components/ui/CourseCard'
import CourseFilter from '../../components/ui/CourseFilter'
import { useState, useEffect } from 'react'

const CoursesClient = () => {

  const [category, setCategory] = useState("All");
  function filterHandler(title) {
    setCategory(title)
  }

  const [allCourses, setallCourses] = useState([])

  useEffect(() => {
    if(category === "All")
    {
      const output = Object.values(CoursesData).flat();
      setallCourses(output)
    }
    else{
      setallCourses(CoursesData[category] || [])
    }
  },[category]);

  return (
    <>
      <div className='pt-[120px] lg:flex lg:items-center lg:flex-col'>
        
        <h2 className='max-sm:text-2xl sm:text-4xl md:text-5xl lg:pt-5 pb-10 md:pb-15 font-bold text-center text-gray-800'>What would you like to <span className='text-orange-400'>learn?</span></h2>

        <div className='flex flex-col gap-4 items-center pb-5'>
        
          <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500 bg-clip-text text-transparent py-2 rounded'>
            <p className='font-bold text-xl sm:text-2xl lg:text-3xl'>Select Category</p>
            <p className='text-sm'>All Courses: {allCourses.length}</p>
          </div>
          
          <CourseFilter className='flex' filterHandler={filterHandler} />
          
        </div>

        <div className='lg:w-7/8 grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-2 items-stretch p-5'>
          {
            allCourses.map( (course) => {
              return (
                <CourseCard key={course.id} name={course.name} desc={course.desc} image={course.image} alt={course.alt} price={course.price} discount={course.discount} link={course.link} />
              )
            })
          }
        </div>
        
      </div>
    </>
  )
}

export default CoursesClient
