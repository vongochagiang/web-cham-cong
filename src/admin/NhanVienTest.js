import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NhanVien from './NhanVien';
import './NhanVien.css';

function NhanVienTest() {
  return (
    <Router>
      <div className="admin-container">
        <NhanVien />
      </div>
    </Router>
  );
}

export default NhanVienTest;
