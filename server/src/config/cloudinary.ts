// Set Up cloudinary for imaging storing/uploading
// Cloudinary is a cloud service that stores and servers images.
// Instead of storing images on our (which would be slow), we upload them to cloudinary and store the URL in mongoDB

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// configure cloudinary with credentials from .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image to cloudinary and return the result
// imagepath can be a file on disk or a base string

export const uploadImage = async (
  imagePath: string,
  folder: string = "audiophile", // Default folder name in cloudinary
) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder, // Organise image in folders
      resource_type: "image", // Tell cloudinary its an image
    });
    return result;
  } catch (error) {
    console.error("CLoudinary upload error:", error);
    throw error;
  }
};

// Delete an image from cloudinary using its public ID
// public is returned when you upload (result.public.id)
export const deleteImage = async (publicId: string) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw error;
  }
};

// "dsdoteykz"

export default cloudinary;
