import React, { useEffect, useState } from "react";

import CharacterSheet from "./components/characters/CharacterSheet";
import characterDataJson from "./data/character.json";
import Login from "./components/Login";
import Logo from "./components/Logo";


function App() {
  const [rotation, setRotation] = useState(0);
  const [login, setLogin] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const [fileId, setFIleId] = useState("");
  const [characterData, setCharacterData] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setCharacterData(characterDataJson);
    setAccessToken(true);
  };

  const showLogin = () => {
    setLogin(!login);
  }

  const handleLogo = () => {
    setRotation(rotation + 360)
    setTimeout(() => showLogin(), 1000);
  }

  return (
    <div className="uk-height-viewport">
      {!accessToken ? (
        <div className="uk-height-match uk-position-center">
          <div className="uk-card uk-card-secondary uk-width-1-2@m">
            <Logo onClick={handleLogo} rotation={rotation}/>
            {login ? (
              <Login onSubmit={handleLogin} />
            ) : (null)}
          </div>
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
