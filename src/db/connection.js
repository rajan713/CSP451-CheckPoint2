// src/db/connection.js
// This module simulates a database connection using a local JSON file.
// It exists to demonstrate database logic without requiring a real DB server.
// A file-based database is used here to keep setup simple for learning purposes.

const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "database.json");

// Ensure database file exists
function initializeDatabase() {
  if (!fs.existsSync(DB_PATH)) {
    const initialData = {
      users: [],
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
  }
}

// Read data from the database file
function readDatabase() {
  initializeDatabase();
  const rawData = fs.readFileSync(DB_PATH);
  return JSON.parse(rawData);
}

// Write data to the database file
function writeDatabase(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Add a user to the database
function addUser(user) {
  const db = readDatabase();
  db.users.push(user);
  writeDatabase(db);
}

module.exports = {
  readDatabase,
  writeDatabase,
  addUser,
};
