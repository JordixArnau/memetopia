import React, { useState } from "react";
import { useHistory } from "react-router";
import { uploadFile } from "../../api/api";
import { uploadImage } from "../../services/cloudinary";

import upload from "../../assets/upload_icon.png";
import uploaded from "../../assets/uploaded_icon.png";
import "./style/uploadform.css";

function UploadForm() {
  const [loadedImage, setLoadedImage] = useState(false);
  const [radioButton, setRadioButton] = useState(null);
  const history = useHistory();

  async function uploadHandleSubmit(e) {
    e.preventDefault();

    const filePath = await uploadImage(e.target[0].files[0]);

    const fileData = {
      file: filePath.url,
      type: radioButton,
      title: e.target[4].value,
      tags: e.target[5].value.replace(/ /g, "").split(","),
    };

    await uploadFile(fileData);
    history.push("./");
  }

  return (
    <div className="upload">
      <h2>Upload</h2>
      <form name="upload-form" onSubmit={(e) => uploadHandleSubmit(e)}>
        <div className="upload-form-file">
          <label className="upload-input">
            {loadedImage ? (
              <img src={uploaded} alt="Upload file" width="150" />
            ) : (
              <img src={upload} alt="Upload file" width="150" />
            )}
            <input
              type="file"
              accept="image/*, .gif"
              hidden
              onChange={() => setLoadedImage(true)}
              required
            />
          </label>
        </div>

        <div className="upload-form-radio">
          <label>
            <input
              type="radio"
              id="meme"
              name="upload-type"
              value="meme"
              onClick={() => setRadioButton("meme")}
            />
            MEME
          </label>
          <label>
            <input
              type="radio"
              id="gif"
              name="upload-type"
              value="gif"
              onClick={() => setRadioButton("gif")}
            />
            GIF
          </label>
          <label>
            <input
              required
              type="radio"
              id="classic"
              name="upload-type"
              value="classic"
              onClick={() => setRadioButton("classic")}
            />
            CLASSIC
          </label>
        </div>

        <div className="upload-form-text">
          <label>
            Title
            <input type="text" required />
          </label>
          <label>
            Tags
            <input type="text" required />
          </label>
        </div>

        <div className="input-button-group">
          <button onClick={() => history.push("./")}>Go back!</button>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
