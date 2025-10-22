"use client"
import Link from "next/link"
import Image from "next/image"

function CourseAd() {
  return (
    <div className="w-full flex flex-col items-center lg:justify-center mt-25 mb-15">
      <div className="relative max-b:w-full w-11/12 max-lg:gap-5 flex flex-col lg:flex-row lg:items-center py-5 lg:py-13 justify-between px-4 lg:px-10 h-min-[200px] bg-gray-950 rounded-xl">
        {/* Text Section */}
        <div className="flex flex-col gap-7">
          <p className="text-gray-100 text-xl sm:text-4xl font-bold">
            Get skills with{" "}
            <span className="text-orange-400">10,000+</span> Students at Dite Academy
          </p>

          <div className="w-full flex py-2 justify-around gap-2">
            <div className="text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">20+</p>
              <p className="text-xs sm:text-sm font-medium">Computer & Digital Courses</p>
            </div>

            <div className="text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">500+</p>
              <p className="text-xs sm:text-sm font-medium">Practice Tests & Assignments</p>
            </div>

            <div className="text-gray-100 w-1/3 bg-gray-950 shadow-sm shadow-gray-700 px-2 py-2 rounded-sm text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">100%</p>
              <p className="text-xs sm:text-sm font-medium">Practical Learning Experience</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <Link href="/courses" className="max-lg:w-full">
          <button className="w-full px-5 py-3 lg:mx-5 lg:ml-3 rounded-sm bg-orange-400 text-white font-semibold hover:bg-orange-500 transition-all duration-200">
            Enroll Now for Free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseAd;
