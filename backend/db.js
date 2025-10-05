import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/bookStore");

const db = mongoose.connection;


db.on("connected", () => console.log("✅ Successfully connected to MongoDB"));
db.on("disconnected", () => console.log("⚠️ Disconnected from MongoDB"));
db.on("error", (err) => console.log("❌ Error connecting to MongoDB:", err));


export default db;
