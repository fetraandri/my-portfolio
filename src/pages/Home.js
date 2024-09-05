import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Home = () => {
  useEffect(() => {
    const aText = [
      "Je suis Fetra Tanjona, "
    ];
    const iSpeed = 100; 
    let iIndex = 0; 
    let iArrLength = aText[0].length; 
    const iScrollAt = 20; 

    let iTextPos = 0; 
    let sContents = ''; 
    let iRow; 

    function typewriter() {
      sContents = ' ';
      iRow = Math.max(0, iIndex - iScrollAt);
      const destination = document.getElementById("typedtext");
      
      while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
      }
      destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
      if (iTextPos++ === iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex !== aText.length) {
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 500);
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    }

    typewriter(); 
  }, []); 
  
  return (
    <div className="background-image d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center">
        <div id="typedtext" className="typewriter-text mb-4"></div>
        <p className="fade-in mb-4">Un développeur frontend passionné par la création d'interfaces utilisateur intuitives et esthétiques. Avec une expertise en React et une maîtrise des technologies web modernes, je transforme des concepts en expériences interactives captivantes. Mon objectif est de construire des applications fluides et réactives qui répondent aux besoins des utilisateurs.</p>
        <p className="zoom-text">Découvrez mon travail en parcourant les différentes sections.</p>
      </div>
    </div>
  );
};

export default Home;
