import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Orphan from "../public/assets/orphan logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBackground, setNavBackground] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBackground}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={Orphan} alt="/" width={90} height={70} />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>

            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>

            <Link href='/#signup'>
              <li className="ml-10 text-center text-sm uppercase hover:border-b">
                  Volunteer sign up
                </li>
            
            </Link>

            <Link href="/#causes">
              <li className="ml-10 text-sm uppercase hover:border-b">Causes</li>
            </Link>

            <Link href="/#donation">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Steps to make Donation
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/*mobile menu*/}

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
                <Image src={Orphan} alt="/" width={80} height={60} />
              </Link>

              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Rights and Aid Group for Education (R.A.G.E)
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href='/'>
              <li onClick={() => setNav(false)} className="text-sm py-4">Home</li>
              </Link>

              <Link href='/#about'>
              <li onClick={() => setNav(false)} className="text-sm py-4">About</li>
              </Link>

              <Link href='/#signup'>
                <li onClick={() => setNav(false)} className="text-sm py-4">
                  Volunteer sign up
                </li>
            </Link>

            <Link href='/#causes'>
              <li onClick={() => setNav(false)} className="text-sm py-4">Causes</li>
              </Link>

              <Link href='/#donation'>
              <li onClick={() => setNav(false)} className="text-sm py-4">Steps to make Donation</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
