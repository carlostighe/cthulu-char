const authorise = (gapi, tokenClient) => {
  let accessToken;
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    accessToken = await gapi.client.getToken();
  };
  if (accessToken === null) {
    return tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    return tokenClient.requestAccessToken({ prompt: "" });
  }
};

const revokeToken = (accessToken, google, gapi) => {
  if (accessToken !== null) {
    google.accounts.oauth2.revoke(accessToken.access_token);
    gapi.client.setToken("");
  }
  return;
};

const loginService = { authorise, revokeToken };

export default loginService;
