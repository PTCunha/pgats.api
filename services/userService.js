const { users } = require('../models/db');

function register(req, res) {
  const { username, password, favorecido } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required.' });
  }
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ error: 'User already exists.' });
  }
  users.push({ username, password, favorecido: !!favorecido });
  res.status(201).json({ message: 'User registered.' });
}

function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required.' });
  }
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }
  res.json({ message: 'Login successful.' });
}

function getAll(req, res) {
  res.json(users);
}

module.exports = { register, login, getAll };
