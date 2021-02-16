import React from "react";
import useTable from "./hooks/useTable";

import {
  TableWrapper,
  TableHeaderWrapper,
  TableHeaderTitle,
  Tr,
  Td,
  TrBody,
} from "./TableStyled";

const Table = ({ users }) => {
  const { userInfoHandler } = useTable();
  return (
    <TableWrapper>
      <TableHeaderWrapper>
        <Tr>
          <TableHeaderTitle>id</TableHeaderTitle>
          <TableHeaderTitle>First name</TableHeaderTitle>
          <TableHeaderTitle>Last name</TableHeaderTitle>
          <TableHeaderTitle>Email</TableHeaderTitle>
          <TableHeaderTitle>Gender</TableHeaderTitle>
          <TableHeaderTitle>IP address</TableHeaderTitle>
          <TableHeaderTitle>Total clicks</TableHeaderTitle>
          <TableHeaderTitle>Total page views</TableHeaderTitle>
        </Tr>
      </TableHeaderWrapper>
      <tbody>
        {users
          ? users.map((user) => {
              const {
                id,
                last_name,
                first_name,
                email,
                gender,
                ip_address,
                total_clicks,
                total_page_views,
              } = user;
              return (
                <TrBody onClick={userInfoHandler} id={id} key={id}>
                  <Td>{id}</Td>
                  <Td>{first_name}</Td>
                  <Td>{last_name}</Td>
                  <Td>{email}</Td>
                  <Td>{gender}</Td>
                  <Td>{ip_address}</Td>
                  <Td>{total_clicks}</Td>
                  <Td>{total_page_views}</Td>
                </TrBody>
              );
            })
          : "no data"}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
