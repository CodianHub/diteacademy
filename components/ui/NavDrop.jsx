"use client"
import Link from 'next/link'

function NavDrop() {
  return (
    <>
        <div className='w-80 rounded-xl bg-gray-100 border-gray-100 shadow-md h-auto'>

            <ul className='flex flex-col items-start gap-5 py-2'>

                <li className='hover:text-gray-600 text-gray-950 flex flex-col justify-center px-4 h-[80px] w-full'>
                    <Link href="/courses" className='flex flex-col'>
                        <h2 className='text-xl font-semibold'>Courses</h2>
                        <p className='text-sm text-slate-700'>Improve your skills with beginner to advanced courses</p>
                    </Link>
                </li>

                <li className='hover:text-gray-600 text-gray-950 flex flex-col justify-center px-4 h-[80px] w-full'>
                    <Link href="/tutorials" className='flex flex-col'>
                        <h2 className='text-xl font-semibold'>Tutorials</h2>
                        <p className='text-sm text-slate-700'>Explore step-by-step coding tutorials designed for beginners and advanced learners</p>
                    </Link>
                </li>

                <li className='hover:text-gray-600 text-gray-950 flex flex-col justify-center px-4 h-[80px] w-full'>
                    <Link href="/dsa-sheet" className='flex flex-col'>
                        <h2 className='text-xl font-semibold'>DSA Sheet</h2>
                        <p className='text-sm text-slate-700'>Practice data structures and algorithms with a complete DSA placement preparation sheet</p>
                    </Link>
                </li>

                <li className='hover:text-gray-600 text-gray-950 flex flex-col justify-center px-4 h-[80px] w-full'>
                    <Link href="/core-subjects" className='flex flex-col'>
                        <h2 className='text-xl font-semibold'>Core Subjects</h2>
                        <p className='text-sm text-slate-700'>Explore essential computer science subjects like DBMS, OS, CN, and more</p>
                    </Link>
                </li>

            </ul>

        </div>
    </>
  )
}

export default NavDrop