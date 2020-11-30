const { cloudinary } = require("../../utils/cloudinary");

const uploadBase64 = async (imageStr) => {
  try {
    const response = await cloudinary.uploader.upload(imageStr, {
      upload_preset: "Tender",
    });

    return response.url;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  uploadBase64,
};
