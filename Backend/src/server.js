const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ✅ CORS CONFIG (IMPORTANT) */
app.use(cors({
  origin: [
    "https://storiesbyshaadimubarak.pages.dev",  // 🔁 replace with your Cloudflare URL
    "http://localhost:5173"           // for local testing
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/* ✅ Middleware */
app.use(express.json());

/* ✅ MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

/* ✅ Test Route */
app.get("/", (req, res) => {
  res.send("Studio backend running 🚀");
});

/* ✅ Routes */
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/videos", require("./routes/videoRoutes"));

/* ✅ Start Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));