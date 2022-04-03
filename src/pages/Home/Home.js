import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  React.useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      navigate("/products");
    }
  }, [navigate, userInfo]);
};

export default Home;
