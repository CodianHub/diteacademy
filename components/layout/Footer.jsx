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
import Link from 'next/link';
import Image from 'next/image';

function Footer() {

  return (
    <div>
        <div className='flex flex-col justify-center items-center shadow-sm shadow-gray-400 gap-12 pt-15 pb-5 px-1 md:px-3'>
            {/* main footer content */}
            <div className='w-full flex flex-col items-center justify-evenly gap-8
                md:flex-row md:justify-evenly md:items-start md:gap-3'>
                {/* // left side namd & logo */}
                <Link href='/' className='flex flex-col gap-3 justify-center '>
                    <div className='flex flex-col cursor-pointer gap-2 items-center scroll-smooth md:flex-row'>
                        <Image loading='lazy' className='md:h-13 md:w-13' src="/images/logo.png" alt='CodianHub logo' height={80} width={80}/>
                        <h1 className='text-4xl max-b:hidden md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500 bg-clip-text text-transparent py-1'>CodianHub</h1>
                    </div>
                    <h2 className='text-sm text-center'>The Ultimate Guide To Ace SDE Interviews.</h2>
                </Link>

                {/* quick links */}
                <ul className='flex flex-col items-center gap-2 text-xs font-semibold md:items-start'>
                    <li className='text-base sm:whitespace-nowrap'>Quick Links</li>
                    <Link href='/' className='cursor-pointer scroll-smooth hover:text-blue-600 hover:underline transition-all duration-100'>Home</Link>
                    <Link href='/courses' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>Courses</Link>
                    <Link href='/tutorials' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>Tutorials</Link>
                    <Link href='/dsa-sheet' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>DSA Sheet</Link>
                    <Link href='/core-subjects' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>Core Subjects</Link>
                    <Link href='/about' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>About us</Link>
                    <Link href='/contact' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>Contact us</Link>
                </ul>

                {/* legel links */}
                <ul className='flex flex-col text-center items-center gap-2 text-xs font-semibold md:items-start'>
                    <li className='text-base'>Legal</li>
                    <Link href='/legal/privacy-policy' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>Privacy Policy</Link>
                    <Link href='/legal/terms-of-use' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>Terms of use</Link>
                    <Link href='/legal/refund-policy' className='cursor-pointer hover:text-blue-600 hover:underline transition-all duration-100'>Refund & Cancellation Policy</Link>
                </ul>

                {/* Contact information links */}
                <ul className='flex flex-col items-center max-w-[200px] gap-2 text-sm font-semibold md:items-start'>
                    <li className='text-base'>GET IN TOUCH</li>
                    <li className='flex items-center gap-2 cursor-pointer transition-all duration-100'>
                        <IoMdMail className='mt-1 text-lg'/>
                        <a href='mailto: team.codianhub@gmail.com' className='hover:underline hover:text-blue-600'>Support@codianhub.in</a>
                    </li>
                    <li className='flex flex-wrap justify-center gap-3 items-center mt-1 md:justify-start'>
                        <a href='https://www.youtube.com/@codianhub' target="_blank">
                            <IoLogoYoutube className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.facebook.com/codianhub' target="_blank">
                            <FaFacebookSquare className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.instagram.com/codianhub/' target="_blank">
                            <FaInstagramSquare className='text-[21px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.twitter.com/codianhub' target="_blank">
                            <FaTwitterSquare className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.threads.com/@codianhub' target="_blank">
                            <BsFillThreadsFill className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.pinterest.com/codianhub' target="_blank">
                            <FaPinterest className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.github.com/codianhub' target="_blank">
                            <FaGithub className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.linkedin.com/in/ravi-kumar-codianhub' target="_blank">
                            <FaLinkedin className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://discord.gg/f5CHmcdCnc' target="_blank">
                            <FaDiscord className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://t.me/codianhub' target="_blank">
                            <FaTelegram className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                    </li>
                </ul>
            </div>

            {/* copyright text */}
            <div className='px-2 w-full text-center flex flex-col items-center'>
                © 2025 CodianHub Technologies Pvt. Ltd. All rights reserved.
                <div className='flex w-full items-center justify-center relative top-5 gap-1'>
                    <div className='w-1/8 h-0.5 bg-gradient-to-r from-red-50 via-red-300 to-red-500'></div>
                    <div className='border-4 border-red-500 rounded-full'></div>
                    <div className='w-1/8 h-0.5 bg-gradient-to-r from-red-500 via-red-300 to-red-50'></div>
                </div>
            </div>

            {/* footer bottom Title */}
            <h1 className='opacity-20 max-b:hidden select-none text-center text-5xl sm:text-8xl md:text-9xl
                font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500 
                bg-clip-text text-transparent'>
                CodianHub
            </h1>
        </div>

    </div>
  )
}

export default Footer