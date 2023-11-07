import React, {useState} from "react";
import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { ClientsData } from "../../assets/dummyData";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
const ClientsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 120px;
  text-align: center;
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

const Clients = () => {
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
    <ClientsWrapper>
      <Container style={{ maxWidth: "1300px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <p>awesome partners</p>
            <h1>Our Clients</h1>
          </Grid>
          {ClientsData.map((data, index) => (
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

        {/* task 6 /home */}
        {isModalOpen && (
        <Modal
        title={selectedItem.CompanyName}
        image={selectedItem.img}
        description={selectedItem.description}
        closeModal={closeModal}
        />
      )}
    
      </Container>
    </ClientsWrapper>
  );
};

export default Clients;
