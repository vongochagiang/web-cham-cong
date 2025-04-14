import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login/login', {
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        const userData = response.data.user;
        
        // Lưu thông tin đăng nhập nếu chọn "Ghi nhớ đăng nhập"
        if (formData.rememberMe) {
          localStorage.setItem('user', JSON.stringify(userData));
        } else {
          sessionStorage.setItem('user', JSON.stringify(userData));
        }
        
        // Chuyển hướng dựa trên vai trò
        if (userData.role_user === 'manager') {
          navigate('/nhan-vien', { replace: true });
        } else {
          navigate('/', { replace: true }); // Chuyển đến trang DangKy
        }
      }
    } catch (error) {
      if (error.response) {
        // Xử lý các lỗi có response từ server
        switch (error.response.status) {
          case 401:
            setError('Email hoặc mật khẩu không đúng');
            break;
          case 404:
            setError('Không tìm thấy tài khoản với email này');
            break;
          case 400:
            setError('Thông tin đăng nhập không hợp lệ');
            break;
          case 500:
            setError('Lỗi máy chủ. Vui lòng thử lại sau');
            break;
          default:
            setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
        }
      } else if (error.request) {
        // Lỗi không nhận được response
        setError('Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng.');
      } else {
        // Lỗi trong quá trình thiết lập request
        setError('Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.');
      }
      console.error('Chi tiết lỗi đăng nhập:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      });
    }




    // Kết nối database ở đây
    // const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    // connection.query(query, [formData.username, formData.password], (err, results) => {
    //   if (err) {
    //     console.error('Lỗi truy vấn:', err);
    //     setError('Lỗi đăng nhập. Vui lòng thử lại sau.');
    //     return;
    //   }

    //   if (results.length > 0) {
    //     const user = results[0];

    //     // Lưu thông tin người dùng vào localStorage hoặc sessionStorage
    //     const userData = {
    //       id: user.id,
    //       name: user.name, // Giả sử bạn có cột "name" trong bảng users
    //       role: user.role_user // Sử dụng 'role_user' thay vì 'role'
    //     };

    //     if (formData.rememberMe) {
    //       localStorage.setItem('user', JSON.stringify(userData));
    //     } else {
    //       sessionStorage.setItem('user', JSON.stringify(userData));
    //     }

    //     // Chuyển hướng dựa trên vai trò
    //     if (user.role_user === 'admin') {
    //       navigate('/nhan-vien', { replace: true });
    //     } else {
    //       navigate('/', { replace: true }); // Chuyển đến trang DangKy (/)
    //     }
    //   } else {
    //     setError('Tên đăng nhập hoặc mật khẩu không đúng');
    //   }
    // });

    
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img 
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png" 
            alt="Logo" 
            className="login-logo" 
          />
          <div className="login-title">
            <h1>Yang VietNam | HRS</h1>
            <span className="subtitle">hr.yangvietnam.com.vn</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label htmlFor="rememberMe">Ghi nhớ đăng nhập</label>
            </div>
            <a href="#" className="forgot-password">Quên mật khẩu?</a>
          </div>

          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>

        <div className="login-footer">
          <p> 2025 Yang Vietnam. All rights reserved.</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );


  // return (
  //   <div className="login-container">
  //     {/* ... phần giao diện người dùng (form) giữ nguyên ... */}
  //       <div className="login-box">
  //       <div className="login-header">
  //         <img 
  //           src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png" 
  //           alt="Logo" 
  //           className="login-logo" 
  //         />
  //         <div className="login-title">
  //           <h1>Yang VietNam | HRS</h1>
  //           <span className="subtitle">hr.yangvietnam.com.vn</span>
  //         </div>
  //       </div>

  //       <form onSubmit={handleSubmit} className="login-form">
  //         {error && <div className="error-message">{error}</div>}
          
  //         <div className="form-group">
  //           <label htmlFor="username">Tên đăng nhập</label>
  //           <input
  //             type="text"
  //             id="username"
  //             name="username"
  //             value={formData.username}
  //             onChange={handleInputChange}
  //             placeholder="Nhập tên đăng nhập"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label htmlFor="password">Mật khẩu</label>
  //           <input
  //             type="password"
  //             id="password"
  //             name="password"
  //             value={formData.password}
  //             onChange={handleInputChange}
  //             placeholder="Nhập mật khẩu"
  //             required
  //           />
  //         </div>

  //         <div className="form-options">
  //           <div className="remember-me">
  //             <input
  //               type="checkbox"
  //               id="rememberMe"
  //               name="rememberMe"
  //               checked={formData.rememberMe}
  //               onChange={handleInputChange}
  //             />
  //             <label htmlFor="rememberMe">Ghi nhớ đăng nhập</label>
  //           </div>
  //           <a href="#" className="forgot-password">Quên mật khẩu?</a>
  //         </div>

  //         <button type="submit" className="login-button">
  //           Đăng nhập
  //         </button>
  //       </form>

  //       <div className="login-footer">
  //         <p> 2025 Yang Vietnam. All rights reserved.</p>
  //         <p>Version 1.0.0</p>
  //       </div>
  //     </div>
  //   </div>
  // );


}

export default Login;
