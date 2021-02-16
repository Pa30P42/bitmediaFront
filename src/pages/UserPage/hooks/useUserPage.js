import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUserByid } from "../../../api/api";

const useUserPage = () => {
  const [userData, setUserData] = useState({
    userName: {
      first_name: "Default",
      last_name: "Default",
    },
  });

  const [id, setUserId] = useState();

  const {
    userName: { first_name, last_name },
  } = userData;

  const location = useLocation();
  useEffect(() => {
    const id = location.pathname.split("/")[2];
    setUserId(id);
    getUserByid(id).then((res) => {
      setUserData(res);
    });
  }, []);

  const breadCrumbs = [
    { title: "Main Page", to: "/" },
    {
      title: "Users Statistics",
      to: "/users",
    },
    {
      title: `${first_name} ${last_name}`,
      to: `users/${id}`,
    },
  ];

  return {
    breadCrumbs,
    userData,
    first_name,
    last_name,
  };
};

export default useUserPage;
