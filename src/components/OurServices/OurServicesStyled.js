import styled from "styled-components";
import { Link } from "react-router-dom";
import bottom from "../../assets/images/bottom.svg";

export const BackgroundWrapper = styled.div`
  background: url(${bottom});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
`;

export const Button = styled.button`
  height: 64px;
  padding: 16px 48px;
  border: none;
  background: #3a80ba;
  border-radius: 8px;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  :hover {
    background-color: #ffffff;
    color: #3a80ba;
  }
`;

export const Input = styled.input`
  width: 404px;
  height: 64px;
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #b9b9b9;
`;

export const Form = styled.form`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: 2px solid #f1f1f1;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #ffffff;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  width: 82vw;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ServiceDescription = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #7e7e7e;
  width: 78%;
  margin: 0 auto;
`;

export const ServiceTitle = styled.h3`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #1a1a1a;
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 38px;
`;

export const Services = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 154px;
`;

export const ServiceItem = styled.li`
  width: 26.4vw;
  padding: 4.1% 2.72%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 32px;
`;

export const Wrapper = styled.div`
  width: 82vw;
  margin: 0 auto;
`;

export const Title = styled.h2`
  width: 30vw;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 14px;
`;

export const TitleBold = styled.span`
  font-weight: 700;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  width: 40vw;
  margin: 0 auto;
  color: #7e7e7e;
  margin-bottom: 36px;
`;
