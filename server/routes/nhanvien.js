// server/routes/nhanvien.js
// const express = require('express');
// const router = express.Router();
// const db = require('../config/db'); // file kết nối MySQL bạn đã có

// router.get('/', (req, res) => {
//   const sql = 'SELECT * FROM employee'; // bảng "nhanvien" trong MySQL
//   db.query(sql, (err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(results);
//   });
// });

// module.exports = router;
// server/routes/nhanvien.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // file kết nối MySQL bạn đã có

// Lấy danh sách tất cả nhân viên kèm theo thông tin tài khoản
router.get('/', (req, res) => {
  const sql = `
    SELECT e.*, u.name_user 
    FROM employee e
    LEFT JOIN users u ON e.id_user = u.id_user
  `;
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

module.exports = router;
