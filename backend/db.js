import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.localURL;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("✅ Successfully connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};

connectDB();

const db = mongoose.connection;

db.on("disconnected", () => console.log("⚠️ Disconnected from MongoDB"));
