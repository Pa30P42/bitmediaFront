import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #ffffff;
`;

export const FooterWrapper = styled.footer`
  background: #1c3b55;
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
