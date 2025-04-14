import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="admin-header">
      <div className="logo-section">
        <img 
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png" 
          alt="KFC Logo" 
          className="kfc-logo" 
        />
        <h1>KFC VietNam | HRS</h1>
      </div>
      <nav className="main-nav">
        <button className="nav-btn">Chấm công</button>
        <button className="nav-btn">Nhân viên</button>
        <button className="nav-btn">Bảng giá KM</button>
        <button className="nav-btn">Nhập liệu hằng ngày</button>
        <button className="nav-btn">360 Survey</button>
        <button className="nav-btn">Thông báo</button>
        <button className="nav-btn">Reports</button>
      </nav>
    </header>
  );
}

export default Header;