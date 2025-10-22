"use client";

export default function CoreSubjectsClient() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-30 text-center bg-gradient-to-br from-orange-50 to-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-6">
        Academic Subjects
      </h1>
      <p className="text-gray-700 text-lg mb-10 max-w-xl px-4">
        Our detailed academic subjects like DBMS, OS, CN, and OOPs are on the way!
        Stay tuned for expert-led courses designed for BCA, MCA, and B.Tech students.
      </p>

      <button className="px-8 py-3 text-lg font-semibold bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition-all duration-200">
        🚧 Coming Soon
      </button>
    </div>
  );
}
