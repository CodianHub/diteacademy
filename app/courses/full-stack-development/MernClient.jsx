const MernClient = () => {
  const course = {
    name: "Full Stack Development with AI",
    desc: "Full Stack Development with MongoDB, Express, React, and Node. Learn to build scalable, production-ready applications from scratch to advanced.",
    duration: "8 Months",
    language: "Hindi",
    price: "65,000",
    discount: "10% off",
    finalPrice: "58,500",
    highlights: [
      "Learn complete Full Stack Web Development",
      "Hands-on projects for frontend & backend",
      "REST APIs, Authentication, JWT, OAuth",
      "Database integration with MongoDB",
      "React.js with hooks, context, Redux",
      "Deployment on cloud (AWS/Render/Netlify)",
      "Covers advanced concepts like SSR with Next.js basics"
    ],
    contents: [
      "HTML, CSS, and JavaScript Refresher",
      "React.js (Hooks, Context, Redux, Routing)",
      "Node.js & Express Basics",
      "REST API Development",
      "Database Integration (MongoDB & Mongoose)",
      "Authentication & Authorization (JWT, OAuth)",
      "Error Handling & Middlewares",
      "File Uploads & Cloud Storage",
      "React + Node Integration",
      "Payment Gateway Integration",
      "Security & Best Practices",
      "Testing (Jest, Postman, Supertest)",
      "Deployment (AWS, Render, Netlify, Vercel)",
      "Capstone Full Stack Project"
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
        {/* Left - Overview */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This MERN Stack course helps you master frontend and backend
            development. You’ll learn React for frontend, Node & Express for
            backend, MongoDB for database, and how to integrate everything to
            build real-world full-stack applications.
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

        {/* Right - Pricing & Contents */}
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

export default MernClient;
