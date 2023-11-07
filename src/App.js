import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useContext } from 'react';
import Header from './components/Header/Header';
import Home from './pages/HomePage';
import Footer from './components/Footer';
import About from './pages/About';
import styled from "@emotion/styled";
import Architectur from './pages/Architectur';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Login from './pages/LoginPage';
// import { Context } from './Context/Products';

const AppWrapper = styled.div``;

function App() {

  // const [lang] = useContext(Context);

  return (
    <div className="App">
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/' element={<Home />}/>
            <Route path='/uber-uns' element={<About />} />
            <Route path='/architecture' element={<Architectur />} />
            <Route path='/services' element={<Services />} />
            <Route path='/kontakt' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
           
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppWrapper>
    </div>
  );
}

export default App;
