import React, { useState, useMemo } from 'react';

import avatarImage2 from '../../assets/diretorindustrial.png';
import avatarImage3 from '../../assets/coordenadorengenharia.png';
import technologyImage from './assets/VG422_2235483_41.png';
import technologyImage2 from './assets/1OP_FERR_TANDEM_207-46-b1a10_207-46-b1a20_2.png';

import {
  Container,
  Content,
  Wrapper,
  Tab,
  Switch
} from './styles';
import { Panel } from './Panel';
import { FadeInScroll } from '../../../../utils/fadeInScroll';

export const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index)
  }

  const tabView = useMemo(() => {
    return (
      [
        {
          title: "Engenharia",
          subtitle: "Serviços de engenharia Industrial",
          description: "Você vai encontrar projetos de ponta feitos sob demanda utilizando as ferramentas mais modernas do mercado.",
          ctaButtonText: "Quero conhecer",
          testimony: '"A VegaRobotics trás soluçòes simplesmente incríveis, muito prático, além do pronto atendimento, transparencia e cordialidade na execução dos projetos."',
          avatar: avatarImage2,
          name: "Carlos Roberto S.",
          occupation: "Diretor Industrial",
          color: "#891A14",
          url: "/engineering",
          image: technologyImage
        },
        {
          title: "Tecnologia",
          subtitle: "Serviços de Tecnologia",
          description: "As melhores tecnologias alinhadas com sua necessidade. Aqui você encontra soluções adequadas com preços competitivos.",
          ctaButtonText: "Saiba Como",
          testimony: '"A Vega Robotics transformou nossos processos com suas soluções de automação, aumentando a eficiência e reduzindo custos. Sua equipe é experiente e inovadora. Recomendo fortemente para quem busca otimização na indústria."',
          avatar: avatarImage3,
          name: "Felipe Martins",
          occupation: "Coordenador de Engenharia",
          color: "#4863f7",
          url: "/maintenance",
          image: technologyImage2
        }
      ]
    )
  }, []);

  return (
    <Container>
      <FadeInScroll
        id="Content-Panel"
        sx={{ txi: '-50px', tyi: '0px' }}
      >
        <Content>
          <Tab activetab={activeTab} color={tabView[activeTab].color}>
            <Switch id="engineering" aria-selected={activeTab === 0 ? true : false} onClick={() => handleTabChange(0)}><span>⚙️</span>{tabView[0].title}</Switch>
            <Switch id="Technology" aria-selected={activeTab === 1 ? true : false} onClick={() => handleTabChange(1)}><span>💻</span>{tabView[1].title}</Switch>
          </Tab>

          <Wrapper activetab={activeTab}>
            {activeTab === 0 &&
              <Panel
                data={tabView[activeTab]}
              />
            }
            {activeTab === 1 &&
              <Panel
                type={'tec'}
                data={tabView[activeTab]}
              />
            }
          </Wrapper>
        </Content>
      </FadeInScroll>
      <hr />
    </Container>
  )
}

