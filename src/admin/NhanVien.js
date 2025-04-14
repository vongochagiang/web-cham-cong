// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './NhanVien.css';

// function NhanVien() {
//   const navigate = useNavigate();
//   const [employees] = useState([
//     { id: '2409174', name: 'Nguyễn Nam Linh', role: 'ROM Level 1' },
//     { id: '2409564', name: 'Lê Doãn Ngọc', role: 'Shift Supervisor' },
//     { id: '2409363', name: 'Võ Đăng Khoa', role: 'Shift Supervisor' },
//     { id: '2409213', name: 'Vũ Thị Hồng Châu', role: 'H-Mincer' },
//     { id: '2412378', name: 'Trần Hoàng Phi', role: 'Crew' },
//     { id: '2409208', name: 'Nguyễn Thái Thùy Dung', role: 'Crew' },
//     { id: '2409235', name: 'Nguyễn Gia Hưng', role: 'Crew' },
//     { id: '2409213', name: 'Tống Thị Minh Thùy', role: 'Crew' },
//     { id: '2409218', name: 'Mai Vũ Huyền Trang', role: 'Crew' },
//     { id: '2409223', name: 'Nguyễn Nguyễn Khánh Trang', role: 'Crew' },
//     { id: '2409228', name: 'Lê Văn Khôi', role: 'Crew' },
//     { id: '2409233', name: 'Nguyễn Viết Nga', role: 'Crew' },
//     { id: '2409237', name: 'Nguyễn Văn Quang Long', role: 'Crew' },
//     { id: '2409241', name: 'Trần Nguyễn Thị Hà', role: 'Crew' },
//     { id: '2409182', name: 'Nguyễn Thị Mai Thy', role: 'Crew' }
//   ]);

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
//           <button className="nav-btn">Chấm công</button>
//           <button className="nav-btn active">Nhân viên</button>
//           <button className="nav-btn">Bảng giá KM</button>
//           <button className="nav-btn">Nhập liệu hằng ngày</button>
//           <button className="nav-btn">360 Survey</button>
//           <button className="nav-btn">Thông báo</button>
//           <button className="nav-btn">Reports</button>
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
//               <th>Mã nhân viên</th>
//               <th>Họ và tên</th>
//               <th>Chức vụ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.id} onClick={() => navigate(`/employee/${employee.id}`)}>
//                 <td>{employee.id}</td>
//                 <td>{employee.name}</td>
//                 <td>{employee.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }

// export default NhanVien;
//////////////
import React, { useEffect, useState } from 'react';
import './NhanVien.css';

function NhanVien() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const idUser = localStorage.getItem('id_user'); // lấy id_user từ người đang đăng nhập
        console.log(idUser); // Kiểm tra xem id_user có tồn tại không

        if (!idUser) {
          console.error("id_user không có trong localStorage");
          return;
         }
        const response = await fetch(`http://localhost:3001/api/employee/${idUser}`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu nhân viên:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="admin-container">
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
          <button className="nav-btn active">Nhân viên</button>
          <button className="nav-btn">Chấm công</button>
          <button className="nav-btn">Bảng giá KM</button>
          <button className="nav-btn">Nhập liệu hằng ngày</button>
          <button className="nav-btn">360 Survey</button>
          <button className="nav-btn">Thông báo</button>
          <button className="nav-btn">Reports</button>
        </nav>
      </header>

      <div className="sub-nav">
        <button className="sub-nav-btn active">Danh sách nhân viên</button>
        <button className="sub-nav-btn">Cập nhật</button>
        <button className="sub-nav-btn">Biến động</button>
        <button className="sub-nav-btn">Công việc</button>
        <button className="sub-nav-btn">Thông tin</button>
        <button className="sub-nav-btn">Bảo trợ</button>
        <button className="sub-nav-btn">Công & Lương</button>
      </div>

      <main className="employee-list-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID User</th>
              <th>CMND/CCCD</th>
              <th>Nơi cấp</th>
              <th>Ngày cấp</th>
              <th>Tình trạng hôn nhân</th>
              <th>SĐT</th>
              <th>Địa chỉ</th>
              <th>Ngày tạo</th>
              <th>Ngày cập nhật</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.id_user}</td>
                <td>{employee.identity_number}</td>
                <td>{employee.issued_place}</td>
                <td>{employee.issued_date}</td>
                <td>{employee.marital_status}</td>
                <td>{employee.phone_number}</td>
                <td>{employee.address}</td>
                <td>{new Date(employee.created_at).toLocaleString()}</td>
                <td>{new Date(employee.updated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default NhanVien;

