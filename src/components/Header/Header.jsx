import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { IconButton,Menu,MenuItem } from "@mui/material";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import logo from "../../assets/images/logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { Context } from "../../Context/Products";
// import language from "../../lang";


const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 2px solid #fb9ba4;
  background-color: #ffffffe9;
  z-index: 999;
`;
const Language =styled.span`
  background-color:white;
  font-size:16px;
  padding:10px;
`
const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-icon {
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 13px;
    display: none;
    cursor: pointer;
    color: #db1e32;
    order: 3;
    svg {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 768px) {
      display: block;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      list-style: none;
      a {
        font-size: 16px;
        text-decoration: none;
        margin-left: 20px;
        color: #898989;
        transition: ease-in-out 0.2s;
        text-transform: uppercase;
        &.active,
        &:hover {
          color: #db1e32;
          font-weight: 500;
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: -15px;
      right: 0;
      background-color: #fff;
      z-index: 1;
      width: 100%;
      height: 100vh;
      li {
        text-align: center;
        margin: 10px 0;
      }
    }

    &.active {
      display: flex;
    }
  }

  img {
    height: 50px;
  }
`;

const Header = () => {
  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // const [lang, dispatch] = useContext(Context);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  //  const changeLang = () => {
  //   const setLang = lang === "de" ? "en" : "de";
  //   localStorage.setItem("lang", setLang);
  //   dispatch({
  //     type: "LANG",
  //     payland: { lang: setLang }
  //   })
  // }

  return (
    <HeaderWrapper>
      <Container>
        <HeaderItem>
          <NavLink to="/" onClick={() => backtoTop()}>
            <img src={logo} alt="logo" />
          </NavLink>

          <IconButton className="menu-icon" onClick={toggleMenu}>
            {menuVisible ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        
          <ul
            onClick={() => backtoTop()}
            className={`nav-links ${menuVisible ? "active" : ""}`}
          >
  

            <li>
              <NavLink onClick={toggleMenu} to="/">
                Heim
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleMenu} to="/uber-uns">
                ÜBER UNS
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleMenu} to="/architecture">
                Architecture
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleMenu} to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleMenu} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleMenu} to="/kontakt">
                kontakt
              </NavLink>
            </li>
            &nbsp;
            {/* dropdown menu for languages  */}
            <div>
            <IconButton onClick={handleLanguageClick}>
              <Language className="language">Language</Language><KeyboardArrowDownIcon/>
            </IconButton>
            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
            >
              <MenuItem onClick={handleLanguageClose}>English</MenuItem>
              <MenuItem onClick={handleLanguageClose}>Albanian</MenuItem>
            
            </Menu>
          </div>
          <li>
              <NavLink onClick={toggleMenu} to="/login">
                LOG IN
              </NavLink>
            </li>
          </ul>
        </HeaderItem>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;