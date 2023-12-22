import React, { useState, useEffect } from 'react';
import NavbarElement from './NavbarElement';
import ThemeButton from './ThemeButton';
import styled from 'styled-components';



const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarElementWrapper = styled.div`
  margin-right: 15px;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 1;
`;

const HamburgerLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${props => props.theme.navbarText};
  margin: 6px 0;
`;

const CloseIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${props => props.theme.navbarText};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);

  &::after {
    content: '';
    width: 30px;
    height: 3px;
    background-color: ${props => props.theme.navbarText};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;

const NavbarRight = ({ showMenu, toggleMenu, windowWidth }) => {
  const [isMobile, setIsMobile] = useState(windowWidth < 768);

  useEffect(() => {
    setIsMobile(windowWidth < 768);
  }, [windowWidth]);

  return (
    <RightContainer>
      {isMobile && (
        <HamburgerButton onClick={toggleMenu}>
          {showMenu ? <CloseIcon /> : <>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </>}
        </HamburgerButton>
      )}
      {!isMobile && (
        <>
          <NavbarElementWrapper>
            <NavbarElement name="Home" />
          </NavbarElementWrapper>
          <NavbarElementWrapper>
            <NavbarElement name="About" />
          </NavbarElementWrapper>
          <NavbarElementWrapper>
            <NavbarElement name="Project" />
          </NavbarElementWrapper>
          <NavbarElementWrapper>
            <NavbarElement name="Contact" />
          </NavbarElementWrapper>
          <NavbarElementWrapper>
            <ThemeButton />
          </NavbarElementWrapper>
        </>
      )}
      {showMenu && isMobile && (
        <div>
          <NavbarElement name="Home" />
          <NavbarElement name="About" />
          <NavbarElement name="Project" />
          <NavbarElement name="Contact" />
          <ThemeButton />
        </div>
      )}
    </RightContainer>
  );
};

export default NavbarRight;
