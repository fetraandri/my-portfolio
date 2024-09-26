import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; 

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const pulse = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Animation pour le texte
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border-radius: 50%;
  height: 64px;
  width: 64px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;  // Adjust size for icon
  color: ${COLORS.primaryDark};
`;

const Arrow = styled.div`
  position: fixed;
  top: ${(props) => props.top - 70}px;
  left: ${(props) => props.left + 20}px;
  font-size: 2rem;
  color: ${COLORS.primaryLight};
  animation: ${pulse} 1.5s infinite;
  z-index: 999;
`;

const InfoText = styled.div`
  position: fixed;
  top: ${(props) => props.top - 40}px;
  left: ${(props) => props.left + 80}px;
  color: ${COLORS.primaryLight};
  font-size: 1.2rem;
  animation: ${fadeInOut} 6s ease-in-out;
  animation-fill-mode: forwards;
  z-index: 998;
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s ease, opacity 0.8s ease;
  background-color: rgba(29, 41, 80, 0.9);
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function Header() {
  const [click, setClick] = useState(false);
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [showArrow, setShowArrow] = useState(true);
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
    setShowArrow(false);
    setShowText(false);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    const startX = event.clientX - position.left;
    const startY = event.clientY - position.top;

    const handleMouseMove = (moveEvent) => {
      const newLeft = Math.max(0, Math.min(window.innerWidth - 50, moveEvent.clientX - startX));
      const newTop = Math.max(0, Math.min(window.innerHeight - 50, moveEvent.clientY - startY));
      setPosition({ left: newLeft, top: newTop });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    const startX = touch.clientX - position.left;
    const startY = touch.clientY - position.top;

    const handleTouchMove = (moveEvent) => {
      const touchMove = moveEvent.touches[0];
      const newLeft = Math.max(0, Math.min(window.innerWidth - 50, touchMove.clientX - startX));
      const newTop = Math.max(0, Math.min(window.innerHeight - 50, touchMove.clientY - startY));
      setPosition({ left: newLeft, top: newTop });
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <header>
      <MenuLabel
        top={position.top}
        left={position.left}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleClick}
      >
        {}
        <FontAwesomeIcon icon={click ? faTimes : faBars} />
      </MenuLabel>

      {showArrow && <Arrow top={position.top} left={position.left}>⬇</Arrow>}

      {showText && (
        <InfoText top={position.top} left={position.left}>
          Cliquez ici pour ouvrir le menu
        </InfoText>
      )}

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Accueil
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              À propos
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/portfolio">
              Portfolio
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/contact">
              Contact
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </header>
  );
}

export default Header;
