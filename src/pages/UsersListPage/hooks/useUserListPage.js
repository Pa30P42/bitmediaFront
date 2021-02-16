import { useEffect, useState } from "react";
import { getUsers } from "../../../api/api";

const useUserListPage = () => {
  const [users, setUsers] = useState([]);
  const [allPages, setAllPages] = useState(0);
  const [pages, setPages] = useState({ page: 1 });

  const handlePageClick = (e) => {
    setPages({ page: e.selected + 1 });
  };

  const breadCrumbs = [
    { title: "Main Page", to: "/" },
    {
      title: "Users Statistics",
      to: "/users",
    },
  ];

  useEffect(() => {
    getUsers(pages.page).then((res) => {
      setUsers(res.users);
      setAllPages(res.numberOfPage);
    });
  }, [pages.page]);

  return {
    breadCrumbs,
    users,
    allPages,
    handlePageClick,
  };
};

export default useUserListPage;
