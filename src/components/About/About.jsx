import React from "react";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import logo from "../../assets/images/logo.png";

const AboutWrapper = styled.div`
  h1 {
    color: #db1e32;
  }
  p {
    color: #898989;
  }
  h2 {
    text-align: center;
    font-weight: 400;
  } 
  img {
    width: 100%;
    height: auto;
  }

  .item-text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    @media (max-width: 768px) {
      margin-top: 50px;

    }
  }
`;

const Item = styled.div`
  width: 100%;
  height: 200px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }

  h3 {
    padding-left: 17px;
    padding-right: 17px;
    color: #db1e32;
    font-size: 43px;
    font-weight: 500;
    content: "";
    width: 190px;
    margin-bottom: 30px;
    height: 190px;
    background: #f8f8f8;
    display: flex;
    align-items: center; 
    justify-content: center;
  }

  p {
    position: relative;
    color: #898989;
    top: -100px;
    display: flex;
    align-items: center; 
    justify-content: center;
    
  }
`;

// task-1 /uber-uns 

const DynamicNumberItem = ({ number, title }) => {
  return (
    <Item>
      <h3>{number}</h3>
      <p>{title}</p>
    </Item>
  );
};

const AboutUs = () => {
  const dynamicNumbers = [54, 32, 63, 84];

  return (
    <AboutWrapper>
      <Container
        style={{
          maxWidth: 1300,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1> - ÜBER UNS -</h1>
          </Grid>
          <Grid item xs={12} md={12}>
            <h2>
              {" "}
              Wir entwickeln Projekte von der Konzeption bis zu den letzten
              Details
            </h2>
          </Grid>

          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <img src={logo} alt="" />
          </Grid>

          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {dynamicNumbers.map((number, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <DynamicNumberItem
                    number={number}
                    title={
                      index === 0
                        ? `LANGJÄHRIGE`
                        : index === 1
                        ? "ZUFRIEDENE"
                        : index === 2
                        ? "FERTIGE"
                        : index === 3
                        ? "DESIGNPREISE"
                        : ""
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="item-text">
              <h3>EDMA GmbH</h3>
              <p>
                wurde im Jahr 2010 von einem Expertenteam des Maschinenbaus
                gegründet und hat über einen Zeitraum von mehr als einem
                Jahrzehnt mehr als 400 Projekte mit unterschiedlichem Fachwissen
                im Bereich Bauingenieurwesen und Beratung abgeschlossen. Im
                Laufe der Entwicklung zahlreicher Bauprojekte sowie der Planung
                und Umsetzung schlüsselfertiger Projekte haben wir ein tiefes
                Verständnis dafür gewonnen, wie wir die Effizienz optimieren und
                maximieren und gleichzeitig die Auswirkungen auf die Umwelt
                minimieren können.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </AboutWrapper>
  );
};

export default AboutUs;
