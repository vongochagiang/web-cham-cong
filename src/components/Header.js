// import React from 'react';
// import './Header.css';

// function Header() {
//   return (
//     <header className="admin-header">
//       <div className="logo-section">
//         <img 
//           src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png" 
//           alt="KFC Logo" 
//           className="kfc-logo" 
//         />
//         <h1>KFC VietNam | HRS</h1>
//       </div>
//       <nav className="main-nav">
//         <button className="nav-btn">Chấm công</button>
//         <button className="nav-btn">Nhân viên</button>
//         <button className="nav-btn">Bảng giá KM</button>
//         <button className="nav-btn">Nhập liệu hằng ngày</button>
//         <button className="nav-btn">360 Survey</button>
//         <button className="nav-btn">Thông báo</button>
//         <button className="nav-btn">Reports</button>
//       </nav>
//     </header>
//   );
// }

// export default Header; 

import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom'; // Nếu bạn đang dùng react-router

function Header() {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xử lý logout, ví dụ xóa token và chuyển về login
    localStorage.removeItem('token'); // hoặc sessionStorage tùy bạn dùng
    navigate('/login');
  };

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
        <div className="user-icon-container" onClick={() => setShowLogout(!showLogout)}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" 
            alt="user avatar" 
            className="user-icon"
          />
          {showLogout && (
            <button className="logout-btn" onClick={handleLogout}>Đăng xuất</button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
