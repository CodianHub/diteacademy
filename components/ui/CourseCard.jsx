import Link from "next/link"

function CourseCard({ name, desc, image, price, discount, alt, link }) {
  return (
    <>
        <Link href={link} className='h-full group w-full flex p-3 pb-17 relative flex-col rounded-sm gap-2 bg-gray-50 shadow-gray-300 shadow-sm'>
            <div className='group-hover:scale-101 transition-scale duration-200'>
               <img className='rounded-sm' src={image} loading='lazy' alt={alt}/>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <p>{desc}</p>
            </div>
            <div className='absolute bottom-3 flex flex-col gap-1'>
                <div className='w-2/3 sm:w-1/2 md:w-4/5 h-[1px] bg-gray-400'></div>
                <div className='gap-2 sm:gap-3 md:gap-5 flex max-sm:flex-wrap items-center'>
                    <p className='font-bold'>₹{price - 2000}</p>
                    <strike className='max-sm:hidden font-bold text-gray-600'>₹{price}</strike>
                    <p className='px-2 py-1 rounded-sm text-white bg-orange-400'>-{discount} Off</p>
                </div>
            </div>
        </Link>
    </>
  )
}

export default CourseCard
