import React from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormWrapper = styled.div`
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 2px solid #db1e32 !important;
  }
  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
    color: #898989 !important;
  }
  .MuiButton-root {
    padding: 12px 32px;
    border: 1px solid #db1e32;
    transition: ease-in-out 0.4s;
    background-color: #db1e32;
    color: #fff;
    &:hover {
      background-color: transparent;
      color: #db1e32;
    }
  }
  h1 {
    color: #db1e32;
    text-transform: uppercase;
  }
  p {
    color: #898989;
  }
  h2 {
    font-size: 50px;
    font-weight: 400;
  }
`;

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Invalid phone number")
        .required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <FormWrapper>
      <Container style={{ maxWidth: 1300 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1> - kontakt -</h1>
            <p>LASSEN SIE UNS MIT UNS ZUSAMMENARBEITEN</p>
            <h2>Gemeinsam können wir Träume wahr werden lassen</h2>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <h3> adresse:</h3>
                <p>Täfernstrasse 2a 5405 Dättwil</p>
              </Grid>
              <Grid item xs={12} md={12}>
                <h3>telefonnummer:</h3>
                <p>079 586 00 92</p>
                <p>044 593 54 11</p>
              </Grid>
              <Grid item xs={12} md={12}>
                <h3> email:</h3>
                <p>edma@gmx.ch</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    {...formik.getFieldProps("name")}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    {...formik.getFieldProps("email")}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    variant="outlined"
                    fullWidth
                    {...formik.getFieldProps("phoneNumber")}
                    error={
                      formik.touched.phoneNumber &&
                      Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Message"
                    name="message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    {...formik.getFieldProps("message")}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!formik.isValid}
                  >
                    Nachricht senden
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} md={2}></Grid>
        </Grid>
      </Container>
    </FormWrapper>
  );
};

export default Form;
