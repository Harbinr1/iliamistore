import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Slider.scss";
import img1 from "../../../public/img/bluearmchair.jpg";
import img2 from "../../../public/img/graysofa.jpg";
import img3 from "../../../public/img/kitchen.jpg";


const Slider = () => {

  const [currentSlide,setCurrentSlide] = useState(0)


  const data = [img1, img2, img3];


    const prevSlide = () => {
          setCurrentSlide(currentSlide == 0 ? 2 : (prevSlide) => prevSlide - 1)
    }

    const nextSlide = () => {
            setCurrentSlide(currentSlide == 2 ? 0 : (prevSlide) => prevSlide + 1)
    }

  return (
    <div className="slider">
      <div className="paragraph">
        <h1>Realizo enderren tende</h1>
          <p>30% zbritje kete muaj.Mos e le me t ik</p>
      </div>
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]}/>
        <img src={data[1]}/>
        <img src={data[2]}/>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
