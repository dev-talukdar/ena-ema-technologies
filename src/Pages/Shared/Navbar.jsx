import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiChevronDown } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import icon4 from "../../assets/icons/layers.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const logoContainer = <Link to="/" className='inline-flex items-center gap-2'>
    <p className='brandFont font-extrabold text-lg text-secondary'>Ena Ema Technologies</p>
  </Link>

  const navItems = <>
    <li><NavLink to="/" className={({ isActive }) => (isActive ? "navActive " : "navDefault ")}>Home</NavLink></li>

    <div className="dropdown dropdown-hover py-4 px-2 cursor-pointer font-bold text-slate-700 hover:text-primary hover:opacity-100 ml-2 lg:ml-0 z-50">
      <label tabIndex={0} className="inline-flex items-center gap-1">Services <HiChevronDown className='w-5 h-4 text-primary' /></label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-72 top-12 right-0 z-50">

        <li><NavLink to="/web-presence-solution-for-small-business" className={({ isActive }) => (isActive ? "navActive border-b inline-flex items-center gap-1" : "navDefault border-b inline-flex items-center gap-1")}> Web Presence Solution</NavLink></li>
        <li><NavLink to="/e-commerce-solution" className={({ isActive }) => (isActive ? "navActive border-b inline-flex items-center gap-1" : "navDefault border-b inline-flex items-center gap-1")}> E-commerce Solution</NavLink></li>
        <li><NavLink to="/advanced-web-application-solution-for-enterprise" className={({ isActive }) => (isActive ? "navActive border-b inline-flex items-center gap-1" : "navDefault border-b inline-flex items-center gap-1")}> Advanced Web Solution</NavLink></li>



      </ul>
    </div>


    <li><NavLink to="/about" className={({ isActive }) => (isActive ? "navActive " : "navDefault ")}>About Us</NavLink></li>
    <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "navActive " : "navDefault ")}>Blog</NavLink></li>

    <li><Link to="/signIn-koren" className='btn   text-white mt-2 btn-sm btn-ghost'> </Link></li>
  </>


  return (
    <section className='sticky top-0 z-50'>
      <div className="navbar bg-base-100 sticky top-0 border-b border-primary shadow">
        <Link to="/" className='navbar-start lg:hidden'>
          {logoContainer}
        </Link>
        <div className="navbar-end lg:navbar-start">
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {
                isOpen ? <MdClose className='text-4xl' /> : <GiHamburgerMenu className='text-4xl' />
              }
            </label>
            <ul className={`${isOpen ? "menu mt-6 z-[1] p-2 shadow-md bg-base-100 rounded w-60 h-72 absolute right-0 transition-all duration-200 lg:hidden" : "hidden"}`}>
              {navItems}
            </ul>
          </div>
          <Link to="/" className='hidden lg:flex'>
            {logoContainer}
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;