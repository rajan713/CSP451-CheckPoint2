// src/controllers/usersController.js
// This controller provides basic REST actions for users

const users = [
  { id: 1, username: "student" },
  { id: 2, username: "admin" },
];

function getAllUsers(req, res) {
  return res.status(200).json(users);
}

function getUserById(req, res) {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
}

function createUser(req, res) {
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

  users.push(newUser);

  return res.status(201).json(newUser);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

