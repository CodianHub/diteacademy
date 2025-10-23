import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center shadow-sm shadow-gray-400 gap-12 pt-15 pb-5 px-1 md:px-3">
        {/* main footer content */}
        <div
          className="w-full flex flex-col items-center justify-evenly gap-8
                md:flex-row md:justify-evenly md:items-start md:gap-3"
        >
          {/* // left side name & logo */}
          <Link href="/" className="flex flex-col gap-3 justify-center">
            <div className="flex flex-col cursor-pointer gap-2 items-center scroll-smooth md:flex-row">
              <Image
                loading="lazy"
                className="max-md:h-13 max-md:w-13"
                src="/images/logo.png"
                alt="Dite Academy logo"
                height={70}
                width={70}
              />
              <h1 className="text-4xl text-blue-900 max-b:hidden md:text-4xl font-bold py-1">
                Dite Academy
              </h1>
            </div>
            <h2 className="text-sm text-center">
              💻 Dite Academy | Digital Institute of Technical Education
            </h2>
          </Link>

          {/* quick links */}
          <ul className="flex flex-col items-center gap-2 text-xs font-semibold md:items-start">
            <li className="text-base sm:whitespace-nowrap">Quick Links</li>
            <Link
              href="/"
              className="cursor-pointer scroll-smooth hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Courses
            </Link>
            <Link
              href="/tutorials"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Our Free Tutorials
            </Link>
            <Link
              href="/dsa-sheet"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Online Tests
            </Link>
            <Link
              href="/core-subjects"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Academic Subjects
            </Link>
            <Link
              href="/about"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Contact Us
            </Link>
          </ul>

          {/* legal links */}
          <ul className="flex flex-col text-center items-center gap-2 text-xs font-semibold md:items-start">
            <li className="text-base">Legal</li>
            <Link
              href="/legal/privacy-policy"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-use"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Terms of Use
            </Link>
            <Link
              href="/legal/refund-policy"
              className="cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100"
            >
              Refund & Cancellation Policy
            </Link>
          </ul>

          {/* Contact information links */}
          <ul className="flex flex-col items-center max-w-[200px] gap-2 text-sm font-semibold md:items-start">
            <li className="text-base">GET IN TOUCH</li>
            <li className="flex items-center gap-2 cursor-pointer transition-all duration-100">
              <IoMdMail className="mt-1 text-lg" />
              <a
                href="mailto:diteacademyofficial@gmail.com"
                className="hover:underline hover:text-blue-600"
              >
                support@diteacademy.com
              </a>
            </li>
            <li className="flex flex-wrap justify-center gap-3 items-center mt-1 md:justify-start">
              <a href="https://www.youtube.com/@diteacademy" target="_blank">
                <IoLogoYoutube className="text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150" />
              </a>
              <a href="https://www.facebook.com/diteacademy" target="_blank">
                <FaFacebookSquare className="text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150" />
              </a>
              <a href="https://www.instagram.com/diteacademy" target="_blank">
                <FaInstagramSquare className="text-[21px] cursor-pointer hover:opacity-50 transition-all duration-150" />
              </a>
              <a href="https://www.twitter.com/diteacademy" target="_blank">
                <FaTwitterSquare className="text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150" />
              </a>
              <a href="https://www.pinterest.com/diteacademy" target="_blank">
                <FaPinterest className="text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150" />
              </a>
              <a
                href="https://www.linkedin.com/company/diteacademy"
                target="_blank"
              >
                <FaLinkedin className="text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150" />
              </a>
            </li>
          </ul>
        </div>

        {/* copyright text */}
        <div className="px-2 w-full text-center flex flex-col items-center">
          © 2025 Dite Academy. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
