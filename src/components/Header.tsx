"use client";
import logo from "../assets/images/LOGO.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-white shadow-lg px-6 lg:px-20 fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-semibold text-gray-800">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="text-gray-700 hover:text-black">Home</Link></li>
          <li><Link to="/services" className="text-gray-700 hover:text-black mx-10">Service</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-black mr-10">About</Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-lg w-40">
            <li><Link to="/" className="text-gray-700 hover:text-black">Home</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-black">Service</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-black">About</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
