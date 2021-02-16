import { useHistory } from "react-router-dom";
const useTable = () => {
  const history = useHistory();
  const userInfoHandler = (e) => {
    history.push(`/users/${e.currentTarget.id}`);
  };

  return {
    userInfoHandler,
  };
};

export default useTable;
