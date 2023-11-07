import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import AboutImage from "../../assets/images/about-01.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HAboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
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
  }
  p {
    color: #898989;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const BackgroundItem = styled.div`
  background: url(${AboutImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top: 80px;
  }
  .line-top-left {
    position: relative;
    left: -80px;
    top: 50px;
    width: 30%;
    height: 50%;
    border-left: 1px solid white;
    border-top: 1px solid white;
    @media (max-width: 1000px) {
      left: -50px;
      top: 150px;
    }
    @media (max-width: 900px) {
      border: none;
    }
  }
  .line-bottom-right {
    position: relative;
    bottom: 50px;
    right: -80px;
    width: 30%;
    height: 50%;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    @media (max-width: 1000px) {
      bottom: 150px;
      right: -80px;
    }
    @media (max-width: 900px) {
      border: none;
    }
  }
  b {
    font-size: 150px;
  }
  p {
    color: #fff;
  }
`;

const AboutHome = () => {
  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <HAboutWrapper>
      <Container style={{ maxWidth: "1300px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <h1>- ÜBER UNS</h1>
            <h3>
              EDMA ist ein Beratungs- und Bauingenieurunternehmen, das auf die
              Planung, Überwachung und den Bau öffentlicher und privater
              Projekte spezialisiert ist.
            </h3>
            <p>
              Es wurde im Jahr 2010 von einem Team von Ingenieurexperten
              gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt
              mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich
              Bauingenieurwesen und Beratung abgeschlossen. Wir sind bestrebt,
              unsere Projekte an die neuesten Entwicklungen anzupassen und die
              Spitzentechnologie zu nutzen, wobei wir uns stets auf die Wünsche
              des Kunden konzentrieren, die wir als Schlüssel zum Erfolg
              betrachten. Unser Ziel ist es, unsere Projekte mit hoher Qualität,
              Funktionalität, Ästhetik und Gebrauchstauglichkeit zu entwickeln,
              indem wir Ideen und Ratschläge dazu liefern, wie der Raum aussehen
              wird, in dem Sie leben, arbeiten oder entspannen
            </p>
            <Button component={Link} to="/uber-uns" onClick={() => backtoTop()}>
              mehr ...
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <BackgroundItem>
              <span className="line-top-left"></span>
              <b>15</b>
              <p>YEARS OF EXPERIENCE</p>
              <span className="line-bottom-right"></span>
            </BackgroundItem>
          </Grid>
        </Grid>
      </Container>
    </HAboutWrapper>
  );
};

export default AboutHome;
