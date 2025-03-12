import React, { useState } from 'react';
import TitleLogoSVG from '../../SVG/TitleLogoSVG';
import '../../styles/Navbar.scss';
import HamburgSVG from '../../SVG/HamburgSVG';

const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='navbar-container'>
      <span>
        <TitleLogoSVG className='navbar-logo' />
        <h3>Task Box</h3>
      </span>
      <span>
        <HamburgSVG isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* <nav>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href=''>Profile</a></li>
        </nav> */}
      </span>
    </header>
  );
}

export default Navbar;
