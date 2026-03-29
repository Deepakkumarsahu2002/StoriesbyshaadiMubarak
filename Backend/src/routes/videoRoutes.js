const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  addVideo,
  getVideos,
  deleteVideo
} = require("../controllers/videoController");

router.get("/", getVideos);
router.post("/", auth, addVideo);
router.delete("/:id", auth, deleteVideo);

module.exports = router;
