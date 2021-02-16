import React from "react";
import { FooterWrapper, InnerWrapper, StyledLink, Text } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <StyledLink to="/">AppCo</StyledLink>
        <Text>All rights reserved by ThemeTags</Text>
        <Text>CoTextyrights © 2019. </Text>
      </InnerWrapper>
    </FooterWrapper>
  );
};

export default Footer;
