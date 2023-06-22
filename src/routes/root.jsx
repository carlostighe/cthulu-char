import React, { useEffect, useState } from "react";

import CharacterSheet from "../components/characters/CharacterSheet";
import characterDataJson from "../data/character.json";
import login from "../login2.svg";

function Root() {
  const [accessToken, setAccessToken] = useState(null);
  const [characterData, setCharacterData] = useState("characterDataJson");
  const [error, setError] = useState(null);

  // look at App.js for old google log in and gdrive data retrieval
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
          {!error ? (
            <div className="uk-width-1-1 uk-height-viewport">
              <CharacterSheet characterData={characterData} />
            </div>
          ) : (
            <div className="uk-grid uk-width-1-1 uk-height-1-1">
              <h2>{error}</h2>
              <button id="signout_button">Sign Out</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Root;
