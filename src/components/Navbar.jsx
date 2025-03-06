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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img
            src="/logo.webp"
            alt="Civil Contractor Logo - Best Civil Services"
            className="navbar-logo"
          />
          <h1>Civil Contractor</h1>
        </div>
        <div className="navbar-links">
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="navbar-link"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="navbar-link"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(galleryRef)}
            className="navbar-link"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="navbar-link"
          >
            Contact
          </button>
        </div>
        <button className="navbar-menu-icon" onClick={() => setIsOpen(true)}>
          <HiOutlineMenuAlt1 />
        </button>

        <div
          className={`navbar-drawer ${
            isOpen ? "drawer-open" : "drawer-closed"
          }`}
        >
          <div className="drawer-header">
            <div className="drawer-brand">
              <img
                src="/logo.webp"
                alt="civil service logo"
                className="drawer-logo"
              />
              <h1>Civil Contractor</h1>
            </div>
            <button className="drawer-close" onClick={() => setIsOpen(false)}>
              <IoClose />
            </button>
          </div>
          <div className="drawer-links">
            <Link onClick={() => setIsOpen(false)} className="drawer-link">
              Home
            </Link>
            <Link
              onClick={() => handleMenuItemClick(servicesRef)}
              className="drawer-link"
            >
              Services
            </Link>
            <Link
              onClick={() => handleMenuItemClick(aboutRef)}
              className="drawer-link"
            >
              About
            </Link>
            <Link
              className="drawer-link"
              onClick={() => handleMenuItemClick(galleryRef)}
            >
              Gallery
            </Link>
            <Link
              onClick={() => handleMenuItemClick(contactRef)}
              className="drawer-link"
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
