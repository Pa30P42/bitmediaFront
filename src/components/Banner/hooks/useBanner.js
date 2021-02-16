import { useHistory } from "react-router-dom";

const useBanner = () => {
  const history = useHistory();
  const viewStatsFn = () => {
    history.push("/users");
  };

  return { viewStatsFn };
};

export default useBanner;
