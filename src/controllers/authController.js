// src/controllers/authController.js

const users = [
  { id: 1, username: "student", password: "password123" },
  { id: 2, username: "admin", password: "admin123" },
];

function validateLoginPayload(body) {
  const errors = [];

  if (!body.username || typeof body.username !== "string") {
    errors.push("Username is required and must be a string.");
  }

  if (!body.password || typeof body.password !== "string") {
    errors.push("Password is required and must be a string.");
  }

  return errors;
}

function login(req, res) {
  const errors = validateLoginPayload(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const user = users.find(
    (u) => u.username === req.body.username && u.password === req.body.password
  );

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }

  return res.status(200).json({
    success: true,
    message: "Login successful",
    user: { id: user.id, username: user.username },
  });
}

module.exports = { login };

