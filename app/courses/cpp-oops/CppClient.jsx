const CppClient = () => {
  const course = {
    name: "Learn C++ & OOPS for Beginners",
    desc: "Master C++ programming language with strong Object-Oriented Programming (OOPS) concepts. Learn everything from basics to advanced with projects and prepare for DSA and development.",
    duration: "Duration: 4 Months",
    language: "Language: Hindi",
    price: 8000,
    discount: "29% off",
    finalPrice: 5680,
    highlights: [
      "Learn fundamentals of C++ programming",
      "Master Object-Oriented Programming (OOPS) concepts",
      "Understand memory management & pointers",
      "Learn Standard Template Library (STL)",
      "Hands-on coding with mini projects",
      "Prepare for Data Structures & Algorithms",
      "Foundation for system programming and app development"
    ],
    contents: [
      "Introduction to C++ & Setup",
      "Variables, Data Types & Operators",
      "Control Structures (if, switch, loops)",
      "Functions, Recursion & Inline Functions",
      "Arrays, Strings & Vectors",
      "Pointers, References & Dynamic Memory Allocation",
      "Structures & Enumerations",
      "OOP Basics: Classes & Objects",
      "Constructors, Destructors & Operator Overloading",
      "Inheritance, Polymorphism & Abstraction",
      "Templates & Exception Handling",
      "Namespaces & File Handling",
      "Standard Template Library (STL: Vectors, Maps, Sets, Queues, Stacks)",
      "Data Structures in C++ (Linked List, Trees, Graphs)",
      "Sorting & Searching Algorithms in C++",
      "Mini Projects in C++",
      "Capstone Project (DSA-based or small application)"
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
            <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-medium">⏳ {course.duration}</div>
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
            <button className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition">Enroll Now</button>
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

export default CppClient;
