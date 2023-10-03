import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

import logo from '../../../assets/vega-header.svg';
import logoMobile from "../../../assets/logo-mobile-VEGA.png";

import { FiUser } from "react-icons/fi";
import MenuListComposition from '../../Menu';

function Header() {
  const menuRef = useRef();
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [initialPosition, setinitialPosition] = useState(false);

  const filledRoutes = useMemo(() => {
    return (
      [
        '/grossweight',
        '/cuttingforce',
        '/benddingforce',
        '/energyconsumption',
        '/bendingforce',
        '/vme',
        '/riskprioritization',
        '/objectdetection',
        '/ppf',
        '/budget',
        '/forms',
        '/maintenance'
      ])
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }, []);

  const handlePath = useCallback(() => {
    const result = pathname.includes("visionsystem");

    setinitialPosition(result);
  }, [pathname])

  const handleClickOutside = useCallback((event) => {
    if (menuOpen && !menuRef.current.contains(event.target)) {
      toggleMenu();
    }
  }, [menuOpen, toggleMenu]);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 90;
    const href = window.location.href;
    const routeShow = filledRoutes.map(item => href.includes(item));

    if (routeShow.includes(true)) {
      setScroll(true);
    } else {
      setScroll(isScrolled);
    }

  }, [filledRoutes]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [pathname, handleScroll]);

  useEffect(() => {
    handlePath()
  }, [handlePath])

  return (
    <>
      <S.Overlay visible={menuOpen ? 1 : 0} onClick={toggleMenu} />
      <S.Container $initialposition={initialPosition} scroll={scroll ? 1 : 0}>

        <S.LeftSide>
          <a className='WebLogo' href="/">
            <img src={logo} alt="VegaRobotics" id="logo" />
          </a>

          <a className='MobileLogo' href="/">
            <img src={logoMobile} alt="VegaRobotics" id="logo" />
          </a>

          <div className="menuHamburguer">
            <MenuListComposition />
          </div>
        </S.LeftSide>


        <S.CenterSide menuopen={menuOpen ? 1 : 0} ref={menuRef}>
          <a href="/">Home</a>
          <Link to="/technology">Techonology</Link>
          <Link to="/engineering">Engineering</Link>
          <Link to="/algorithms">Algorithms</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/budget">Contact</Link>
          <Link to="/forms">Forms</Link>
          <S.CloseButton onClick={toggleMenu}>&times;</S.CloseButton>
        </S.CenterSide>

        <S.RightSide>
          {/* <a href="https://wa.me/+551151998949" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="whatapp" />
          </a> */}

          <Link to="/algorithms/visionsystem">
            <FiUser />
            <span>
              Get in
            </span>
          </Link>
        </S.RightSide>

      </S.Container>
    </>
  );
}

export default Header;
