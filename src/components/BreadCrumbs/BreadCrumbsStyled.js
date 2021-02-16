import { Link } from "react-router-dom";
import styled from "styled-components";
import line from "../../assets/images/line.svg";

export const NavElem = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-right: 8px;

  color: #cccccc;
  ::after {
    display: inline-block;
    content: "";
    background-image: url(${line});
    height: 8px;
    width: 10px;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 8px;
  }
  :nth-last-child(1) {
    color: #3a80ba;
    ::after {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  width: 82vw;
  margin: 0 auto;
  margin-bottom: 18px;
`;
