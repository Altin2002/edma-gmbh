import React from "react";
import AboutUs from "./About";
import WorkWith from "./WeworkWith";
import styled from "@emotion/styled";

const AboutIndexWrapper = styled.div`
  padding-top: 70px;
`;

const index = () => {
  return (
    <AboutIndexWrapper>
      <AboutUs />
      <WorkWith />
    </AboutIndexWrapper>
  );
};

export default index;
