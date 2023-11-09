import { useState } from "react";

const FILENAME = "character.json";

const GoogleDriveService = (gapi) => {
  const [characterData, setcharacterData] = useState("");
  const [fileId, setFileId] = useState("");

  const getFile = async () => {
    try {
      const files = await gapi.client.drive.files.list({
        q: "name=" + FILENAME,
        fields: "fields(id, name)",
      });
      setFileId(files.results.files[0].id);
      const characterData = await gapi.client.drive.files.get({
        fileId: fileId,
        alt: "media",
      });
      setcharacterData(JSON.parse(characterData.body));
    } catch (error) {
      console.error(error);
    }
  };

  const updateFile = async (data) => {
    try {
      const response = await gapi.client.request({
        path: `/upload/drive/v3/files/${fileId}?uploadType=media`,
        method: "PUT",
        body: JSON.stringify(data),
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
};
export default GoogleDriveService;
