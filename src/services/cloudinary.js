import axios from "axios";

export const uploadImage = async (file) => {
  console.log(process.env.REACT_APP_CLOUDINARY_IMAGES_API);

  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.REACT_APP_CLOUDINARY_MEMES_PRESET
  );
  formData.append("resource_type", "image");
  formData.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
  const images = await axios.post(
    process.env.REACT_APP_CLOUDINARY_IMAGES_API,
    formData
  );
  return images.data;
};
