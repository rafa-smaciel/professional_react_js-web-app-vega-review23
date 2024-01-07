import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  Container,
  Content,
  Title,
  SubTitle,
  CTAButton,
  WhatsApp
} from "./styles.js"

import whatsApp from "../../../../assets/whatsapp.svg";
import { FiArrowUpRight } from "react-icons/fi";
import planetImg from '../../assets/planet.png'

export const Welcome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCTAClick = () => {
    setScrollPosition(scrollPosition + 600);  // 20cm correspondem a aproximadamente 200 pixels
    scroll.scrollTo(scrollPosition, {
      duration: 1000,  // Define a duração da rolagem para 1000 milissegundos (1 segundo)
      smooth: "easeInOutQuint"  // Define o tipo de transição para uma função de aceleração suave
    });
  }

  return (
    <Container id="home">
      <Content imgprops={planetImg}>
        <Title>
          Engenharia Inteligente para uma Produção Eficiente
        </Title>

        <SubTitle>
        Na Vega Robotics, aplicamos visão computacional avançada e consultoria personalizada para otimizar a eficiência industrial. Nossas soluções inovadoras transformam operações, reduzem falhas e elevam sua empresa à vanguarda da indústria brasileira. Descubra um futuro mais produtivo e seguro conosco.
        </SubTitle>

        <CTAButton onClick={handleCTAClick}>
          Eu quero conhecer
          <FiArrowUpRight color="#fff" />
        </CTAButton>
      </Content>

      <WhatsApp href="https://wa.me/+5511950091919" target="_blank" rel="noreferrer">
        <img src={whatsApp} alt="logo-whatsapp" />
      </WhatsApp>
    </Container>
  )
}
