import React from "react";
import logo from "../../logo.svg";
import styled from "styled-components";

const Logo = styled.img`
  max-width: 115px;
`;

const HeaderContainer = styled.div`
  padding: 25px 0px;
`;
export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
    </HeaderContainer>
  );
};
