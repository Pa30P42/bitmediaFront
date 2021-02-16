import React from "react";
import { HeaderContainer, Wrapper, StyledLink } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <StyledLink to="/">AppCo</StyledLink>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
