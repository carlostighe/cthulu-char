import "./App.css";
import "./fonts/SpecialElite-Regular.ttf";

import React, { useEffect, useState } from "react";

import CharacterSheet from "./components/characters/CharacterSheet";
import login from "./login2.svg";

const gapi = window.gapi;
const google = window.google;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/drive";
function App() {
  const [tokenClient, setTokenClient] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [fileId, setFIleId] = useState("");
  const [characterData, setCharacterData] = useState("");
  const [error, setError] = useState(null);
  const gapInit = async () => {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
    });
  };
  useEffect(() => {
    gapi.load("client", gapInit);
    setTokenClient(
      google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: "", // defined at request time
      })
    );
  }, []);

  const listFiles = async () => {
    try {
      const file = await gapi.client.drive.files
        .list({
          q: "name='character.json'",
          fields: "files(id, name)",
        })
        .then((response) => {
          return response.result.files[0].id;
        });
      await setFIleId(file);
      const fileData = await gapi.client.drive.files.get({
        fileId: file,
        alt: "media",
        "content-type": "application/json",
      });
      const charData = JSON.parse(fileData.body);
      await setCharacterData(charData);
    } catch (err) {
      setError(err.body.message);
      return;
    }
  };

  const authorise = () => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      setAccessToken(gapi.client.getToken());
      await listFiles();
    };
    accessToken === null
      ? tokenClient.requestAccessToken({ prompt: "consent" })
      : tokenClient.requestAccessToken({ prompt: "" });
  };

  const revokeToken = () => {
    if (accessToken !== null) {
      google.accounts.oauth2.revoke(accessToken.access_token);
      gapi.client.setToken("");
      setAccessToken(null);
    }
  };

  return (
    <div>
      {!accessToken ? (
        <div className="row login">
          <img
            src={login}
            alt="cthulu like demon glyph"
            onClick={authorise}
          ></img>
        </div>
      ) : (
        <div>
          {!error ? (
            <CharacterSheet
              revokeToken={() => revokeToken()}
              characterData={characterData}
            />
          ) : (
            <div>
              <h2>{error}</h2>
              <button id="signout_button" onClick={revokeToken}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
