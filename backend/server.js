import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors"


dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use(cors({
origin:'http://localhost:3000',
methods:['GET','POST','PUT','DELETE'],
allowedHeaders:['Content-Type']
}))

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("📚 Welcome to Book App");
});

app.use('/books', bookRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
