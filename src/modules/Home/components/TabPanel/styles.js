import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  /* height: 90vh; */

  position: relative;

  display: flex;
  align-items: center;  
  flex-direction: column;

  background-image: linear-gradient(180deg, #0C0D0F, transparent);

  padding-top: 70px;

  hr {
    bottom: 0;
    height: 1px;
    width: 100%;
    border: none;
    position: absolute;
    background: radial-gradient(#3D3D40 10%, var(--color-background));
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: calc(1150px + 9rem);
  
  margin-bottom: 23rem;
  padding: 0rem 9rem;

  @media only screen and (max-width: 590px){
    padding: 0rem 3rem;
  }

  @media only screen and (min-width: 1900px){
    max-width: calc(1450px + 9rem);
  }
`;

export const Tab = styled.ul`
  display: flex;
  align-items: center;

  margin: 0px 24px;
  
  position: relative;

  height: 70px;

  border-bottom: 2px solid #3D3D40;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 3px;
    border-radius: 2px;
    transition: all .3s ease-in-out;

    ${props => props.activetab === 0
    ? css`
          transform: translate(0px, 2.5px);
          left: 0;
          width: 149px;
          background: ${props => props.color};
        `
    : props.activetab === 1
      ? css`
            transform: translate(200px, 2.5px);
            left: 0;
            width: 150px;
            background: ${props => props.color};

          `
      : css`
            transform: translate(400px, 2.5px);
            left: 0;
            width: 123px;
            background: ${props => props.color};
          `
  }
  
  @media only screen and (max-width: 590px){
    ${props => props.activetab === 0
    ? css`
          transform: translate(0px, 2.5px);
          left: 0;
          width: 122px;
          background: ${props => props.color};
        `
    : props.activetab === 1
      ? css`
            transform: translate(143px, 2.5px);
            left: 0;
            width: 121px;
            background: ${props => props.color};
          `
      : css`
            transform: translate(400px, 2.5px);
            left: 0;
            width: 123px;
            background: ${props => props.color};
          `
  }
  }
  }
`;

export const Switch = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  height: 100%;

  font-size: 23px;
  line-height: 36px;
  font-weight: 600;
  color: var(--color-white);

  list-style: none;

  & + li {
    margin-left: 40px;
    padding-left: 10px;
  }

  span {
    padding-right: 10px;
  }

  transform: translateY(3px);
  
  filter: brightness(.8);
  cursor: pointer;
  
  transition: all 0.3s ease;

  &:hover{
    filter: brightness(1);
  }

  @media only screen and (max-width: 590px){
    font-size: 1.8rem;

    & + li {
      margin-left: 2rem;
      padding-left: 0.5rem;
    }
  }

  @media only screen and (min-width: 1900px){
    font-size: 3.5rem;

    & + li {
      font-size: 3.5rem;
      margin-left: 6rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0px 24px;
  overflow: hidden;
`;
