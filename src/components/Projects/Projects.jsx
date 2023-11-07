import React,{useState} from "react";
import styled from "@emotion/styled";
import { Container, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ProjectsListData } from "../../assets/dummyData";

const ProjectsListWrapper = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    color: #db1e32;
    text-transform: uppercase;
  }
  p {
    color: #898989;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  a {
    text-decoration: none;
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
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    /* transform: translate(); */

    img {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      transform: translateY(-4px);
    }
  }
  img {
    width: 100%;
    height: auto;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: ease-in-out 0.3s;
  }
`;

const ProjectsList = () => {
  const [visibleItems, setVisibleItems] = useState(false);
  const backtoTop = () => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    setVisibleItems(true)
  };

  return (
    <ProjectsListWrapper>
      <Container style={{ maxWidth: "1300px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1> - Projects -</h1>
          </Grid>
          {ProjectsListData.map((data, index) => (
            <Grid item xs={12} md={4} key={data.id}>
              <Link to={data.ProjectName}>
                <Item>
                  <p>{data.ProjectName}</p>

                  <img src={data.projectImage} alt={data.ProjectName} />
                </Item>
                {(index + 1) % 4 === 0 && <div style={{ width: "100%" }}></div>}
              </Link>
            </Grid>
          ))}
          {
            visibleItems ? ProjectsListData.map((data, index) => (
              <Grid item xs={12} md={4} key={data.id}>
                <Link to={data.ProjectName}>
                  <Item>
                    <p>{data.ProjectName}</p>
  
                    <img src={data.projectImage} alt={data.ProjectName} />
                  </Item>
                  {(index + 1) % 4 === 0 && <div style={{ width: "100%" }}></div>}
                </Link>
              </Grid>
            )) :null
          }
          <Grid item xs={12} md={12}>
            <Button component={Link} to="#" onClick={() => backtoTop()}>
              Load More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ProjectsListWrapper>
  );
};

export default ProjectsList;