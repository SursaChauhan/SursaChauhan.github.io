import React, { useState, useEffect } from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.navbarBg};
  color: ${props => props.theme.navbarText};

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth >= 768) {
      setShowMenu(false); // Close the menu when resizing above 768 pixels
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth >= 768) {
        setShowMenu(false); // Close the menu when resizing above 768 pixels
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavbarContainer>
      <NavbarLeft />
      <NavbarRight showMenu={showMenu} toggleMenu={toggleMenu} windowWidth={windowWidth}  />
    </NavbarContainer>
  );
};

export default Navbar;
