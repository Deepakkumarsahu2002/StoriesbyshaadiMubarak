require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"));

(async () => {
  const existing = await Admin.findOne({ email: "sidhant@shaadimubarak.com" });
  if (existing) {
    console.log("⚠️ Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("sidhant2026", 10);

  await Admin.create({
    email: "sidhant@shaadimubarak.com",
    password: hashedPassword
  });

  console.log("✅ Admin created successfully");
  process.exit();
})();
