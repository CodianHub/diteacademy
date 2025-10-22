import {faqs} from '../../assets/data/FrequentlyData'
import FrequentlyQues from '../ui/FrequentQues'

function Frequently() {
  return (
    <div className='mt-5'>
      <div>
        <p className='text-xl sm:text-3xl lg:text-5xl pb-6 font-semibold text-center'>Frequently Asked Questions</p>
      </div>

      <div>
        {
          faqs.map((a) => {
            return (
              <FrequentlyQues key={a.id} question={a.question} answer={a.answer} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Frequently
