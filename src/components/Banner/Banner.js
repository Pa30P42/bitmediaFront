import React from "react";
import { useHistory } from "react-router-dom";

import phone from "../../assets/images/mobile.svg";
import {
  BackgroundWrapper,
  HeaderContainer,
  StyledLink,
  HWrapper,
  Wrapper,
  ContentWrapper,
  Title,
  TitleBold,
  Button,
  Description,
  MobileImage,
} from "./BannerStyled";
import useBanner from "./hooks/useBanner";

const Banner = () => {
  const { viewStatsFn } = useBanner();
  return (
    <BackgroundWrapper>
      <HeaderContainer>
        <HWrapper>
          <StyledLink to="/">AppCo</StyledLink>
        </HWrapper>
      </HeaderContainer>
      <Wrapper>
        <ContentWrapper>
          <Title>
            <TitleBold>Brainstorming </TitleBold>
            for desired perfect Usability
          </Title>
          <Description>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </Description>
          <Button onClick={viewStatsFn}>View Stats</Button>
        </ContentWrapper>
        <MobileImage width="365" height="583" alt="mobile" src={phone} />
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default Banner;
