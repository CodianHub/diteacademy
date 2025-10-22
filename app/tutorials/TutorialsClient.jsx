import TutorialCard from '../../components/ui/TutorialCard';
import TutorialsCardData from '../../assets/data/TutorialsCardData';

const TutorialsClient = () => {

  return (
    <>
      <div className='lg:flex lg:justify-center'>
        <div className='p-3 lg:w-6/7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch pt-[120px]'>

          {
            TutorialsCardData.map( (card) => {
              return (
                <TutorialCard key={card.id} id={card.id} img={card.img} title={card.title} desc={card.desc} />
              );
            })
          }

        </div>
      </div>
    </>
  )
}

export default TutorialsClient
