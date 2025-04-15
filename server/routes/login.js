const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM user WHERE email_user = ? AND password_user = ?';
  
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length > 0) {
      const user = results[0];
      // Don't send password in response
      const { password_user, ...userWithoutPassword } = user;
      res.json({ success: true, user: { email, role_user:user.role_user} });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

module.exports = router;
