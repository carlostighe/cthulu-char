import React, { useEffect, useState } from "react";

import CharacterSheet from "./components/characters/CharacterSheet";
import characterDataJson from "./data/character.json";
import {ReactComponent as CthuluLogo} from './login2.svg';
import Login from "./components/Login";


function App() {
  const [rotation, setRotation] = useState(0);
  const [login, setLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [fileId, setFIleId] = useState("");
  const [characterData, setCharacterData] = useState("");
  const [error, setError] = useState(null);

  const authorise = () => {
    setCharacterData(characterDataJson);
    setAccessToken(true);
  };

  const showLogin = () => {
    setLogin(!login);
  }

  const handleClick =() => {
    setRotation(rotation + 360)
    setTimeout(() => showLogin(), 1000);
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
          {login ? (
             <Login onSubmit={authorise}/> 
          ): (null)}
        </div>
      ) : (
        <div className="uk-height-viewport">
          <div className="uk-width-1-1 uk-height-viewport">
            <CharacterSheet characterData={characterData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
