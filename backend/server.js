import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./db.js";
import { Book } from "./models/bookModel.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("📚 Welcome to Book App");
});

// POST: Add a new book
app.post("/books", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = new Book(req.body);
    const savedBook = await newBook.save();

    res.status(201).json({
      message: "Book saved successfully",
      book: savedBook,
    });
  } catch (error) {
    res.status(500).json({ message: "Error posting data", error: error.message });
  }
});

// GET: Get all books
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      message: "Books fetched successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});

// GET: Get a book by ID
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book fetched successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});

// PUT: Update a book by ID
app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating data", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
