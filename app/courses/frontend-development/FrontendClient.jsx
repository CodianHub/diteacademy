const FrontendClient = () => {
  const course = {
    name: "Frontend Development (React + Next.js + Tailwind + TypeScript)",
    desc: "Become a modern frontend developer. Learn React, Next.js, Tailwind CSS, and TypeScript by building real-world projects.",
    duration: "Duration: 5 Months",
    language: "Language: Hindi",
    price: "35,000",
    discount: "(10% off)",
    finalPrice: "31,500",
    highlights: [
      "Modern HTML5, CSS3, and JavaScript (ES6+)",
      "Responsive design with Tailwind CSS",
      "React.js fundamentals + advanced patterns",
      "Next.js for SSR, SSG, and API Routes",
      "TypeScript with React & Next.js",
      "State management (Context API & Redux Toolkit)",
      "Fetching APIs with Axios/React Query",
      "Authentication (JWT, NextAuth.js)",
      "Performance optimization & SEO best practices",
      "Deploy projects on Vercel & Netlify"
    ],
    contents: [
      "Introduction to Frontend Development",
      "HTML5, CSS3 & Modern JavaScript",
      "Responsive Layouts & Tailwind CSS",
      "React Basics: Components, Props, State",
      "Hooks (useState, useEffect, useReducer)",
      "React Router vs Next.js Routing",
      "Next.js: SSR, SSG & Dynamic Routing",
      "API Integration with Axios & React Query",
      "Global State Management with Redux Toolkit",
      "Authentication with JWT & NextAuth",
      "TypeScript with React & Next.js",
      "Performance Optimization (Code Splitting, Lazy Loading)",
      "SEO with Next.js (Head, Metadata, Sitemap)",
      "Mini Projects (Portfolio, Blog, Dashboard)",
      "Capstone Project: Full-Stack App with Next.js"
    ]
  };

  return (
    <div className="pt-30 pb-16 px-6 md:px-16 lg:px-32 bg-gray-50">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">{course.name}</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{course.desc}</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-8">
        {/* Left Column */}
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

        {/* Right Column */}
        <div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-inner mb-6">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <p className="line-through text-gray-500">₹{course.price}</p>
            <p className="text-3xl text-green-600 font-bold">₹{course.finalPrice}</p>
            <p className="text-sm text-gray-500">{course.discount}</p>
            <button className="mt-4 w-full px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition">
              Enroll Now
            </button>
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

export default FrontendClient;
