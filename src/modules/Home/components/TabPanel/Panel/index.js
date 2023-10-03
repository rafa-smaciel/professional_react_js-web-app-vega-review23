import React, { useEffect, useState } from 'react';

//  import technologyImage from '../../../../../assets/techonology.jpg';
// import technologyImage from '../assets/VG422_2235483_41.png';
import Skeleton from '@mui/material/Skeleton';
import { FiArrowUpRight } from 'react-icons/fi';

import {
  Container,
  SideLeft,
  Subtitle,
  Description,
  CTAButton,
  Testimony,
  Person,
  Avatar,
  PersonInfo,
  Name,
  Occupation,
  SideRight,
} from './styles';
import { Link } from 'react-router-dom';
import SwipeableTextMobileStepper from '../../../../../components/Carousel';

export const Panel = ({ data, type }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [isAvatarLoaded, setAvatarLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    const avatar = new Image();

    image.src = data.image;
    avatar.src = data.avatar;

    image.onload = () => {
      setImageLoaded(true);
    };

    avatar.onload = () => {
      setAvatarLoaded(true);
    };
  }, [data.avatar, data.image]);

  return (
    <Container color={data.color} >
      <SideLeft>
        <Subtitle>
          {data.subtitle}
        </Subtitle>
        <Description>
          {data.description}
        </Description>
        <CTAButton color={data.color}>
          <Link to={data.url}>
            {data.ctaButtonText}
            <FiArrowUpRight />
          </Link>
        </CTAButton>

        <Testimony>
          {data.testimony}
        </Testimony>

        <Person>
          <Avatar color={data.color}>
            {isAvatarLoaded ?
              <img src={data.avatar} alt="avatar-person" />
              :

              <Skeleton variant="circular" sx={{
                bgcolor: 'grey.900',
                width: '50px',
                height: '50px'
              }} />
            }
          </Avatar>
          <PersonInfo>
            <Name>
              {data.name}
            </Name>
            <Occupation>
              {data.occupation}
            </Occupation>
          </PersonInfo>
        </Person>

      </SideLeft>

      <SideRight>
        {isImageLoaded ?
          type === 'tec' ?
            <SwipeableTextMobileStepper />
            :
            <img src={data.image} alt="imagem-tecnologia" />
          :
          <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.900' }} />
        }
      </SideRight>
    </Container>
  )
}

