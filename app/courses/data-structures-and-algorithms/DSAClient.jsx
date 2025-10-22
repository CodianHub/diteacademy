const DSAClient = () => {
  const course = {
    name: "Data Structures & Algorithms for Beginners",
    desc: "Master Data Structures & Algorithms with 400+ problems. Learn step-by-step from basics to advanced and crack MAANG-level interviews.",
    duration: "6 Months",
    language: "Hindi",
    price: "65,000",
    discount: "10% off",
    finalPrice: "58,500",
    highlights: [
      "400+ coding problems with solutions",
      "Covers Arrays, Strings, Recursion, Linked List, Stack, Queue, Trees, Graphs, DP, and more",
      "Includes problem-solving patterns",
      "Leetcode, GFG, Codeforces problem practice",
      "Mock interviews and assignments",
      "Suitable for beginners to advanced learners"
    ],
    contents: [
      "Introduction to Problem Solving",
      "Time & Space Complexity Analysis",
      "Arrays & Strings",
      "Recursion & Backtracking",
      "Linked List (Singly, Doubly, Circular)",
      "Stack & Queue",
      "Trees (Binary, BST, Advanced Trees)",
      "Graphs (DFS, BFS, Shortest Path, MST)",
      "Hashing & HashMaps",
      "Dynamic Programming (DP Patterns)",
      "Greedy Algorithms",
      "Bit Manipulation",
      "Interview Preparation & Mock Tests"
    ],
  };

  return (
    <div className="pt-30 pb-16 px-6 md:px-16 lg:px-32 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {course.name}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {course.desc}
        </p>
      </div>

      {/* Course Info */}
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-8">
        {/* Left - Details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This course takes you from the very basics of Data Structures to
            advanced algorithms. Designed for coding interviews and competitive
            programming, it focuses on problem-solving strategies and hands-on
            practice.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-medium">
              ⏳ Duration: {course.duration}
            </div>
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">
              🌐 Language: {course.language}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              What you'll learn
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {course.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right - Pricing + Contents */}
        <div className="flex flex-col justify-between">
          <div className="bg-gray-100 p-6 rounded-xl shadow-inner mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h3>
            <p className="text-lg text-gray-600 line-through">
              ₹{course.price}
            </p>
            <p className="text-3xl font-bold text-green-600">
              ₹{course.finalPrice}
            </p>
            <p className="text-sm text-gray-500">({course.discount})</p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-medium rounded-xl shadow hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Course Contents
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-600 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
              {course.contents.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSAClient;
