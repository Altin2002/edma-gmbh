import React from "react";
import styled from "@emotion/styled"
import Hero from "./Hero"


const ArchitectureWrapper = styled.div`
  padding-top: 70px;
`

const index = () => {
  return (
    <ArchitectureWrapper>
      <Hero />
    </ArchitectureWrapper>
  );
};

export default index;
