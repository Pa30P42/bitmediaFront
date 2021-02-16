import top from "../../assets/images/top.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileImage = styled.img`
  height: 41vw;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  font-weight: 400;
`;
export const HWrapper = styled.div`
  width: 82vw;
  margin: 0 auto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  text-decoration: none;
`;

export const HeaderContainer = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const BackgroundWrapper = styled.div`
  background: url(${top});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 655px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 82vw;
  margin: 0 auto;
`;
export const ContentWrapper = styled.div`
  margin-right: 230px;
  width: 560px;
`;
export const Title = styled.h1`
  padding-top: 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  color: #ffffff;
  margin-bottom: 14px;
`;
export const TitleBold = styled.span`
  font-weight: bold;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 142%;
  margin-bottom: 32px;
  color: #ffffff;
`;
export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 154px;
  height: 56px;
  background: #ffffff;
  border-radius: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #3a80ba;
  :hover {
    background-color: #3a80ba;
    color: #ffffff;
  }
`;
