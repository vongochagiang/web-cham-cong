// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ThongTin.css';

// function ThongTin() {
//   const navigate = useNavigate();
//   const userInfo = {
//     name: 'Nguyễn Thị Mai Thy',
//     id: '2409182',
//     role: 'Crew',
//     cccd: {
//       number: '••••••••••••',
//       issueDate: '••/••/••••',
//       issuePlace: 'Cục Cảnh Sát Quản Lý Hành Chính Về Trật Tự Xã Hội'
//     },
//     cmnd: {
//       number: '',
//       issueDate: '',
//       issuePlace: ''
//     },
//     taxCode: {
//       number: '••••••••••',
//       issueDate: '••/••/••••'
//     },
//     socialInsurance: '',
//     phone: '••••••••••',
//     email: 'Maithy200103@Gmail.Com',
//     storeDocument: true
//   };

//   return (
//     <div className="app-container">
//       <div className="header">
//         <div className="back-button">←</div>
//         <div className="header-content">
//           <div className="logo-title">
//             <img 
//               src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png" 
//               alt="Logo" 
//               className="logo" 
//             />
//             <div className="title-container">
//               <h1>Yang VietNam | HRS</h1>
//               <span className="subtitle">hr.yangvietnam.com.vn</span>
//             </div>
//           </div>
//           <div className="user-info">
//             <h2>Nguyễn Thị Mai Thy</h2>
//             <span className="role">Crew</span>
//           </div>
//         </div>
//       </div>

//       <div className="nav-tabs">
//         <button 
//           className="tab-button"
//           onClick={() => navigate('/cham-cong')}
//         >
//           Bảng công
//         </button>
//         <button 
//           className="tab-button"
//           onClick={() => navigate('/')}
//         >
//           Đăng ký giờ làm
//         </button>
//         <button className="tab-button active">Thông tin</button>
//         <button className="tab-button">PA</button>
//       </div>

//       <div className="info-container">
//         <div className="user-header">
//           <h2>{userInfo.name}</h2>
//           <div className="user-subinfo">
//             <span>{userInfo.id}</span>
//             <span>{userInfo.role}</span>
//           </div>
//         </div>

//         <div className="info-section">
//           <h3 className="section-title">Thông tin định danh</h3>
          
//           <div className="info-group">
//             <div className="info-row">
//               <div className="info-label">Số CCCD</div>
//               <div className="info-value">{userInfo.cccd.number}</div>
//             </div>
//             <div className="info-row">
//               <div className="info-label">Ngày cấp</div>
//               <div className="info-value">{userInfo.cccd.issueDate}</div>
//             </div>
//             <div className="info-row">
//               <div className="info-label">Nơi cấp</div>
//               <div className="info-value">{userInfo.cccd.issuePlace}</div>
//             </div>
//           </div>

//           <div className="info-group">
//             <div className="info-row">
//               <div className="info-label">Số CMND</div>
//               <div className="info-value">{userInfo.cmnd.number}</div>
//             </div>
//             <div className="info-row">
//               <div className="info-label">Ngày cấp</div>
//               <div className="info-value">{userInfo.cmnd.issueDate}</div>
//             </div>
//             <div className="info-row">
//               <div className="info-label">Nơi cấp</div>
//               <div className="info-value">{userInfo.cmnd.issuePlace}</div>
//             </div>
//           </div>

//           <div className="info-group">
//             <div className="info-row">
//               <div className="info-label">Mã số thuế</div>
//               <div className="info-value">{userInfo.taxCode.number}</div>
//             </div>
//             <div className="info-row">
//               <div className="info-label">Ngày cấp</div>
//               <div className="info-value">{userInfo.taxCode.issueDate}</div>
//             </div>
//           </div>

//           <div className="info-group">
//             <div className="info-row">
//               <div className="info-label">Số sổ BH</div>
//               <div className="info-value">{userInfo.socialInsurance}</div>
//               <div className="checkbox-container">
//                 <input 
//                   type="checkbox" 
//                   checked={userInfo.storeDocument} 
//                   readOnly 
//                 />
//                 <label>Lưu tại công ty</label>
//               </div>
//             </div>
//           </div>

//           <div className="info-group">
//             <div className="info-row">
//               <div className="info-label">Số điện thoại</div>
//               <div className="info-value">{userInfo.phone}</div>
//             </div>
//           </div>

//           <div className="info-group">
//             <div className="info-row">
//               <div className="info-label">Thư điện tử - cá nhân</div>
//               <div className="info-value email">{userInfo.email}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ThongTin;





import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ThongTin.css';

function ThongTin() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Giả định id_user là 1, có thể lấy từ localStorage hoặc context tùy bạn
    const id_user = 1;
    axios.get(`http://localhost:3001/api/thongtin/${id_user}`)
      .then(res => {
        const data = res.data;
        setUserInfo({
          name: data.name_user,
          id: data.id_user,
          role: data.role_user,
          cccd: {
            number: data.identity_number,
            issueDate: data.issued_date,
            issuePlace: data.issued_place
          },
          cmnd: {
            number: '', issueDate: '', issuePlace: ''
          },
          taxCode: {
            number: '', issueDate: ''
          },
          socialInsurance: '',
          phone: data.phone_number,
          email: '', // Chưa thấy trong DB, có thể thêm sau
          storeDocument: true
        });
      })
      .catch(err => {
        console.error('Lỗi khi tải thông tin nhân viên:', err);
      });
  }, []);

  if (!userInfo) return <div>Đang tải thông tin...</div>;

  return (
    <div className="app-container">
      {/* header + logo + nav tabs như cũ */}
      <div className="header">
        <div className="back-button">←</div>
        <div className="header-content">
          <div className="logo-title">
            <img 
              src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png" 
              alt="Logo" 
              className="logo" 
            />
            <div className="title-container">
              <h1>Yang VietNam | HRS</h1>
              <span className="subtitle">hr.yangvietnam.com.vn</span>
            </div>
          </div>
          <div className="user-info">
            <h2>{userInfo.name}</h2>
            <span className="role">{userInfo.role}</span>
          </div>
        </div>
      </div>

      <div className="nav-tabs">
        <button className="tab-button" onClick={() => navigate('/cham-cong')}>Bảng công</button>
        <button className="tab-button" onClick={() => navigate('/')}>Đăng ký giờ làm</button>
        <button className="tab-button active">Thông tin</button>
        <button className="tab-button" onClick={() => navigate('/ma-cham-cong')}>Mã chấm công</button>
        <button className="tab-button">PA</button>
      </div>

      <div className="info-container">
        <div className="user-header">
          <h2>{userInfo.name}</h2>
          <div className="user-subinfo">
            <span>{userInfo.id}</span>
            <span>{userInfo.role}</span>
          </div>
        </div>

        <div className="info-section">
          <h3 className="section-title">Thông tin định danh</h3>

          <div className="info-group">
            <div className="info-row"><div className="info-label">Số CCCD</div><div className="info-value">{userInfo.cccd.number}</div></div>
            <div className="info-row"><div className="info-label">Ngày cấp</div><div className="info-value">{userInfo.cccd.issueDate}</div></div>
            <div className="info-row"><div className="info-label">Nơi cấp</div><div className="info-value">{userInfo.cccd.issuePlace}</div></div>
          </div>

          <div className="info-group">
            <div className="info-row"><div className="info-label">Số điện thoại</div><div className="info-value">{userInfo.phone}</div></div>
          </div>

          <div className="info-group">
            <div className="info-row"><div className="info-label">Thư điện tử - cá nhân</div><div className="info-value email">{userInfo.email}</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThongTin;