const CClient = () => {
  const course = {
    name: "C Language Crash Course",
    desc: "Learn C programming language from basics to advanced. Strong foundation for system programming, DSA, and competitive coding.",
    duration: "Duration: 3 Months",
    language: "Language: Hindi",
    price: 9000,
    discount: "10% off",
    finalPrice: 8100,
    highlights: [
      "Learn fundamentals of programming",
      "Master pointers, arrays, and memory management",
      "Understand how computers process instructions",
      "Structured programming with functions",
      "Hands-on coding challenges",
      "Prepare for DSA & Competitive Programming",
      "Foundation for C++, Java, and other languages"
    ],
    contents: [
      "Introduction to C & Setup",
      "Basic Syntax, Variables & Data Types",
      "Operators & Expressions",
      "Control Structures (if, switch, loops)",
      "Functions & Recursion",
      "Arrays, Strings & Structures",
      "Pointers & Memory Management",
      "Dynamic Memory Allocation",
      "File Handling in C",
      "Preprocessor Directives & Macros",
      "Data Structures in C (Stacks, Queues, Linked Lists)",
      "Sorting & Searching Algorithms",
      "Mini Projects in C",
      "Capstone Project"
    ]
  };

  return (
    <div className="pt-30 pb-16 px-6 md:px-16 lg:px-32 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">{course.name}</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{course.desc}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
          <p className="text-gray-600">{course.desc}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-medium">⏳ {course.duration}</div>
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">🌐 {course.language}</div>
          </div>
          <h3 className="mt-6 text-xl font-semibold mb-3">What you'll learn</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {course.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>

        <div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-inner mb-6">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <p className="line-through text-gray-500">₹{course.price}</p>
            <p className="text-3xl text-green-600 font-bold">₹{course.finalPrice}</p>
            <p className="text-sm text-gray-500">{course.discount}</p>
            <button className="mt-4 px-6 py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition">Enroll Now</button>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Course Contents</h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-600 max-h-64 overflow-y-auto">
              {course.contents.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CClient;
