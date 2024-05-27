import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setNav(false);
    }
  };

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: 'About',
      href: 'personalInfo'
    },
    {
      id: 2,
      name: 'Skills',
      href: 'skills'
    },
    {
      id: 3,
      name: 'Projects',
      href: 'projects'
    },
    {
      id: 4,
      name: 'Contact',
      href: 'contact'
    }
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 bg-black fixed px-7 z-50'>

      <div>
        <a href='#home' onClick={scrollToTop}>
          <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-myColorDarker4 via-myColor to-myColorDarker4'>MladenBajkić</h1>
        </a>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, name, href }) => (
          <li key={id} className='px-11 cursor-pointer font-medium text-myColorDarker1 hover:text-myColor' onClick={() => scrollToSection(href)}>{name}</li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-myColorDarker2 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-matBlack'>
          {links.map(({ id, name, href }) => (
            <li key={id} className='px-4 cursor-pointer py-6 text-4xl text-myColorDarker2 hover:text-myColor' onClick={() => scrollToSection(href)}>{name}</li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default Navbar;
