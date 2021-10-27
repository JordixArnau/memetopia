import React, { useState } from "react";
import { useHistory } from "react-router";
import { uploadFile } from "../../api/api";

import "./style/uploadurlform.css";

function UploadUrlForm() {
  const [radioButton, setRadioButton] = useState(null);
  const history = useHistory();

  async function uploadHandleSubmit(e) {
    e.preventDefault();

    const fileData = {
      file: e.target[0].value,
      type: radioButton,
      title: e.target[4].value,
      tags: e.target[5].value,
    };

    await uploadFile(fileData);
    history.push("./");
  }

  return (
    <div className="upload">
      <h2>Upload</h2>
      <form name="upload-form" onSubmit={(e) => uploadHandleSubmit(e)}>
        <div className="upload-form-url">
          <label className="upload-form-text">
            Paste here the URL of your favorite Meme or Gif!
            <input type="text" required />
          </label>
        </div>

        <div className="upload-form-radio">
          <label>
            <input
              required
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
              type="radio"
              id="classic"
              name="upload-type"
              value="classic"
              onClick={() => setRadioButton("classic")}
            />
            CLASSIC
          </label>
        </div>

        <div className="upload-form-text margin-tb-20">
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

export default UploadUrlForm;
