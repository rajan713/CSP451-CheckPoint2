// src/routes/users.js
// REST routes for user resources

const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../controllers/usersController");

// GET /api/users
router.get("/", getAllUsers);

// GET /api/users/:id
router.get("/:id", getUserById);

// POST /api/users
router.post("/", createUser);

module.exports = router;
