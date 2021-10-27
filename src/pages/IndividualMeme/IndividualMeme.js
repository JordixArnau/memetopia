import React from "react";

import MemeCard from "../../components/MemeCard";
import Navbar from "../../components/Navbar";
import "./style/individualmeme.css";

function IndividualMeme() {
  return (
    <>
      <Navbar />
      <div className="individual-meme-container">
        <MemeCard />
      </div>
    </>
  );
}

export default IndividualMeme;
