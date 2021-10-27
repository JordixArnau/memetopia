import React from "react";
import UploadForm from "../../components/UploadForm";

import "./style/uploadfile.css";

function UploadFile() {
  return (
    <div className="upload-back">
      <div className="register-overlay"></div>
      <UploadForm />
    </div>
  );
}

export default UploadFile;
