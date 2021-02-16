import React, { useState, useEffect } from "react";
import { getUsers } from "../../api/api";
import { Container, Title } from "./userListPageStyled";
import Table from "../../components/Table/Table";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Pagination from "../../components/Pagination/Pagination";
import useUserListPage from "./hooks/useUserListPage";

const UserListPage = () => {
  const { breadCrumbs, users, allPages, handlePageClick } = useUserListPage();

  return (
    <>
      <Header />
      <Container>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
        <Title>Users statistics</Title>
        <Table users={users} />
        <Pagination allPages={allPages} handlePageClick={handlePageClick} />
      </Container>
      <Footer />
    </>
  );
};

export default UserListPage;
