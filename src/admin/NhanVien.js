
// import React, { useEffect, useState } from 'react';
// import './NhanVien.css';
// import { useNavigate } from 'react-router-dom';

// function NhanVien() {
//   const [employees, setEmployees] = useState([]);
//   const [showLogout, setShowLogout] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/api/nhanvien`);
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error('Lỗi khi lấy dữ liệu nhân viên:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // hoặc id_user tùy bạn dùng
//     navigate('/login');
//   };

//   return (
//     <div className="admin-container">
//       <header className="admin-header">
//         <div className="logo-section">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png"
//             alt="KFC Logo"
//             className="kfc-logo"
//           />
//           <h1>KFC VietNam | HRS</h1>
//         </div>

//         <nav className="main-nav">
//           <button className="nav-btn active">Nhân viên</button>
//           <button className="nav-btn">Chấm công</button>
          

//           <div className="user-icon-container" onClick={() => setShowLogout(!showLogout)}>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//               alt="avatar"
//               className="user-icon"
//             />
//             {showLogout && (
//               <button className="logout-btn" onClick={handleLogout}>
//                 Đăng xuất
//               </button>
//             )}
//           </div>
//         </nav>
//       </header>

//       <div className="sub-nav">
//         <button className="sub-nav-btn active">Danh sách nhân viên</button>
//         <button className="sub-nav-btn">Cập nhật</button>
//         <button className="sub-nav-btn">Biến động</button>
//         <button className="sub-nav-btn">Công việc</button>
//         <button className="sub-nav-btn">Thông tin</button>
//         <button className="sub-nav-btn">Bảo trợ</button>
//         <button className="sub-nav-btn">Công & Lương</button>
//       </div>

//       <main className="employee-list-container">
//         <table className="employee-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>ID User</th>
//               <th>CMND/CCCD</th>
//               <th>Nơi cấp</th>
//               <th>Ngày cấp</th>
//               <th>Tình trạng hôn nhân</th>
//               <th>SĐT</th>
//               <th>Địa chỉ</th>
//               <th>Ngày tạo</th>
//               <th>Ngày cập nhật</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.id}>
//                 <td>{employee.id}</td>
//                 <td>{employee.id_user}</td>
//                 <td>{employee.identity_number}</td>
//                 <td>{employee.issued_place}</td>
//                 <td>{employee.issued_date}</td>
//                 <td>{employee.marital_status}</td>
//                 <td>{employee.phone_number}</td>
//                 <td>{employee.address}</td>
//                 <td>{new Date(employee.created_at).toLocaleString()}</td>
//                 <td>{new Date(employee.updated_at).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }

// export default NhanVien;


import React, { useEffect, useState } from 'react';
import './NhanVien.css';
import { useNavigate } from 'react-router-dom';

function NhanVien() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/nhanvien`);
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu nhân viên:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleEditChange = (field, value) => {
    setEditedEmployee(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/nhanvien/${editedEmployee.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedEmployee),
      });
      if (response.ok) {
        alert('Cập nhật thành công!');
        fetchEmployees();
        setSelectedEmployee(editedEmployee);
        setEditedEmployee(null);
      } else {
        const errData = await response.json();
        console.error("❌ Lỗi server:", errData);
        alert('Cập nhật thất bại!');
      }
    } catch (error) {
      console.error('Lỗi khi cập nhật:', error);
    }
  };

  return (
    <div className="admin-container">
      {/* HEADER */}
      <header className="admin-header">
        <div className="logo-section">
          <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png" alt="KFC Logo" className="kfc-logo" />
          <h1>KFC VietNam | HRS</h1>
        </div>

        <nav className="main-nav">
          <button className="nav-btn active">Nhân viên</button>
          <button className="nav-btn active" onClick={() => navigate('/quet-ma')}>Chấm công</button>
          
          <div className="user-icon-container" onClick={() => setShowLogout(!showLogout)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="avatar" className="user-icon" />
            {showLogout && (
              <button className="logout-btn" onClick={handleLogout}>
                Đăng xuất
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* SUB-NAV */}
      <div className="sub-nav">
        <button className="sub-nav-btn active">Danh sách nhân viên</button>
        <button className="sub-nav-btn active" onClick={() => navigate('/tao-nhan-vien')}>Tạo nhân viên</button>
        {/* <button className="sub-nav-btn">Cập nhật</button>
        <button className="sub-nav-btn">Công việc</button>
        <button className="sub-nav-btn">Thông tin</button>
<button className="sub-nav-btn">Công & Lương</button> */}
      </div>

      {/* DANH SÁCH NHÂN VIÊN */}
      <div style={{ display: 'flex', padding: 20 }}>
        {/* BÊN TRÁI */}
        <div className="employee-list">
          <h3>Danh sách nhân viên</h3>
          {employees.map((emp) => (
            <div
              key={emp.id}
              className={`employee-item ${selectedEmployee?.id === emp.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedEmployee(emp);
                setEditedEmployee(emp);
              }}
            >
              <strong>{emp.name_user}</strong>
              <p>Mã NV: {emp.id_user}</p>
              <p>Chức vụ: {emp.role_user}</p>
            </div>
          ))}
        </div>

        {/* CHI TIẾT NHÂN VIÊN */}
        <div className="employee-detail">
          {editedEmployee ? (
            <div>
              <h3>Thông tin chi tiết (Chỉnh sửa)</h3>
              {[
                ['Họ tên', 'name_user'],
                ['Mã nhân viên', 'id_user'],
                ['Chức vụ', 'role_user'],
                ['Phòng ban', 'department_user'],
                ['Số CCCD', 'identity_number'],
                ['Nơi cấp', 'issued_place'],
                ['Ngày cấp', 'issued_date'],
                ['Trạng thái hôn nhân', 'marital_status'],
                ['SĐT', 'phone_number'],
                ['Địa chỉ', 'address'],
              ].map(([label, key]) => (
                <p key={key}>
                  <strong>{label}:</strong>{' '}
                  <input
                    type="text"
                    value={editedEmployee[key] || ''}
                    onChange={(e) => handleEditChange(key, e.target.value)}
                  />
                </p>
              ))}
              <button onClick={handleSave} className="save-btn">
                Lưu thông tin
              </button>
            </div>
          ) : (
            <p>Vui lòng chọn một nhân viên để xem chi tiết</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NhanVien;
