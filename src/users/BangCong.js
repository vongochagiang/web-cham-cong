// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BangCong.css';

// function BangCong() {
//   const [currentMonth, setCurrentMonth] = useState(4);
//   const [currentYear, setCurrentYear] = useState(2025);
//   const navigate = useNavigate();

//   const workData = [
//     { 
//       day: '01', 
//       weekday: 'T3', 
//       shift: 'W', 
//       start: '17:00',
//       end: '22:00',
//       total: '5.00'
//     },
//     { 
//       day: '02', 
//       weekday: 'T4', 
//       shift: 'O'
//     },
//     { 
//       day: '03', 
//       weekday: 'T5', 
//       shift: 'O'
//     },
//     { 
//       day: '04', 
//       weekday: 'T6', 
//       shift: 'O'
//     },
//     { 
//       day: '05', 
//       weekday: 'T7', 
//       shift: 'W',
//       start: '18:00',
//       end: '22:30',
//       total: '4.50'
//     },
//     { 
//       day: '06', 
//       weekday: 'CN', 
//       shift: 'W',
//       start: '17:00',
//       end: '22:30',
//       total: '5.50'
//     },
//     { 
//       day: '07', 
//       weekday: 'T2', 
//       shift: 'H',
//       start: '18:00',
//       end: '22:30',
//       total: '4.50'
//     }
//   ];

//   const timeRecords = [
//     { day: '01', weekday: 'T3', times: ['16:57:15', '23:19:09'] },
//     { day: '02', weekday: 'T4' },
//     { day: '03', weekday: 'T5' },
//     { day: '04', weekday: 'T6' },
//     { day: '05', weekday: 'T7', times: ['17:38:17', '17:42:28', '22:37:05'] },
//     { day: '06', weekday: 'CN', times: ['15:14:16', '22:53:05'] }
//   ];

//   const handlePrevMonth = () => {
//     if (currentMonth === 1) {
//       setCurrentMonth(12);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 12) {
//       setCurrentMonth(1);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
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
//         <button className="tab-button active">Bảng công</button>
//         <button 
//           className="tab-button"
//           onClick={() => navigate('/')}
//         >
//           Đăng ký giờ làm
//         </button>
//         <button 
//           className="tab-button"
//           onClick={() => navigate('/thong-tin')}
//         >
//           Thông tin
//         </button>
//         <button className="tab-button" onClick={() => navigate('/ma-cham-cong')}>Mã chấm công</button>
//         <button className="tab-button">PA</button>
//       </div>

//       <div className="timesheet-container">
//         <div className="month-selector">
//           <span>Tháng</span>
//           <button onClick={handlePrevMonth} className="month-nav">←</button>
//           <span className="month-display">{currentMonth}</span>
//           <span>/</span>
//           <span className="year-display">{currentYear}</span>
//           <button onClick={handleNextMonth} className="month-nav">→</button>
//         </div>

//         <div className="timesheet-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Ngày</th>
//                 <th>Thứ</th>
//                 <th colSpan="3">Thời gian làm việc</th>
//                 <th>Giờ</th>
//               </tr>
//               <tr className="sub-header">
//                 <th></th>
//                 <th></th>
//                 <th>Ca</th>
//                 <th>Từ</th>
//                 <th>Đến</th>
//                 <th>Tổng</th>
//               </tr>
//             </thead>
//             <tbody>
//               {workData.map((record) => (
//                 <tr key={record.day}>
//                   <td>{record.day}</td>
//                   <td>{record.weekday}</td>
//                   <td>{record.shift}</td>
//                   <td>{record.start || ''}</td>
//                   <td>{record.end || ''}</td>
//                   <td>{record.total || ''}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="attendance-records">
//           <h3>Chấm công</h3>
//           <div className="month-selector">
//             <span>Tháng</span>
//             <button onClick={handlePrevMonth} className="month-nav">←</button>
//             <span className="month-display">{currentMonth}</span>
//             <span>/</span>
//             <span className="year-display">{currentYear}</span>
//             <button onClick={handleNextMonth} className="month-nav">→</button>
//           </div>
//           <div className="records-list">
//             {timeRecords.map((record) => (
//               <div key={record.day} className="record-item">
//                 <span className="record-day">{record.day} {record.weekday}</span>
//                 {record.times && (
//                   <span className="record-times">
//                     {record.times.join('; ')}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BangCong;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BangCong.css';

