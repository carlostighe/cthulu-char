import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const googleDrive = {
  load: (accessToken, fileId, callback) => {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const drive = google.drive({ version: 'v3', auth });

    drive.files.get(
      { fileId: fileId, alt: 'media' },
      (err, response) => {
        if (err) {
          console.error('Error loading file: ', err);
          callback(err);
        } else {
          console.log('File loaded from Google Drive');
          callback(null, JSON.parse(response.data));
        }
      }
    );
  },

  save: (accessToken, data, callback) => {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const drive = google.drive({ version: 'v3', auth });

    const fileMetadata = {
      name: 'character-sheet.json',
      parents: ['YOUR_FOLDER_ID'], // Replace with your actual folder ID
    };

    const media = {
      mimeType: 'application/json',
      body: JSON.stringify(data),
    };

    drive.files.create(
      {
        resource: fileMetadata,
        media: media,
        fields: 'id',
      },
      (err, file) => {
        if (err) {
          console.error('Error creating file: ', err);
          callback(err);
        } else {
          console.log('File saved to Google Drive. File ID: ', file.data.id);
          callback(null, file.data.id);
        }
      }
    );
  },
};

export default googleDrive;
// This googleDrive utility exports an object with two methods: load and save. The load method accepts three arguments: accessToken, fileId, and callback. accessToken is the access token obtained from Google OAuth login, fileId is the ID of the file to load, and callback is a function that will be called when the operation is complete.

// The function first creates a new instance of google.auth.OAuth2 and sets the access token. It then creates a google.drive instance and calls the files.get method with the fileId and alt parameters set to 'media'. This returns the raw file data, which is then parsed as JSON and passed to the callback function.

// The save method also accepts three arguments: accessToken, data, and callback. accessToken is the access token obtained from Google OAuth login, data is the character sheet data to be saved to Google Drive, and callback is a function that will be called when the operation is complete.

// The function first creates a new instance of google.auth.OAuth2 and sets the access token. It then creates a google.drive instance and constructs the file metadata and media objects for the new file. The fields parameter specifies that only the ID of the new file should be returned.

// Finally, it calls the files.create method of the google.drive instance to create the new file. If the operation is successful, it logs the file ID to the console and calls the callback function with the file ID. If there is