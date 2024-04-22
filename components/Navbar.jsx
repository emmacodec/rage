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

            <Link href="/#Signup">
              <button>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Volunteer sign up
                </li>
              </button>
            </Link>

            <Link href="/#causes">
              <li className="ml-10 text-sm uppercase hover:border-b">Causes</li>
            </Link>

            <Link href="/#">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Steps to make Donation
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