function BangCong() {
  const [currentMonth, setCurrentMonth] = useState(4);
  const [currentYear, setCurrentYear] = useState(2025);
  const navigate = useNavigate();

  const workData = [
    { 
      day: '01', 
      weekday: 'T3', 
      shift: 'W', 
      start: '17:00',
      end: '22:00',
      total: '5.00'
    },
    { 
      day: '02', 
      weekday: 'T4', 
      shift: 'O'
    },
    { 
      day: '03', 
      weekday: 'T5', 
      shift: 'O'
    },
    { 
      day: '04', 
      weekday: 'T6', 
      shift: 'O'
    },
    { 
      day: '05', 
      weekday: 'T7', 
      shift: 'W',
      start: '18:00',
      end: '22:30',
      total: '4.50'
    },
    { 
      day: '06', 
      weekday: 'CN', 
      shift: 'W',
      start: '17:00',
      end: '22:30',
      total: '5.50'
    },
    { 
      day: '07', 
      weekday: 'T2', 
      shift: 'H',
      start: '18:00',
      end: '22:30',
      total: '4.50'
    }
  ];

  const timeRecords = [
    { day: '01', weekday: 'T3', times: ['16:57:15', '23:19:09'] },
    { day: '02', weekday: 'T4' },
    { day: '03', weekday: 'T5' },
    { day: '04', weekday: 'T6' },
    { day: '05', weekday: 'T7', times: ['17:38:17', '17:42:28', '22:37:05'] },
    { day: '06', weekday: 'CN', times: ['15:14:16', '22:53:05'] }
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="app-container">
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
            <h2>Nguyễn Thị Mai Thy</h2>
            <span className="role">Crew</span>
          </div>
        </div>
      </div>

      <div className="nav-tabs">
        <button className="tab-button active">Bảng công</button>
        <button 
          className="tab-button"
          onClick={() => navigate('/')}
        >
          Đăng ký giờ làm
        </button>
        <button 
          className="tab-button"
          onClick={() => navigate('/thong-tin')}
        >
          Thông tin
        </button>
        <button className="tab-button">PA</button>
      </div>

      <div className="timesheet-container">
        <div className="month-selector">
          <span>Tháng</span>
          <button onClick={handlePrevMonth} className="month-nav">←</button>
          <span className="month-display">{currentMonth}</span>
          <span>/</span>
          <span className="year-display">{currentYear}</span>
          <button onClick={handleNextMonth} className="month-nav">→</button>
        </div>

        <div className="timesheet-table">
          <table>
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Thứ</th>
                <th colSpan="3">Thời gian làm việc</th>
                <th>Giờ</th>
              </tr>
              <tr className="sub-header">
                <th></th>
                <th></th>
                <th>Ca</th>
                <th>Từ</th>
                <th>Đến</th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              {workData.map((record) => (
                <tr key={record.day}>
                  <td>{record.day}</td>
                  <td>{record.weekday}</td>
                  <td>{record.shift}</td>
                  <td>{record.start || ''}</td>
                  <td>{record.end || ''}</td>
                  <td>{record.total || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="attendance-records">
          <h3>Chấm công</h3>
          <div className="month-selector">
            <span>Tháng</span>
            <button onClick={handlePrevMonth} className="month-nav">←</button>
            <span className="month-display">{currentMonth}</span>
            <span>/</span>
            <span className="year-display">{currentYear}</span>
            <button onClick={handleNextMonth} className="month-nav">→</button>
          </div>
          <div className="records-list">
            {timeRecords.map((record) => (
              <div key={record.day} className="record-item">
                <span className="record-day">{record.day} {record.weekday}</span>
                {record.times && (
                  <span className="record-times">
                    {record.times.join('; ')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BangCong;