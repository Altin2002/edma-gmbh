import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";

const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 2px solid #fb9ba4;
  margin-top: 120px;
  img {
    width: 100%;
    height: auto;
    @media (max-width: 768px) {
      padding-top: 50px;
    }
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  @media (max-width: 768px) {
    padding: 0px;
  }
  ul {
    li {
      list-style: none;
      color: #898989;
      padding-bottom: 10px;
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: #898989;
        transition: ease-in-out 0.2s;
        &:hover {
          color: #db1e32;
          font-weight: 500;
        }
      }
    }
  }
`;

const SocialmediaWrapper = styled.div`
  border-top: 2px solid #fb9ba4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    text-align: center;
    display: block;
    align-items: center;
    justify-content: center;
  }

  .MuiIconButton-root {
    transition: ease-in-out 0.3s;
    &:hover {
      color: #db1e32;
      transform: translateY(-4px);
    }
  }
  svg {
    width: 25px;
    height: 25px;
    transition: ease-in-out 0.3s;
  }

  p {
    display: flex;
    align-items: center;
    text-align: center;
    @media (max-width: 768px) {
      text-align: center;
      justify-content: center;
    }
    span {
      padding-left: 5px;
      color: #db1e32;
    }
  }
`;

const Footer = () => {
  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <Container style={{ maxWidth: "1300px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Item>
              <Link to="/" onClick={() => backtoTop()}>
                <img src={logo} alt="logo" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <h2>Links</h2>
              <ul onClick={() => backtoTop()}>
                <li>
                  <Link to="/"># Home</Link>
                </li>
                <li>
                  <Link to="/uber-uns"># ÜBER UNS</Link>
                </li>
                <li>
                  <Link to="/architecture"># architecture</Link>
                </li>
                <li>
                  <Link to="/services"># Services</Link>
                </li>

                <li>
                  <Link to="/projects"># Projects</Link>
                </li>
                <li>
                  <Link to="/kontakt"># kontakt</Link>
                </li>
              </ul>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <h2>Info</h2>
              <ul>
                <li>
                  # Adresse : <br />{" "}
                  <Link to="/contact"> Täfernstrasse 2a 5405 Dättwil </Link>
                </li>
                <li>
                  # Tel : <br />
                  <a href="tel:079 586 00 92">079 586 00 92</a>
                </li>
                <li>
                  # Tel : <br /> <a href="tel:044 593 54 11">044 593 54 11</a>
                </li>
                <li>
                  # Email : <br /> <a href="mailto:edma@gmx.ch">edma@gmx.ch </a>
                </li>
              </ul>
            </Item>
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <SocialmediaWrapper>
            <Container
              style={{
                maxWidth: "1300px",
              }}
            >
              <SocialItem>
                <p>
                  Copyright © 2023 |{" "}
                  <span>
                    <p>EDMA</p>
                  </span>
                </p>
                <div className="icons-wrapper">
                  <IconButton
                    component={Link}
                    target="_blank"
                    to="https://www.facebook.com/"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    component={Link}
                    target="_blank"
                    to="https://www.instagram.com/"
                  >
                    <InstagramIcon />
                  </IconButton>
                </div>
              </SocialItem>
            </Container>
          </SocialmediaWrapper>
        </Grid>
      </Grid>
    </FooterWrapper>
  );
};

export default Footer;
