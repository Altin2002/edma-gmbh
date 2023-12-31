import React, {useState} from "react";
import styled from "@emotion/styled";
import { Button, Grid, Container } from "@mui/material";
// import { Link } from "react-router-dom";
import image1 from "../../assets/images/project-1.jpg";
import image2 from "../../assets/images/project-2.jpg";
import image3 from "../../assets/images/project-3.jpg";
import ArchitectureModal from "../ArchitectureModal/ArchitectureModal";

const HeroWrapper = styled.div`
  h1 {
    color: #db1e32;
  }
  p {
    color: #898989;
  }

  .MuiButton-root {
    margin-bottom: 50px;
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
`;

const Hero = () => {

  //task-1 /architecture
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

   const projectData = 
    {
    name: "DIE ARCHITEKTUR",
    description: "Unsere Priorität ist es, die besten Einrichtungen und Gebäude für",
    images: [ 
      image1,
      image2,
      image3,
      image1
    ]
     }

  return (
    <HeroWrapper>
      <Container style={{ maxWidth: 1300 }}>
        <Grid container sapcing={2}>
          <Grid item xs={12} md={12}>
            <h1>- DIE ARCHITEKTUR -</h1>
            <p>
              Unsere Priorität ist es, die besten Einrichtungen und Gebäude für
              Wohnen, Arbeiten und Freizeit zu entwerfen. Wir entwickeln
              Projekte vom Konzeptentwurf bis zu den endgültigen Details,
              basierend auf den Anforderungen des Kunden und unter
              Berücksichtigung der Baukriterien und -bedingungen, mit dem
              alleinigen Ziel, die Kontinuität des Konzeptentwurfs und des
              Gebäudes mit hoher Qualität zu gewährleisten. Gutes Design, das
              auf der Wahrnehmung vor Ort basiert, ist der Schlüssel zu
              adäquatem und qualitativ hochwertigem Design. In diesem
              Tätigkeitsfeld plant unser professionelles Team aus erfahrenen
              Architekten, Statikern, Bauingenieuren und Detailplanern
              oberirdische Bauwerke, die mit einem hohen technischen Standard
              ausgestattet sind. Solche Projekte werden von uns in allen Phasen
              umfassend betreut. Mit Schweizer Standards für Gesundheits-,
              Bildungs-, Sport-, Verwaltungs-, Hotel- und Industriegebäude.
            </p>
            <Button onClick={() => openModal(projectData)}>
              View Projects
            </Button>
          </Grid>
          <Grid item xs={12} md={12}>
            <h1>- ENERGY EFFIENCY & RENEWABLE ENERGY -</h1>
            <p>
              Energy efficiency simply means using less energy to perform the
              same task – that is, eliminating energy waste. Energy efficiency
              brings a variety of benefits: reducing greenhouse gas emissions,
              reducing demand for energy imports, and lowering our costs on a
              household and economy-wide level. While renewable energy
              technologies also help accomplish these objectives, improving
              energy efficiency is the cheapest – and often the most immediate –
              way to reduce the use of fossil fuels. There are enormous
              opportunities for efficiency improvements in every sector of the
              economy, whether it is buildings, transportation, industry, or
              energy generation. Buildings are an important field for energy
              efficiency improvements around the world because of their role as
              a major energy consumer. However, the question of energy use in
              buildings is not straightforward as the indoor conditions that can
              be achieved with energy use vary a lot. The measures that keep
              buildings comfortable, lighting, heating, cooling and ventilation,
              all consume energy. Typically the level of energy efficiency in a
              building is measured by dividing energy consumed with the floor
              area of the building which is referred to as specific energy
              consumption (SEC) or energy use intensity (EUI).
            </p>
            <Button onClick={() => openModal(projectData)}>
              View Projects
            </Button>
          </Grid>
          <Grid item xs={12} md={12}>
            <h1>- WATER & INFRASTRUCTURE -</h1>
            <p>
              Infrastructure is the fundamental facilities and systems serving a
              country, city, or other area, including the services and
              facilities necessary for its economy to function. Infrastructure
              is composed of public and private physical improvements such as
              roads, railways, bridges, tunnels, water supply, sewers,
              electrical grids, and telecommunications (including Internet
              connectivity and broadband speeds). In general, it has also been
              defined as “the physical components of interrelated systems
              providing commodities and services essential to enable, sustain,
              or enhance societal living conditions”. There are two general
              types of ways to view infrastructure, hard or soft. Hard
              infrastructure refers to the physical networks necessary for the
              functioning of a modern industry. This includes roads, bridges,
              railways, etc. Soft infrastructure refers to all the institutions
              that maintain the economic, health, social, and cultural standards
              of a country. This includes educational programs, official
              statistics, parks and recreational facilities, law enforcement
              agencies, and emergency services. Infrastructure is the term for
              the basic physical systems of a business or nation—transportation,
              communication, sewage, water, and electric systems are all
              examples of infrastructure. These systems tend to be high-cost
              investments and are vital to a country’s economic development and
              prosperity. Projects related to infrastructure improvements may be
              funded publicly, privately, or through public-private
              partnerships. In economic terms infrastructure often involves the
              production of public goods or production processes that support
              natural monopolies.
            </p>
            <Button onClick={() => openModal(projectData)}>
              View Projects
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* task-1 /architecture  */}

      <ArchitectureModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />

    </HeroWrapper>
  );
};

export default Hero;
