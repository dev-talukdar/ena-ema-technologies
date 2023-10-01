import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/EnaEma.png"
import { FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='mt-14'>
      <footer className="footer p-10 bg-primary bg-opacity-10 text-base-content">
        <aside className='mt-10'>
          <Link to="/" className='inline-flex items-center gap-2'> 
            <p className='brandFont font-extrabold text-secondary'>Ena Ema Technologies</p>
          </Link>

          <div className='inline-flex items-center gap-3'>
            <Link target='_blank' href="https://www.facebook.com/profile.php?id=100063832562207">
              <FaFacebook className='h-8 w-8 hover:text-secondary scale-100 hover:scale-110 hover:ease-in duration-500 ... ' />
            </Link>
            <Link href='https://www.linkedin.com/company/ena-ema-technologies/about/' target='_blank'>
              <FaLinkedin className='h-8 w-8 hover:text-secondary scale-100 hover:scale-110 hover:ease-in duration-500 ... ' />
            </Link>

          </div>
        </aside>
        <nav className='font-semibold '>
          <header className="footer-title">Services</header>

          <Link to="/e-commerce-solution" className='hover:text-primary'>E-commerce Solution</Link>

          <Link to="/web-presence-solution-for-small-business" className='hover:text-primary'>Web Presence  Solution</Link>

          <Link to="/advanced-web-application-solution-for-enterprise" className='hover:text-primary'>Advanced Web Application Solution</Link>



        </nav>
        <nav className='font-semibold '>
          <header className="footer-title" >Company</header>

          <Link to="/blog" className='hover:text-primary'>Blog</Link>
          <Link to="/career" className='hover:text-primary'>Career</Link>
          <Link to="/product" className='hover:text-primary'>Product</Link>
          <Link to="/about" className='hover:text-primary'>About us</Link>
        </nav>
        <nav className='font-semibold '>
          <header className="footer-title">Contact Us</header>
          <div className='flex items-center justify-center gap-2'>
            <p><MdOutlineMail></MdOutlineMail></p>
            <Link href="mailto:support@enaema.com"> support@enaema.com</Link>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <p><FaPhoneAlt></FaPhoneAlt></p>
            <Link href="tel:+880 1926 080 600">+880 1926 080 600</Link>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <p className='text-xl'><MdLocationOn></MdLocationOn></p>
            <Link href="https://goo.gl/maps/XyPpcDWnUDgwBxtD9" target='_blank'>
              Amin Model Town, East Dendabor, <br /> Savar Cantonment, Dhaka - 1344
            </Link>
          </div>

        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-primary bg-opacity-10 text-base-content border-t border-primary">
        <aside>
          <p className='text-sm '>Copyright © 2023 - All right reserved by Ena Ema Technologies</p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;