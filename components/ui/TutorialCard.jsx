import Image from "next/image"

function TutorialCard({ img, title, desc }) {

  return (
    <div className='flex rounded-lg p-3 shadow-sm shadow-gray-300'>
    
        <div className='h-full w-full flex flex-col group gap-4 relative'>

            <Image className='rounded-lg group-hover:scale-103 transition-all duration-200' src={img} alt="card-image" height={300} width={500} loading="lazy" />

            <div className='pb-17'>
                <h2 className='font-semibold pb-1'>{title}</h2>
                <h3 className='text-xs text-gray-500'>{desc}</h3>
            </div>

            <div className='w-full absolute bottom-0'>
                <a href='https://www.youtube.com/@codianhub/playlists' target='_blank' 
                className='group-hover:bg-orange-400 bg-gray-200 transition-all 
                rounded flex justify-center items-center duration-200 text-center py-2'
                >
                    View learn
                </a>
            </div>


        </div>

    </div>
  )
}

export default TutorialCard
