import styled from "styled-components";

export const Td = styled.td`
  border: none;
`;

export const TrBody = styled.tr`
  text-align: center;
  height: 32px;
  background-color: #fbfbfb;
  :nth-child(odd) {
    background-color: #f1f1f1;
  }
`;

export const Tr = styled.tr`
  height: 48px;
  border-radius: 12px;
`;

export const TableWrapper = styled.table`
  margin: 0 auto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  width: 82vw;
  margin-bottom: 30px;
`;

export const TableHeaderTitle = styled.th`
  white-space: nowrap;
  border-right: 1px solid #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 14px 22px 14px 24px;

  :nth-last-of-type(1) {
    border-right: none;
  }
`;

export const TableHeaderWrapper = styled.thead`
  height: 48px;
  border-radius: 12px;
  background-color: #3a80ba;
`;
