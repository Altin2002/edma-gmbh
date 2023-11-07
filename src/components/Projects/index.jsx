import React from "react";
import styled from "@emotion/styled";
import ProjectsList from "./Projects";
const ProjectWrapper = styled.div`
  padding-top: 70px;
`;

const index = () => {
  return (
    <ProjectWrapper>
      <ProjectsList />
    </ProjectWrapper>
  );
};

export default index;
