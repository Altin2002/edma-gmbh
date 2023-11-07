import React from "react";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import service1 from "../../assets/images/service-01.svg";
import service2 from "../../assets/images/service-02.svg";
import service3 from "../../assets/images/service-03.svg";

const WeWorkWithWrapper = styled.div`
  text-align: center;
  padding-top: 80px;
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
  img {
    transition: ease-in-out 0.4s;
  }
  &:hover {
    img {
      transform: translateY(-7px);
    }
  }
  h3 {
    color: #db1e32;
    text-transform: uppercase;
  }
  p {
    color: #898989;
    text-transform: none;
    letter-spacing: normal;
    text-align: left;
  }
`;

const WeWorkWith = () => {
  return (
    <WeWorkWithWrapper>
      <Container
        style={{
          maxWidth: 1300,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <p>WAS WIR TUN</p>
            <h1>Ihre Spezialisierung</h1>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <img src={service1} alt="" />
              <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
              <p>
                Unsere Hauptaufgabe besteht darin, unsere Projekte nachhaltiger,
                ästhetisch ansprechender und komfortabler für die Gemeinschaft
                zu machen. Außerdem versuchen wir, Einrichtungen zu entwerfen,
                die Lebensbedingungen, Arbeitsplätze und verschiedene
                Aktivitäten bieten, angemessen und wirtschaftlich sind und sich
                in die Umgebung einfügen.
              </p>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <img src={service2} alt="" />
              <h3>HVAC ENGINEERING</h3>
              <p>
                EDMA ist ein Designstudio, das sich auf Design, Konstruktion und
                Überwachung spezialisiert hat. Die Tätigkeit als Designstudio
                begann im Jahr 2010 und realisiert seit über einem Jahrzehnt
                viele Projekte mit unterschiedlichem Charakter im Bereich Bau
                und Design. Als Unternehmen sind wir bestrebt, unsere Projekte
                an die neuesten Entwicklungen im Bereich Architektur und
                Materialien der Zeit anzupassen, immer basierend auf den
                Kundenanforderungen, die für den Erfolg entscheidend sind. Wir
                bieten Ideen und Tipps, wie es dort aussehen könnte, wo Sie
                leben, arbeiten oder sich ausruhen. Unser Ziel ist es, unsere
                Projekte qualitativ hochwertig, funktional, ästhetisch und
                praktisch zu gestalten. Wir bieten Dienstleistungen für
                verschiedene Arten von Bau und Design an. Mit qualifiziertem
                Personal und Professionalität bei der Bereitstellung von
                Dienstleistungen im Bereich der Gestaltung individueller und
                kollektiver Wohnanlagen, Verwaltungseinrichtungen,
                Abwasseraufbereitungsanlagen, Straßen- und öffentliche
                Infrastrukturentwässerung, Kanalisation, Wasserversorgungs- und
                Entwässerungskanäle, Gastronomieeinrichtungen usw. Wir bieten
                Ihnen Qualität, Genauigkeit und Verantwortung für unsere
                Projekte. Jede Ihrer Anfragen ist eine Pflicht für uns, und jede
                Pflicht für uns ist eine Verpflichtung.
              </p>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            {" "}
            <Item>
              <img src={service3} alt="" />
              <h3>WWTP</h3>
              <p>
                Unsere Vision für die Zukunft ist, dass Architektur- und
                Bauprojekte so wirtschaftlich und ökologisch wie möglich sind.
                In einer vom Prinzip der Ökologisierung dominierten Umwelt, in
                der das soziale Wohlergehen der Menschen an erster Stelle steht
                und in der Objekte mit der Umwelt und den Entwicklungen der Zeit
                übereinstimmen, sind sie zweifellos eine Quelle des Wohlergehens
                und des sozialen und sozialen Lebens.
              </p>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </WeWorkWithWrapper>
  );
};

export default WeWorkWith;
