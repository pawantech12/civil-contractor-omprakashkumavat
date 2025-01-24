import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = ({
  servicesRef,
  aboutRef,
  galleryRef,
  contactRef,
  scrollToSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuItemClick = (ref) => {
    setIsOpen(false);
    scrollToSection(ref);
  };
  return (
    <nav className="bg-gray-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center max-md:px-5">
        <div className="text-2xl font-semibold flex items-center gap-1">
          <figure>
            <img src="/logo.webp" alt="Civil Service Logo" className="w-12 " />
          </figure>
          <h1>Civil Contractor</h1>
        </div>
        <div className="space-x-8 text-lg max-md:hidden">
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="hover:underline underline-offset-4 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="hover:underline underline-offset-4 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(galleryRef)}
            className="hover:underline underline-offset-4 cursor-pointer"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="hover:underline underline-offset-4 cursor-pointer"
          >
            Contact
          </button>
        </div>
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <HiOutlineMenuAlt1 className="w-6 h-6" />
        </button>

        <div
          className={`w-80 h-full bg-gray-700 flex flex-col px-8 py-5 z-50 fixed top-0 right-0 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <figure>
                <img
                  src="/logo.webp"
                  alt="civil service logo"
                  className="w-12"
                />
              </figure>
              <h1 className="text-xl font-semibold">Civil Contractor</h1>
            </div>
            <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <IoClose className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4 mt-8">
            <Link
              onClick={() => setIsOpen(false)}
              className="block hover:underline underline-offset-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              onClick={() => handleMenuItemClick(servicesRef)}
              className="block hover:underline underline-offset-4 cursor-pointer"
            >
              Services
            </Link>
            <Link
              onClick={() => handleMenuItemClick(aboutRef)}
              className="block hover:underline underline-offset-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              className="block hover:underline underline-offset-4 cursor-pointer"
              onClick={() => handleMenuItemClick(galleryRef)}
            >
              Gallery
            </Link>
            <Link
              onClick={() => handleMenuItemClick(contactRef)}
              className="block hover:underline underline-offset-4 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
