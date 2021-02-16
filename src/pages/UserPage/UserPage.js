import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Statistics from "../../components/Statistics/Statistics";
import useUserPage from "./hooks/useUserPage";

const UserPage = () => {
  const { breadCrumbs, userData, first_name, last_name } = useUserPage();
  return (
    <>
      <Header />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <Statistics
        active={userData.active && userData.active}
        first_name={first_name}
        last_name={last_name}
      />
      <Footer />
    </>
  );
};

export default UserPage;
