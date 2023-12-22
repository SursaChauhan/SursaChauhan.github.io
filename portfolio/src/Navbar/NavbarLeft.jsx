import React from 'react';
import NavbarElement from './NavbarElement';
import styled from 'styled-components';

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarElementWrapper = styled.div`
  margin-right: 15px;
`;

const NavbarLeft = () => {
  return (
    <LeftContainer>
      <NavbarElementWrapper>
        <NavbarElement name="Your Name" />
      </NavbarElementWrapper>
    </LeftContainer>
  );
};

export default NavbarLeft;
