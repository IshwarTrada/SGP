
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // file system
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath); // remove locally saved temporary file
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove locally saved temporary file as the upload operation failed
  }
};
const deleteFromCloudinary = async (existedFile) => {
  try {
    // check if file exists
    if (!existedFile) return null;
    // delete file from cloudinary
    const response = await cloudinary.uploader.destroy(existedFile);
    return response;
  } catch (error) {
    console.log("Error deleting file from cloudinary ", error.message);
  }
};
export { uploadOnCloudinary, deleteFromCloudinary };