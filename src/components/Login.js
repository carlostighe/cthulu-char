import React, { useEffect, useState } from "react";

const gapi = window.gapi;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/drive";

const Login = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);
  // const [accessToken, setAccessToken] = useState(null);
  const [tokenClient, setTokenClient] = useState(null);
  const [gapiInited, setgapiInitiated] = useState(false);
  const [gisInited, setgisInitiated] = useState(false);

  useEffect(() => {
    const enableButtons = () => {
      if (gapiInited) {
        document.getElementById("authorize_button").style.visibility =
          "visible";
      }
    };
    const initClient = async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        });
        setgapiInitiated(true);
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        enableButtons();
      } catch (error) {
        console.error(error);
      }
    };
    const initToken = async () => {
      console.log("CID", CLIENT_ID);
      try {
        await window.google.accounts.oauth2.initTokenClient({
          clientId: CLIENT_ID,
          scope: SCOPES,
        });
        setgisInitiated(true);
      } catch (error) {
        console.error(error);
      }
    };
    gapi.load("client:auth2", initClient);
    initToken();
  }, [gapiInited]);

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      // this.props.onSuccess();
      console.log("signed in ", gapi.auth2.getAuthInstance());
    } else {
      gapi.auth2.getAuthInstance().signIn();
    }
  };

  const handleAuthClick = () => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      document.getElementById("signout_button").style.visibility = "visible";
      document.getElementById("authorize_button").innerText = "Refresh";
      await listFiles();
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: "" });
    }
  };

  const handleSignoutClick = () => {
    const token = gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken("");
      // document.getElementById("content").innerText = "";
      // document.getElementById("authorize_button").innerText = "Authorize";
      // document.getElementById("signout_button").style.visibility = "hidden";
    }
  };

  const listFiles = async () => {
    let response;
    try {
      response = await gapi.client.drive.files.list({
        pageSize: 10,
        fields: "files(id, name)",
      });
    } catch (err) {
      document.getElementById("content").innerText = err.message;
      return;
    }
    const files = response.result.files;
    if (!files || files.length === 0) {
      document.getElementById("content").innerText = "No files found.";
      return;
    }
    // Flatten to string to display
    const output = files.reduce(
      (str, file) => `${str}${file.name} (${file.id})\n`,
      "Files:\n"
    );
    document.getElementById("content").innerText = output;
  };

  // const this.props.onSuccess = (response) => {
  //   console.log("Login success. User info:", response);
  //   setLoggedIn(true);
  //   setUser(response.profileObj);
  //   console.log("response.profileObj ", response.profileObj);
  //   setAccessToken(response.credential);
  //   console.log("response.accessToken ", response.accessToken);

  //   // Fetch character.json file from Google Drive
  //   const file = googleDriveService.fetchFile("character.json", accessToken);
  //   console.log("Retrieved file:", file);
  // };

  // const onFailure = (error) => {
  //   console.log("Login failed. Error:", error);
  //   setError(error);
  // };

  return (
    <div className="row">
      <button id="authorize_button" onClick={handleAuthClick}>
        Authorize
      </button>
      <button id="signout_button" onClick={handleSignoutClick}>
        Sign Out
      </button>
    </div>
  );
};

export default Login;
