'use client'
import Link from "next/link";
import styles from './Navbar.module.css'
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenoOpen, setIsMobileMenuOpen] = useState(false)

     // Handle scroll safely on client
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenoOpen)
    }

    const navLinks = [
        { name: 'About Us', path: './about-us' },
        { name: 'Our Products', path: './our-products' },
        { name: 'Careers', path: './careers' },
        { name: 'Contact Us', path: './contact-us' },
    ]

    return (
        <nav className={`nav flex h-25 justify-between min-sm:px-10 bg-transparent z-1000 ${(isScrolled || isMobileMenoOpen) && styles.navbarScrolled} fixed top-0 left-0 w-full`}>
            <div className={`flex max-md:w-full h-full min-sm:bg-transparent max-sm:px-10 ${isScrolled ? 'bg-white' : 'bg-transparent'} transition-all justify-between z-300`}>
            <Link href="/">
  <div className="flex h-full z-30 relative w-auto">
    <Image
      src={isScrolled || isMobileMenoOpen ? "/xelton.png" : "/xelton_white.png"}
      alt="xelton"
      width={100} // set appropriate width
      height={50} // set appropriate height
      className="object-cover"
    />
  </div>
</Link>

                {/* Hamburger Menu Button (Mobile Only) */}
                <button onClick={toggleMobileMenu} className='hamburgerOpen min-md:hidden cursor-pointer p-[10px] h-fit w-fit self-center z-200' aria-label="Toggle menu">
                    <div className={`bar1 w-[25px] h-[3px] ${(isScrolled || isMobileMenoOpen) ? 'bg-slate-600' : 'bg-white'} my-[5px] transition-all ease-in duration-400 ${isMobileMenoOpen && 'rotate-45 translate-y-2'}`}></div>
                    <div className={`bar2 w-[25px] h-[3px] ${(isScrolled || isMobileMenoOpen) ? 'bg-slate-600' : 'bg-white'} my-[5px] transition-all ease-in duration-400 ${isMobileMenoOpen && 'bg-transparent'}`}></div>
                    <div className={`bar3 w-[25px] h-[3px] ${(isScrolled || isMobileMenoOpen) ? 'bg-slate-600' : 'bg-white'} my-[5px] transition-all ease-in duration-400 ${isMobileMenoOpen && '-rotate-45 -translate-y-2'}`}></div>
                </button>
            </div>

            {/* Desktop Navigations */}
            <ul className="max-md:hidden min-md:flex justify-center items-center gap-20 min-md:w-full min-lg:w-3/4 h-full">
                {navLinks.map((link) => (
                    <li key={link.name} className="font-semibold">
                        <Link href={link.path} className={!isScrolled && 'text-white'}>{link.name}</Link>
                    </li>
                ))}
            </ul>


            {/* Mobile Navigations */}
            <div className={`flex flex-col z-100 justify-around items-center pt-25 h-fit shadow-xl bg-white fixed bottom-full rounded-b-2xl left-0 w-full transition-all duration-600 ${isMobileMenoOpen && 'translate-y-full'}`}>
                <ul className="flex flex-col gap-2 text-center">
                    {navLinks.map((link) => (
                        <li key={link.path} className="font-semibold border-b border-slate-200 p-3 w-screen rounded-2xl">
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>


        </nav>
    )
}

export default Navbar;