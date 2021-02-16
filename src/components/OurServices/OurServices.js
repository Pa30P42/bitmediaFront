import React from "react";
import {
  BackgroundWrapper,
  Button,
  Input,
  Form,
  StyledLink,
  Text,
  FooterWrapper,
  InnerWrapper,
  ServiceDescription,
  ServiceTitle,
  Image,
  Services,
  ServiceItem,
  Wrapper,
  Title,
  TitleBold,
  Description,
} from "./OurServicesStyled";
import security from "../../assets/images/security.svg";
import clean from "../../assets/images/clean.svg";
import retina from "../../assets/images/retina.svg";

const OurServices = () => {
  return (
    <BackgroundWrapper>
      <Wrapper>
        <Title>
          Why <TitleBold>small business owners love</TitleBold> AppCo?
        </Title>
        <Description>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </Description>
        <Services>
          <ServiceItem>
            <Image src={clean} /> <ServiceTitle>Clean Design</ServiceTitle>
            <ServiceDescription>
              Increase sales by showing true dynamics of your website.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <Image src={security} /> <ServiceTitle>Secure Data</ServiceTitle>
            <ServiceDescription>
              Build your online store’s trust using Social Proof & Urgency.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <Image src={retina} /> <ServiceTitle>Retina Ready</ServiceTitle>
            <ServiceDescription>
              Realize importance of social proof in customer’s purchase
              decision.
            </ServiceDescription>
          </ServiceItem>
        </Services>
        <Form>
          <Input type="text" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </Form>
        <FooterWrapper>
          <InnerWrapper>
            <StyledLink to="/">AppCo</StyledLink>
            <Text>All rights reserved by ThemeTags</Text>
            <Text>CoTextyrights © 2019. </Text>
          </InnerWrapper>
        </FooterWrapper>
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default OurServices;
