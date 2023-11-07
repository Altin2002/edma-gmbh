import React from "react";
import hero1 from "../../assets/images/hero1.jpg"
import hero2 from "../../assets/images/hero2.jpg"
import hero3 from "../../assets/images/hero3.jpg"
import hero4 from "../../assets/images/hero4.jpg"
import { Carousel } from 'antd';

const contentStyle = {
  width: '100%',
  height: '100vh',
  textAlign: 'center',
  background: '#364d79',
};

const Hero = () => {
  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  return (
    <Carousel autoplay >
      <div>
        <img src={hero1} alt="First Slide" style={contentStyle} />
      </div>
      <div>
        <img src={hero4} alt="Second Slide" style={contentStyle} />
      </div>
      <div>
        <img src={hero3} alt="Third Slide" style={contentStyle} />
      </div>
      <div>
        <img src={hero2} alt="Fourth Slide" style={contentStyle} />
      </div>
    </Carousel>
  );
};

export default Hero;