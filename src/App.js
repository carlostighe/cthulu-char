import React, { useEffect, useState } from "react";

import CharacterSheet from "./components/characters/CharacterSheet";
import characterDataJson from "./data/character.json";
import login from "./login2.svg";
import {ReactComponent as CthuluLogo} from './login2.svg';


function App() {
  const [rotation, setRotation] = useState(0);

  const [accessToken, setAccessToken] = useState(null);
  const [fileId, setFIleId] = useState("");
  const [characterData, setCharacterData] = useState("");
  const [error, setError] = useState(null);

  const authorise = () => {
    setCharacterData(characterDataJson);
    setAccessToken(true);
  };

  const handleClick =() => {
    setRotation(rotation + 360)
    setTimeout(() => authorise(), 1000);

  }
  return (
    <div className="uk-height-viewport">
      {!accessToken ? (
        <div className="uk-height-match uk-position-center">
          <CthuluLogo 
            style={{ 
              transition: 'transform 1s',
              transform: `rotate(${rotation}deg)` }}
            onClick={handleClick}          
          />
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
