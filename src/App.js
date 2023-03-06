import "./App.css";

import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [fileContent, setFileContent] = useState("");

  const getFileContent = async () => {
    try {
      const response = await window.gapi.client.drive.files.get({
        fileId: "<your",
        alt: "media",
      });

      setFileContent(response.body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {fileContent && <p>{fileContent}</p>}
      <Login onSuccess={getFileContent} />
    </div>
  );
}

export default App;
