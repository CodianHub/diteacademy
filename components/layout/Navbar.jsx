"use client";
import Link from "next/link";
import NavLink from "../ui/NavLinks";
import Image from "next/image";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NavDrop from "../ui/NavDrop";
import NavSide from "../ui/NavSide";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  function visibleHandler() {
    setIsVisible((prev) => !prev);
  }

  return (
    <>
      {/* ====== MOBILE NAVBAR ====== */}
      <div className="lg:hidden w-full fixed z-10 top-4 flex flex-col items-center justify-center">
        <nav className="flex items-center justify-between px-5 rounded-xl w-full lg:w-5/6 h-[70px] lg:h-[80px] bg-gray-100/80 shadow-sm shadow-gray-400">
          {/* Logo & Name */}
          <Link href="/" className="flex items-center gap-1">
            <Image
                src="/logo.png"
                width={250}
                height={250}
                alt="logo of dite academy"
                loading="lazy"
              />
          </Link>

          {/* Mobile Menu Icon */}
          <div>
            {isVisible ? (
              <RxCross2 onClick={visibleHandler} className="text-5xl" />
            ) : (
              <IoReorderThreeOutline onClick={visibleHandler} className="text-5xl" />
            )}
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {isVisible && (
          <NavSide
            visibleHandler={visibleHandler}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </div>

      {/* ====== DESKTOP NAVBAR ====== */}
      <div className="max-lg:hidden w-full fixed z-10 top-4 flex flex-col items-center">
        <nav className="flex flex-col justify-center w-7/8 rounded-xl h-[80px] bg-gray-100/80 shadow-sm shadow-gray-400">
          <ul className="flex items-center justify-around gap-10">
            {/* Logo */}
            <li>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex flex-col items-start gap-[1px] text-[#043056]">
                  {/* <h1 className="text-3xl font-bold">Dite Academy</h1> */}
                  <Image
                    src="/logo.png"
                    width={250}
                    height={250}
                    alt="logo of dite academy"
                    loading="lazy"
                    />
                  <p className="text-xs text-[#0690D1] relative -top-5 -right-[17px]">Digital Institute of Technical Education</p>
                </div>
              </Link>
            </li>

            {/* Navigation Links */}
            <li className="flex gap-6 relative left-3 text-[18px]">
              <NavLink href="/">Home</NavLink>

              {/* Explore Dropdown */}
              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={() => setOpen(false)}
                className="relative"
              >
                <div className="flex gap-1 items-center cursor-pointer">
                  <div>Explore</div>
                  {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

                {open && (
                  <div className="absolute top-full -left-[100%] mt-0">
                    <NavDrop />
                  </div>
                )}
              </div>

              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </li>

            {/* Auth Buttons */}
            <li className="flex gap-5">
              {!isLoggedIn && (
                <>
                  <button className="py-2 px-4 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center">
                    Login
                  </button>
                  <button className="py-2 px-3 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center">
                    Signup
                  </button>
                </>
              )}

              {isLoggedIn && (
                <>
                  <button className="py-2 px-4 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center">
                    Dashboard
                  </button>
                  <button className="py-2 px-4 cursor-pointer rounded bg-orange-400 text-white flex justify-center items-center">
                    Logout
                  </button>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
