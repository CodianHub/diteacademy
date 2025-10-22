import React from 'react'
import { CourseFilterData } from '../../assets/data/CourseFilterData'

function CourseFilter({filterHandler}) {

  return (
    <div  className='flex justify-center px-2 gap-3 flex-wrap'>
        {
            CourseFilterData.map( (item) => {
              return <button className='bg-gray-100 hover:bg-gray-200 transition-colors duration-150 cursor-pointer p-1 md:p-2 shadow-sm rounded-sm min-w-[130px] text-sm md:text-base' onClick={() => filterHandler(item.title)} key={item.id}>{item.title}</button>
            } )
        }
    </div>
  )
}

export default CourseFilter
