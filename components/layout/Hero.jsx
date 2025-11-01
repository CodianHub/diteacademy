import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { MdVideoSettings } from "react-icons/md";
import Image from "next/image";

function Hero() {
  return (
    <div className="pt-30">
      {/* Top Tagline */}
      <div className="text-center pb-10 md:pt-6">
        <p className="a:text-sm b:text-3xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-extrabold text-[#265deb]">
          Learn·Grow·Succeed
        </p>
        <div className="flex items-center justify-center pt-4 gap-1">
          <div className="w-1/8 h-0.5 bg-gradient-to-r from-blue-100 via-blue-600 to-blue-950" />
          <div className="border-4 border-blue-800 rounded-full" />
          <div className="w-1/8 h-0.5 bg-gradient-to-r from-blue-950 via-blue-600 to-blue-100" />
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="relative flex md:justify-between md:mx-5 max-md:flex-col max-md:items-center mb-10">
        {/* Left Side Content */}
        <div className="lg:px-25 lg:py-10 flex flex-col gap-3">
          {/* Text */}
          <div className="max-md:text-center">
            <p className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl pb-2 text-blue-950 font-bold">
              Be a part of the
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl pb-5 text-orange-400 font-bold">
              Dite Academy
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
              Empowering computer skills with us
            </p>
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl pb-10 text-gray-700">
              to build a brighter future.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex max-md:justify-center gap-5 sm:gap-7">
            {/* YouTube */}
            <div className="flex hover:border-2 border-orange-400 justify-center items-center transition-all duration-200 hover:text-red-600 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-gray-300">
              <a
                href="https://www.youtube.com/@diteacademy"
                target="_blank"
                className="text-2xl sm:text-3xl"
              >
                <FaYoutube />
              </a>
            </div>
            {/* Twitter (X) */}
            <div className="flex hover:border-2 border-orange-400 justify-center items-center transition-all duration-200 hover:text-blue-500 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-gray-300">
              <a
                href="https://x.com/diteacademy"
                target="_blank"
                className="text-2xl sm:text-3xl"
              >
                <IoLogoTwitter />
              </a>
            </div>
            {/* Instagram */}
            <div className="flex hover:border-2 border-orange-400 justify-center items-center transition-all duration-200 hover:text-[#f13d67] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-gray-300">
              <a
                href="https://www.instagram.com/diteacademy"
                target="_blank"
                className="text-2xl sm:text-3xl"
              >
                <RiInstagramFill />
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex max-md:flex-col max-md:items-center gap-4 my-10">
            <button className="cursor-pointer px-10 py-2 rounded-md text-md bg-orange-400 border-orange-400 border-2">
              Enroll Now
            </button>
            <a
              href="https://www.youtube.com/@diteacademy"
              target="_blank"
              className="group px-10 py-2 cursor-pointer gap-3 flex items-center justify-center rounded-md border-orange-400 border-2"
            >
              <span>Watch & Learn</span>
              <MdVideoSettings className="max-md:hidden text-2xl group-hover:scale-120 transition-all duration-150" />
            </a>
          </div>
        </div>

        {/* Right Side Hero Image */}
        <Image
          className="absolute max-md:relative max-md:bottom-5 max-md:text-center right-0 -bottom-0 md:max-w-1/2"
          src="/images/heroImg.png"
          alt="Dite Academy - Hero image"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
