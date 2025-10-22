"use client";

export default function DSASheetClient() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-30 text-center bg-gradient-to-br from-orange-50 to-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-6">
        Online Tests
      </h1>

      <p className="text-gray-700 text-lg mb-10 max-w-xl px-4">
        Practice tests and quizzes for computer courses like Basic Computer, MS Office, Excel, DCA, ADCA, and CCC are coming soon!  
        Stay tuned for interactive mock exams designed to boost your learning.
      </p>

      <button className="px-8 py-3 text-lg font-semibold bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition-all duration-200">
        🚧 Coming Soon
      </button>
    </div>
  );
}
