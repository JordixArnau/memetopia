import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./style/memecard.css";
import { individualMeme } from "../../api/api";

function MemeCard() {
  const location = useLocation();

  const [memeData, setMemeData] = useState({});

  useEffect(() => {
    getMemeData();
  }, []);

  async function getMemeData() {
    const id = location.pathname.replace("/memes/", "");
    const memeInfo = await individualMeme(id);
    setMemeData(memeInfo.data.data);
  }

  console.log(memeData);

  return (
    <div>
      {memeData ? (
        <>
          <h2>{memeData.title}</h2>
          <div className="individual-meme-img">
            <img src={memeData.file} alt={memeData.title} />
          </div>
          <div>{memeData.tags}</div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default MemeCard;
