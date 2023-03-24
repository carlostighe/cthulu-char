import "./App.css";

import React, { useEffect, useState } from "react";

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
  const [gapiInited, setgapiInitited] = useState(false);
  const [gisInited, setgisInitited] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  const gapInit = async () => {
    await gapi.client
      .init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
      })
      .then(function () {
        setgapiInitited(true);
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
    setgisInitited(true);
  }, []);

  const listFiles = async () => {
    let response;
    try {
      response = await gapi.client.drive.files.list({
        q: "name='character.json'",
        fields: "files(id, name)",
      });
    } catch (err) {
      console.log("err ", err.message);
      return;
    }
    const characterData = await gapi.client.drive.files.get({
      fileId: response.result.files[0].id,
      alt: "media",
    });
    console.log("characterData ", characterData.body);
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
        <button id="signout_button" onClick={revokeToken}>
          Sign Out
        </button>
      )}
    </div>
  );
}

export default App;
