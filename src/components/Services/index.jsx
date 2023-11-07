import React from "react";
import styled from "@emotion/styled";
import ServicesHero from "./ServicesHero";

const ServicesWrapper = styled.div`
  padding-top: 70px;
`;

const index = () => {
  return (
    <ServicesWrapper>
      <ServicesHero />
    </ServicesWrapper>
  );
};

export default index;
