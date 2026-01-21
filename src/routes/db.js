// src/routes/db.js
// Routes that interact with the database module

const express = require("express");
const router = express.Router();
const { readDatabase, addUser } = require("../db/connection");

// GET /api/db/users
// Returns all users from the database
router.get("/users", (req, res) => {
  const db = readDatabase();
  res.json(db.users);
});

// POST /api/db/users
// Adds a new user to the database
router.post("/users", (req, res) => {
  const { username } = req.body;

  if (!username || typeof username !== "string") {
    return res.status(400).json({
      error: "Username is required and must be a string",
    });
  }

  const newUser = {
    id: Date.now(),
    username,
  };

  addUser(newUser);

  res.status(201).json(newUser);
});

module.exports = router;

