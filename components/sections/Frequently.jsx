import { faqs } from "../../assets/data/FrequentlyData";
import FrequentlyQues from "../ui/FrequentQues";

function Frequently() {
  return (
    <div className="mt-5 px-4">
      {/* Section Title */}
      <div>
        <p className="text-xl sm:text-3xl lg:text-5xl pb-6 font-semibold text-center text-gray-800">
          Frequently Asked Questions
        </p>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Have questions about our courses, certificates, or online classes? Here are some answers from the Dite Academy team.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto">
        {faqs.map((a) => (
          <FrequentlyQues key={a.id} question={a.question} answer={a.answer} />
        ))}
      </div>
    </div>
  );
}

export default Frequently;
