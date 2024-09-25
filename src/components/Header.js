import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border-radius: 100%;
  height: 64px; 
  width: 64px;  
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  display: flex;       
  align-items: center;  /* Centrer verticalement */
  justify-content: center; /* Centrer horizontalement */
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

const Icon = styled.span`
  display: inline-block;
  width: 50%; 
  height: 50%; 
  position: relative;
  margin: auto; 
  margin-top: 2rem; 

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 100%; 
    height: 3px;  
    position: absolute;
    left: 50%; 
    transform: translateX(-50%); 
    transition: all 0.3s;
  }

  &::before {
    top: 0; 
    transform: translateX(-50%) ${(props) => (props.clicked ? "rotate(45deg)" : "rotate(0)")};
  }

  &::after {
    top: 0;
    transform: translateX(-50%) ${(props) => (props.clicked ? "rotate(-45deg)" : "rotate(0)")};
  }
`;


function Header() {
  const [click, setClick] = useState(false);
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
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

  // Ajoute la gestion des événements tactiles
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
        <Icon clicked={click} />
      </MenuLabel>

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
