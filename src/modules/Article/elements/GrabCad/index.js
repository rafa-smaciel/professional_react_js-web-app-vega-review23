/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Slider from 'react-slick';

import { HelmetComponent } from '../../../../components/Helmet';

import * as S from './styles';
import image10 from '../../../../assets/10.svg'
import image11 from '../../../../assets/11.svg'
import image12 from '../../../../assets/12.svg'
// import image23 from '../../assets/23.svg'
import image14 from '../../../../assets/14.svg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const GrabCad = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0); // gerenciando o estado atual do slide

  const paragraphs = [
    <img src={image10} className="image1" alt="image10" width="40%" height="40%" />,
    <img src={image11} className="image1" alt="image11" width="40%" height="40%" />,
    <img src={image12} className="image1" alt="image12" width="40%" height="40%" />,
    // <img src= {image23} className="image1" alt="image1" width="40%" height="40%"/>, 
    <img src={image14} className="image1" alt="image13" width="40%" height="40%" />,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: currentSlide => setCurrentSlide(currentSlide),
    prevArrow: <S.Container prevArrow />, // adicionando a prop prevArrow para o componente container
    nextArrow: <S.Container nextArrow />, // adicionando a prop nextArrow para o componente container
  };

  return (
    <HelmetComponent element="GrabCad">
      <S.Container>
        <S.Wrapper>
          <h1>GRABCAD → O que? Para que serve?</h1>
          <Slider {...settings}>
            {paragraphs.map((paragraph, index) => (
              <div key={index}>
                <p>{paragraph}</p>
              </div>
            ))}
          </Slider>
        </S.Wrapper>

      </S.Container>
    </HelmetComponent>

  );
};
