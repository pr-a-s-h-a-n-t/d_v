import { useNavigate } from "react-router-dom";

const doLogIn = (username) => {
  localStorage.setItem("username", username);
  localStorage.setItem("isLoggedIn", true);
};

const isLoggedIn = () => {
  return Boolean(localStorage.getItem("isLoggedIn"));
};

export default {
  doLogIn,
  isLoggedIn,
};
