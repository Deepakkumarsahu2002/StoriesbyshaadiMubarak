const Gallery = require("../models/Gallery");
const cloudinary = require("../config/cloudinary");

exports.uploadPhoto = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const photo = await Gallery.create({
      title: req.body.title,
      category: req.body.category.toLowerCase().trim(), // ✅ FIXED
      imageUrl: result.secure_url,
      cloudinaryId: result.public_id
    });
    res.json(photo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Upload failed" });
  }
};

exports.getGallery = async (req, res) => {
  const photos = await Gallery.find().sort({ createdAt: -1 });
  res.json(photos);
};

exports.deletePhoto = async (req, res) => {
  try {
    const photo = await Gallery.findById(req.params.id);
    if (!photo) return res.status(404).json({ msg: "Photo not found" });
    await cloudinary.uploader.destroy(photo.cloudinaryId);
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ msg: "Photo deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Delete failed" });
  }
};