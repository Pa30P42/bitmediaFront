import axios from "axios";
axios.defaults.baseURL = `https://fast-spire-89109.herokuapp.com`;
// axios.defaults.baseURL = `http://localhost:80`;

export const getUsers = async (page) => {
  const res = await axios.get(`/users${page ? `?page=${page}` : ""}`);
  return res.data;
};

export const getUserByid = async (id) => {
  const res = await axios.get(`/users/user/${id}`);
  return res.data;
};
