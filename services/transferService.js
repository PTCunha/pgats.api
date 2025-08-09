const { users, transfers } = require('../models/db');

function transfer(req, res) {
  const { from, to, amount } = req.body;
  if (!from || !to || typeof amount !== 'number') {
    return res.status(400).json({ error: 'From, to and amount required.' });
  }
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) {
    return res.status(404).json({ error: 'Sender or recipient not found.' });
  }
  if (!recipient.favorecido && amount >= 5000) {
    return res.status(403).json({ error: 'Transfers >= R$ 5.000,00 only allowed to favorecido.' });
  }
  transfers.push({ from, to, amount, date: new Date() });
  res.json({ message: 'Transfer successful.' });
}

module.exports = { transfer };
