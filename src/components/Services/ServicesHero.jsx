import React, {useState} from "react";
import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ServicesData } from "../../assets/dummyData";
import Modal from "../Modal/Modal";

const ServicesHeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    color: #db1e32;
    text-transform: uppercase;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: auto;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: ease-in-out 0.3s;
    &:hover {
      transform: translate();
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      transform: translateY(-4px);
    }
  }
`;

// task-1 /services 

const ServicesHero = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (data) => {
    setSelectedItem(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ServicesHeroWrapper>
      <Container style={{ maxWidth: "1300px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1> - Services -</h1>
          </Grid>
          {ServicesData.map((data, index) => (
            <Grid item xs={12} md={3} key={data.id}>
              <Item onClick={() => openModal(data)}>
                <p>{data.CompanyName}</p>
                <Link>
                  <img src={data.img} alt={data.id} />
                </Link>
              </Item>
              {(index + 1) % 4 === 0 && <div style={{ width: "100%" }}></div>}
            </Grid> 
          ))}
        </Grid>

        {/* task-2 /services  */}

         {isModalOpen && (
      <Modal
        title={selectedItem.CompanyName}
        image={selectedItem.img}
        closeModal={closeModal}
      />
    )}
      </Container>
      
    </ServicesHeroWrapper>
  );
};

export default ServicesHero;
