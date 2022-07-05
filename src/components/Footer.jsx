import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Footer = () => (
  <div className='flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div className='flex items-center justify-start'>
      <img src={Logo} alt='Logo Image' style={{ width: '70px' }} />
    </div>

    {/* menu */}
    <ul className='hidden md:flex'>
      <li>
        <Link to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to='about' smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to='skills' smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li>
        <Link to='work' smooth={true} duration={500}>
          Work
        </Link>
      </li>
      <li>
        <Link to='projects' smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link to='contact' smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </ul>

    <div className='flex items-center justify-around pr-3'>
      <a className='pr-3'><FaLinkedin size={20} /></a>
      <a className='pr-3'><FaGithub size={20} /></a>
      <a className='pr-3'><FaFacebook size={20} /></a>
    </div>

    {/* <div>
      <ul>
          <li className=''>
            <a
              className='flex items-center justify-between w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=''>
            <a
              className='flex items-center justify-between w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=''>
            <a
              className='flex items-center justify-between w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className=''>
            <a
              className='flex items-center justify-between w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>      
    </div> */}
    
  </div>
);

export default Footer;