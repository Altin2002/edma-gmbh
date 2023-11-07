import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Location = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
    marginTop: "80px",
  };

  const defaultCenter = {
    lat: 42.66484983806095,
    lng: 21.162784409874877,
  };

  return (
    <>
      <Container style={{ maxWidth: 1300 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <LoadScript googleMapsApiKey="AIzaSyCZTYWpEwo7PXoOoQwKumwcmO5-yRhofXM">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
              >
              </GoogleMap>
            </LoadScript>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Location;
