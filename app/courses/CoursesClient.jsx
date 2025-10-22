"use client";

export default function CoursesClient() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-30 text-center bg-gradient-to-br from-orange-50 to-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-6">
        Our Courses
      </h1>

      <p className="text-gray-700 text-lg mb-10 max-w-xl px-4">
        We’re preparing a new range of computer courses — from Basic and Advanced
        Computer to Excel, MS Office, DCA, ADCA, CCC, Digital Marketing, and more.
        Available soon for both online and offline learners!
      </p>

      <button className="px-8 py-3 text-lg font-semibold bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition-all duration-200">
        🚧 Coming Soon
      </button>
    </div>
  );
}
