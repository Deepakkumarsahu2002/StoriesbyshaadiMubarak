const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const auth = require("../middlewares/auth");
const {
  uploadPhoto,
  getGallery,
  deletePhoto
} = require("../controllers/galleryController");

router.get("/", getGallery);
router.post("/", auth, upload.single("image"), uploadPhoto);
router.delete("/:id", auth, deletePhoto);

module.exports = router;
