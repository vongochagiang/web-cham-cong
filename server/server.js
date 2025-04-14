const express = require('express');
const cors = require('cors');

const app = express();

// kết nối đến db
const db = require('./config/db');

// import routes
const nhanvienRoutes = require('./routes/nhanvien');
const loginRoutes = require('./routes/login');

app.use(cors());
app.use(express.json());

// Route APIs
app.use('/api/nhanvien', nhanvienRoutes);
app.use('/api/login', loginRoutes);

// Start server
app.listen(3001, () => {
  console.log('🚀 Server backend đang chạy tại http://localhost:3001');
});
