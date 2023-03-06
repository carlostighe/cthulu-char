import { useState } from "react";

const FILEID = "character.json";

const GoogleDriveService = (gapi) => {
  const [fileContent, setFileContent] = useState("");

  const getFile = async () => {
    try {
      const response = await gapi.client.drive.files.get({
        fileId: FILEID,
        alt: "media",
      });
      setFileContent(response.body);
    } catch (error) {
      console.error(error);
    }
  };

  const updateFile = async (data) => {
    try {
      const response = await gapi.client.request({
        path: `/upload/drive/v3/files/${FILEID}?uploadType=media`,
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
