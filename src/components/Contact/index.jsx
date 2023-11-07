import React from "react";
import styled from "@emotion/styled";
import Form from "./Form";
import Location from "./Location";

const ContactWrapper = styled.div`
  padding-top: 70px;
`;

const index = () => {
  return (
    <ContactWrapper>
      <Form />
      <Location />
    </ContactWrapper>
  );
};

export default index;
