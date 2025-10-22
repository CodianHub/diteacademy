"use client"
import Link from 'next/link';
import NavLink from '../ui/NavLinks';
import Image from 'next/image';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import NavDrop from '../ui/NavDrop'
import NavSide from '../ui/NavSide'

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);
    function visibleHandler() {
        setIsVisible( () => !isVisible )
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // function setIsLoggedIn() {
    //     // add later
    // }

    const [open, setOpen] = useState(false);

  return (

    <>
        {/* For Mobile device */}
        <div className='lg:hidden w-full fixed z-10 top-4 flex flex-col items-center justify-center'>
            <nav className='flex items-center justify-between px-5 rounded-xl w-full lg:w-5/6 h-[70px] lg:h-[80px] bg-gray-100/80 shadow-sm shadow-gray-400'>
                {/* name and logo */}
                <Link href='/' className='flex items-center gap-1'>
                    <Image src="/images/logo.png" width={50} height={50} alt='CodianHub Logo' loading='lazy' />
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500 bg-clip-text text-transparent'>CodianHub</h1>
                </Link>

                {/* side links hendler */}
                <div>

                    {
                        isVisible ? <RxCross2 onClick={visibleHandler} className='text-5xl'/> : <IoReorderThreeOutline onClick={visibleHandler} className='text-5xl'/>
                    }

                </div>
            </nav>
            
            <div>
                { isVisible &&
                    <NavSide
                        visibleHandler={visibleHandler}
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                    />
                }
            </div>
        </div>

        {/* For laptop & tab screen */}
        <div className='max-lg:hidden w-full fixed z-10 top-4 flex flex-col items-center'>
            <nav className='flex flex-col justify-center w-7/8 rounded-xl h-[80px] bg-gray-100/80 shadow-sm shadow-gray-400'>
                <ul className='flex items-center justify-around gap-10'>
                    <li>
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/images/logo.png" width={50} height={50} alt='CodianHub Logo' loading='lazy' />
                            <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
                                CodianHub
                            </h1>
                        </Link>
                    </li>

                    <li className="flex gap-6 relative left-3 text-[18px]">
                        <NavLink href="/">
                            Home
                        </NavLink>

                        {/* Explore Dropdown */}
                        <div
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            onClick={() => setOpen(false)}
                            className="relative" >
                            <div className="flex gap-1 items-center cursor-pointer">
                                <div>Explore</div>
                                {
                                    open ? <IoIosArrowUp /> : <IoIosArrowDown />
                                }
                            </div>

                            {open && (
                            <div className="absolute top-full -left-[100%] mt-0">
                                <NavDrop />
                            </div>
                            )}
                        </div>

                        <NavLink href="/about">
                            About us
                        </NavLink>

                        <NavLink href="/contact">
                            Contact
                        </NavLink>
                    </li>

                    <li className='flex gap-5'>

                        { !isLoggedIn &&
                            <button
                                className='py-2 px-4 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center'
                            >
                                Login
                            </button>
                        }


                        { !isLoggedIn &&
                            <button
                                className='py-2 px-3 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center'
                            >
                                Signup
                            </button>
                        }
                        

                        { isLoggedIn &&
                            <button
                                className='py-2 px-4 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center'
                            >
                                Dashboard
                            </button>
                        }


                        { isLoggedIn &&
                            <button
                                className='py-2 px-4 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center'
                            >
                                Logout
                            </button>
                        }
                    </li>
                </ul>
            </nav>
            
        </div>
    </>
  )
}

export default Navbar