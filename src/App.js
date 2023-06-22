import React, { useEffect, useState } from "react";

import CharacterSheet from "./components/characters/CharacterSheet";
import characterDataJson from "./data/character.json";
import login from "./login2.svg";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [fileId, setFIleId] = useState("");
  const [characterData, setCharacterData] = useState("");
  const [error, setError] = useState(null);

  const authorise = () => {
    setCharacterData(characterDataJson);
    setAccessToken(true);
  };

  return (
    <div className="uk-height-viewport">
      {!accessToken ? (
        <div className="uk-height-match uk-position-center">
          <img
            src={login}
            alt="cthulu like demon glyph"
            onClick={authorise}
          ></img>
        </div>
      ) : (
        <div className="uk-height-viewport">
          <div className="uk-width-1-1 uk-height-viewport">
            <CharacterSheet characterData={characterData} />
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
