import styled from "styled-components";

export const DateChooseWrapper = styled.div`
  position: relative;
`;

export const DayPickerWrapper = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 30;
  left: 0;
`;

export const DateDescription = styled.p`
  font-size: 20px;
`;

export const ChosenDate = styled.span`
  padding-left: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  color: tomato;
`;

export const DateWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  width: 600px;
`;
