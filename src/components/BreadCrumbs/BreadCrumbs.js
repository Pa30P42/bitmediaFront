import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Wrapper, NavElem } from "./BreadCrumbsStyled";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <Wrapper>
      {breadCrumbs.length &&
        breadCrumbs.map((el) => (
          <NavElem to={el.to} key={el.title}>
            {el.title}
          </NavElem>
        ))}
    </Wrapper>
  );
};

export default BreadCrumbs;
