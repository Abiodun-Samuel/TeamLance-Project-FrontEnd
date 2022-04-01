import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./Submenu";
import { IconContext } from "react-icons/lib";
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Nav = styled.div`
  background: #15171c;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1rem;
  height: 50px;
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 220px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      <IconContext.Provider value={{ color: "#632ce4" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <Nav>
              <NavIcon to="#">
                <p>Menu Items</p>
              </NavIcon>
            </Nav>
            {userInfo ? (
              <Nav>
                <NavIcon to="/products">
                  <p>Product</p>
                </NavIcon>
              </Nav>
            ) : (
              <Nav>
                <NavIcon to="/login">
                  <p>Home</p>
                </NavIcon>
              </Nav>
            )}
            {!userInfo && (
              <Nav>
                <NavIcon to="/login">
                  <p>Login</p>
                </NavIcon>
              </Nav>
            )}

            {userInfo && (
              <Nav>
                <NavIcon to="#" onClick={logoutHandler}>
                  <p>Logout</p>
                </NavIcon>
              </Nav>
            )}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
