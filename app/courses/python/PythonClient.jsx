const PythonClient = () => {
  const course = {
    name: "Learn Python Programming for Beginners to Advance",
    desc: "Learn Python from scratch to advanced with projects. Perfect for beginners and professionals aiming to master backend, data, and automation.",
    duration: "Duration: 3 Months",
    language: "Language: Hindi",
    price: 10000,
    discount: "20% off",
    finalPrice: 8000,
    highlights: [
      "Learn Python basics to advanced concepts",
      "Hands-on coding exercises",
      "File handling, OOPs, and modules",
      "Error handling & debugging",
      "Working with APIs and libraries",
      "Intro to Data Science & Machine Learning",
      "Build multiple real-world projects"
    ],
    contents: [
      "Introduction to Python & Setup",
      "Variables, Data Types & Operators",
      "Conditionals and Loops",
      "Functions and Recursion",
      "Strings, Lists, Tuples, Dictionaries, Sets",
      "OOP in Python (Classes, Inheritance, Polymorphism)",
      "File Handling and Modules",
      "Error Handling & Debugging",
      "Working with Libraries (NumPy, Pandas, Requests)",
      "APIs and Web Scraping Basics",
      "Data Visualization (Matplotlib, Seaborn)",
      "Intro to Machine Learning with Scikit-learn",
      "Mini Projects (Calculator, Web Scraper, Data Analysis)",
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
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">⏳ {course.duration}</div>
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
            <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition">Enroll Now</button>
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

export default PythonClient;
