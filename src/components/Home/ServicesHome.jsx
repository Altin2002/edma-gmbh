import React from "react";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import service1 from "../../assets/images/service-01.svg"; //svg for images
import service2 from "../../assets/images/service-02.svg";
import service3 from "../../assets/images/service-03.svg";
const ServicesHomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 120px;
  p {
    color: #898989;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  h1 {
    color: #db1e32;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    img {
      transform: translateY(-7px);
    }
  }
  img {
    transition: ease-in-out 0.4s;
    padding-bottom: 30px;
  }

  p {
    color: #898989;
    text-transform: none;
    letter-spacing: normal;
  }
  h1 {
    color: #db1e32;
  }
`;

// task-5 /home: use SVG for iamges

const ServicesHome = () => {
  return (
    <ServicesHomeWrapper>
      <Container style={{ maxWidth: "1300px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <div style={{ textAlign: "center" }}>
              <p>what we do</p>
              <h1>Our specilization</h1>
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Item>
              <img src={service1} alt="" />
              <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
              <p>
                We are keen to adapt our projects to the latest developments and
                using the high-end technology by always being focused in the
                clients requests, which we consider the key to success.
              </p>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <img src={service2} alt="" />
              <h3>HVAC ENGINEERING</h3>
              <p>
                Our range and technical expertise ensures we offer a convenient
                solution for the mechanical services industry that is the best
                in our region.
              </p>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            {" "}
            <Item>
              <img src={service3} alt="" />
              <h3>WWTP</h3>
              <p>
                Project Plus has a host of innovative solutions on offer, not to
                mention a wealth of knowledge and regional experience on
                completing turnkey projects for Waste Water Treatment Plants
              </p>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </ServicesHomeWrapper>
  );
};

export default ServicesHome;