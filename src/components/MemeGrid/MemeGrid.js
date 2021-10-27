import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  getAllMemes,
  getOnlyMemes,
  getGifs,
  getClassics,
  getHot,
} from "../../api/api";

import "./style/memegrid.css";

function MemeGrid() {
  const location = useLocation();
  const history = useHistory();
  console.log(location.pathname, "LOCATION");

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    getMemes();
  }, []);

  useEffect(() => {
    getMemes();
  }, [location.pathname]);

  async function getMemes() {
    if (location.pathname === "/") {
      const memes = await getAllMemes();
      setAllMemes(memes.data.data);
    }

    if (location.pathname === "/meme") {
      const memes = await getOnlyMemes();
      setAllMemes(memes.data.data);
    }

    if (location.pathname === "/gif") {
      const memes = await getGifs();
      setAllMemes(memes.data.data);
    }

    if (location.pathname === "/classic") {
      const memes = await getClassics();
      setAllMemes(memes.data.data);
    }

    if (location.pathname === "/hot") {
      const memes = await getHot();
      setAllMemes(memes.data.data);
    }
  }

  return (
    <div className="memes">
      <div className="memes-row">
        {allMemes.map((meme) => {
          return (
            <div key={meme._id} className="memes-row-individual">
              <img
                src={meme.file}
                alt={meme.title}
                onClick={() => history.push(`./memes/${meme._id}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemeGrid;
