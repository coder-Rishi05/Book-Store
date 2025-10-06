import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, author, publishyear } = req.body;
    if (!title || !author || !publishyear) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = new Book(req.body);
    const savedBook = await newBook.save();

    res.status(201).json({
      message: "Book saved successfully",
      book: savedBook,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error posting data", error: error.message });
  }
});

// GET: Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      message: "Books fetched successfully",
      count: books.length,
      books,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
});

// GET: Get a book by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book fetched successfully", book });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
});

// PUT: Update a book by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishyear } = req.body;

    if (!title || !author || !publishyear) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating data", error: error.message });
  }
});

// delete a route.

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await Book.findByIdAndDelete(id);
    if (!deleteData)
      return res.status(404).json({ message: "Data not found by this id" });
    res.status(200).json({
      message: "data deleted successfully",
      data: deleteData,
      TotalBooks: Book.length,
    });
  } catch (error) {
    res.status(500).json({ message: "Can't delete the data. " });
  }
});

export default router;
