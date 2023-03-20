import "./App.css";

import React, { useEffect, useState } from "react";

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
  const [gapiInited, setgapiInitiated] = useState(false);
  const [gisInited, setgisInitiated] = useState(false);

  const gapInit = async () => {
    await gapi.client.init({}).then(function () {
      setgapiInitiated(true);
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
    setgisInitiated(true);
  }, []);

  const authorise = () => {
    tokenClient.callback = (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      // GIS has automatically updated gapi.client with the newly issued access token.
      console.log(
        "gapi.client access token: " + JSON.stringify(gapi.client.getToken())
      );
      // make a call to get character.json file here
    };

    // Conditionally ask users to select the Google Account they'd like to use,
    // and explicitly obtain their consent to fetch their Calendar.
    // NOTE: To request an access token a user gesture is necessary.
    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and asked for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: "" });
    }
  };

  const revokeToken = () => {
    console.log(gapi.client.getToken());
    console.log(tokenClient);
    if (tokenClient !== null) {
      google.accounts.oauth2.revoke(tokenClient.access_token, () => {
        console.log("Revoked: " + tokenClient.access_token);
      });
      gapi.client.setToken("");
      setTokenClient(null);
    }
  };

  return (
    <div>
      {gapiInited && gisInited ? (
        <div className="row">
          <button id="authorize_button" onClick={authorise}>
            Authorize
          </button>
          <button id="signout_button" onClick={revokeToken}>
            Sign Out
          </button>
        </div>
      ) : (
        <h1>Issues....</h1>
      )}
    </div>
  );
}

export default App;
