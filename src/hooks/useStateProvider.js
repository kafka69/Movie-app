import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const useStateMovie = () => {
  const { state, setState } = useContext(MovieContext);
  const navigate = useNavigate();
  // login
  function login(username, password) {
    setState((prevState) => ({
      ...prevState,
      isLogin: true,
    }));
    // navigate("/home");
  }
  function logout(){
    setState((prevState) => ({
        ...prevState,
        isLogin: false,
      }));
    navigate("/");
  }
  return {
    isLogin: state.isLogin,
    login,
    logout,
  };
};

export default useStateMovie;
