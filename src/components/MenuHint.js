import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HintContainer = styled.div`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: 2000;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  color: #333;
  display: ${(props) => (props.show ? "block" : "none")};
  transition: opacity 0.5s ease-out;
`;

function MenuHint({ top, left }) {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HintContainer top={top} left={left} show={showHint}>
      Cliquez ici pour ouvrir le menu
    </HintContainer>
  );
}

export default MenuHint;
