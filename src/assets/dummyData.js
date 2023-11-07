import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import project1 from "./images/project-1.jpg";
import project2 from "./images/project-2.jpg";
import project3 from "./images/project-3.jpg";

const ProjectsListData = [
  {
    id: 1,
    ProjectName: "WOHNDESIGN",
    projectImage: [project1],
    url: "#",
  },
  {
    id: 1,
    ProjectName: "EDMA GMBH",
    projectImage: [project2],
    url: "#",
  },
  {
    id: 1,
    ProjectName: "SPOT-TEC IMMOBILIEN AG",
    projectImage: [project3],
    url: "#",
  },
];

const ServicesData = [
  {
    id: 1,
    CompanyName: "Ircon",
    img: [logo1]
  },
  {
    id: 2,
    CompanyName: "Topol",
    img: [logo2]
  },
  {
    id: 3,
    CompanyName: "Ministria",
    img: [logo3]
  }
  ,
  {
    id: 4,
    CompanyName: "CRDC",
    img: [logo4]
  }
];

const ClientsData = [
  {
    id: 1,
    CompanyName: "Ircon",
    img: [logo1],
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 2,
    CompanyName: "Topolwater",
    img: [logo2],
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 3,
    CompanyName: "Czech Republic",
    img: [logo4],
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 4,
    CompanyName: "Republika e Kosoves",
    img: [logo3],
    description: "Lorem ipsum dolor sit amet"
  },
];

export { ClientsData, ServicesData, ProjectsListData };
