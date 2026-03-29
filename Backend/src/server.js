const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ✅ Fix for Chrome's Local Network Access (LNA) popup */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  next();
});

/* ✅ CORS CONFIG (PRODUCTION READY) */
app.use(cors({
  origin: function (origin, callback) {
    if (
      !origin ||
      origin.includes("pages.dev") ||
      origin.includes("localhost")
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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