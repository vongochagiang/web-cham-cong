import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LichLamViec.css';

function LichLamViec() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStore, setSelectedStore] = useState('280 BCM PXGL');
  const [employees] = useState([
    { 
      id: '2409174',
      name: 'Nguyễn Nam Linh',
      role: 'ROM L.1',
      shifts: [{ type: 'W', start: '08:00', end: '16:00', hours: '8.00' }]
    },
    {
      id: '2409564',
      name: 'Lê Doãn Ngọc',
      role: 'SS',
      shifts: [{ type: 'W', start: '10:00', end: '18:00', hours: '8.00' }]
    },
    {
      id: '2409363',
      name: 'Võ Đăng Khoa',
      role: 'SS',
      shifts: [{ type: 'W', start: '14:00', end: '22:00', hours: '8.00' }]
    },
    {
      id: 'C001',
      name: 'Cashier',
      role: '',
      shifts: []
    },
    {
      id: '2409213',
      name: 'Lê Thị Mỹ Trinh',
      role: 'TRX',
      shifts: [{ type: 'W', start: '09:00', end: '14:00', hours: '5.00' }]
    },
    {
      id: '2409235',
      name: 'Võ Ngọc Hải Giang',
      role: 'TRX',
      shifts: [{ type: 'W', start: '17:00', end: '22:00', hours: '5.00' }]
    },
    {
      id: '2412378',
      name: 'Lại Văn Nghĩa',
      role: 'TRX',
      shifts: [{ type: 'W', start: '18:00', end: '22:00', hours: '4.00' }]
    }
  ]);

  const handleDateChange = (increment) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + increment);
    setSelectedDate(newDate);
  };

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
          <button className="nav-btn">Chấm công</button>
          <button className="nav-btn">Nhân viên</button>
          <button className="nav-btn">Bảng giá KM</button>
          <button className="nav-btn">Nhập liệu hằng ngày</button>
          <button className="nav-btn">360 Survey</button>
          <button className="nav-btn">Thông báo</button>
          <button className="nav-btn">Reports</button>
        </nav>
      </header>

      <div className="sub-nav">
        <button className="sub-nav-btn active">Lịch làm việc</button>
        <button className="sub-nav-btn">Phân tích công</button>
        <button className="sub-nav-btn">BGM duyệt công</button>
        <button className="sub-nav-btn">AM xét duyệt</button>
        <button className="sub-nav-btn">Chỉ tiêu nhân viên</button>
        <button className="sub-nav-btn">Mô hình bếp công</button>
        <button className="sub-nav-btn">Report setting</button>
      </div>

      <div className="schedule-header">
        <div className="store-selector">
          <label>Nhà hàng</label>
          <select 
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
          >
            <option value="280 BCM PXGL">280 BCM PXGL</option>
          </select>
          <label>Ngày</label>
          <div className="date-navigation">
            <button onClick={() => handleDateChange(-1)}>&lt;</button>
            <span>{selectedDate.getDate()} / {selectedDate.getMonth() + 1} / {selectedDate.getFullYear()}</span>
            <button onClick={() => handleDateChange(1)}>&gt;</button>
          </div>
        </div>
      </div>

      <div className="schedule-content">
        <div className="schedule-grid">
          <div className="time-slots">
            {Array.from({ length: 24 }, (_, i) => (
              <div key={i} className="time-slot">
                {i}
              </div>
            ))}
          </div>

          <div className="employee-schedules">
            {employees.map((employee) => (
              <div key={employee.id} className="employee-row">
                <div className="employee-info">
                  <div className="employee-name">{employee.name}</div>
                  <div className="employee-role">{employee.role}</div>
                </div>
                <div className="shift-blocks">
                  {employee.shifts.map((shift, index) => {
                    const startHour = parseInt(shift.start.split(':')[0]);
                    const endHour = parseInt(shift.end.split(':')[0]);
                    const width = (endHour - startHour) * 30;
                    const left = startHour * 30;

                    return (
                      <div
                        key={index}
                        className="shift-block"
                        style={{
                          left: `${left}px`,
                          width: `${width}px`
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="target-panel">
          <h3>Thiết lập chỉ tiêu</h3>
          <div className="target-content">
            <div className="store-info">
              <label>Nhà hàng</label>
              <select>
                <option>280 BCM PXGL</option>
              </select>
            </div>
            <div className="date-info">
              <label>Tháng</label>
              <div className="month-selector">
                <button>&lt;</button>
                <span>4/2025</span>
                <button>&gt;</button>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <label>Doanh thu (Dự kiến)</label>
                <span>701,103,000</span>
              </div>
              <div className="metric">
                <label>Tỷ lệ lương (GoL)</label>
                <span>14.17%</span>
              </div>
              <div className="metric">
                <label>NCM (3,500)</label>
                <span>0</span>
              </div>
            </div>
            <div className="daily-targets">
              <table>
                <thead>
                  <tr>
                    <th>Ngày</th>
                    <th>Doanh thu</th>
                    <th>Quỹ lương</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>T4</td><td>10,000,000</td><td>1,417,000</td></tr>
                  <tr><td>T5</td><td>10,000,000</td><td>1,417,000</td></tr>
                  <tr><td>T6</td><td>20,000,000</td><td>1,417,000</td></tr>
                  <tr><td>T7</td><td>25,000,000</td><td>4,095,500</td></tr>
                  <tr><td>CN</td><td>25,000,000</td><td>3,542,500</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LichLamViec;