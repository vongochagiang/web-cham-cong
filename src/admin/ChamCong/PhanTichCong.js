import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PhanTichCong.css';

function PhanTichCong() {
  const [selectedDate, setSelectedDate] = useState(new Date('2023/4/11'));
  const [selectedStore, setSelectedStore] = useState('280-HCM-PML');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [employees] = useState([
    {
      id: '1',
      name: 'Nguyễn Nam Linh',
      role: 'RGM L.1',
      type: 'W',
      timeStart: '08:00',
      timeEnd: '16:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '2',
      name: 'Lê Doãn Ngọc',
      role: 'SS',
      type: 'W',
      timeStart: '10:00',
      timeEnd: '18:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '3',
      name: 'Võ Đăng Khoa',
      role: '',
      type: 'W',
      timeStart: '14:00',
      timeEnd: '22:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: '09:42'
    },
    {
      id: '4',
      name: 'Hoàng Nguyễn Hoàn Trang',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '5',
      name: 'Nguyễn Gia Hưng',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '6',
      name: 'Tống Thị Minh Thủy',
      role: 'Crew',
      type: 'W',
      timeStart: '09:00',
      timeEnd: '15:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: '09:04'
    },
    {
      id: '7',
      name: 'Mai Vũ Huyền Trang',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '8',
      name: 'Lê Tấn Phát',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '9',
      name: 'Nguyễn Lý Đa Nghi',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '10',
      name: 'Nguyễn Văn Quang Long',
      role: 'Crew',
      type: 'W',
      timeStart: '16:00',
      timeEnd: '22:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '11',
      name: 'Trần Nguyễn Yến Nhi',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '12',
      name: 'Nguyễn Anh Thư',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '13',
      name: 'Yến Hoàng Tú',
      role: 'Crew',
      type: 'W',
      timeStart: '06:00',
      timeEnd: '13:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '14',
      name: 'Nguyễn Thùy Thanh Ngọc',
      role: 'Crew',
      type: 'W',
      timeStart: '06:00',
      timeEnd: '14:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '15',
      name: 'Phạm Thị Phương Thảo',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '16',
      name: 'Lê Thị Mỹ Trinh',
      role: 'Crew',
      type: 'W',
      timeStart: '08:00',
      timeEnd: '14:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '17',
      name: 'Võ Ngọc Hải Giang',
      role: 'Crew',
      type: 'W',
      timeStart: '17:00',
      timeEnd: '23:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '18',
      name: 'Nguyễn Thị Kim Thy',
      role: 'Crew',
      type: 'W',
      timeStart: '17:00',
      timeEnd: '23:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '19',
      name: 'Trần Thị Huyền Như',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '20',
      name: 'Nguyễn Hiền Huyền',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '21',
      name: 'Nguyễn Hoàng Minh Hùng',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '22',
      name: 'Lại Tấn Nghĩa',
      role: 'Crew',
      type: 'W',
      timeStart: '16:00',
      timeEnd: '22:00',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '23',
      name: 'Nguyễn Hồng Phúc',
      role: 'Crew',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: ''
    },
    {
      id: '24',
      name: 'Vũ Thị Hồng Chiến',
      role: 'H Master',
      type: '',
      timeStart: '',
      timeEnd: '',
      actualStart: '',
      actualEnd: '',
      totalHours: '0.0',
      nightHours: '0.0',
      note: 'N-08'
    }
  ]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const formatDate = (date) => {
    return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
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
        </div>
        <nav className="main-nav">
          <button className="nav-btn active">Chấm công</button>
          <button className="nav-btn">Nhân viên</button>
          <button className="nav-btn">Đánh giá PA</button>
          <button className="nav-btn">Nhập liệu hằng ngày</button>
          <button className="nav-btn">360 Survey</button>
          <button className="nav-btn">Thông báo</button>
          <button className="nav-btn">Report</button>
        </nav>
      </header>

      <div className="sub-nav">
        <button className="sub-nav-btn">Lịch làm việc</button>
        <button className="sub-nav-btn active">Phân tích công</button>
        <button className="sub-nav-btn">RGM duyệt công</button>
        <button className="sub-nav-btn">AM xét duyệt</button>
        <button className="sub-nav-btn">C&B điều chỉnh</button>
        <button className="sub-nav-btn">Mở khóa bảng công</button>
        <button className="sub-nav-btn">Roster setting</button>
      </div>

      <div className="main-content">
        <div className="store-selector">
          <div className="store-section">
            <label>Nhà hàng</label>
            <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
              <option value="280-HCM-PML">280-HCM-PML</option>
            </select>
          </div>
          <div className="date-section">
            <label>Ngày công</label>
            <div className="date-picker-wrapper">
              <span className="date-display">{formatDate(selectedDate)}</span>
              <div className="date-controls">
                <button 
                  className="calendar-icon"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  <FaCalendarAlt />
                </button>
                <button 
                  className="nav-btn"
                  onClick={() => handleDateChange(new Date(selectedDate.setDate(selectedDate.getDate() - 1)))}
                >
                  &lt;
                </button>
                <button 
                  className="nav-btn"
                  onClick={() => handleDateChange(new Date(selectedDate.setDate(selectedDate.getDate() + 1)))}
                >
                  &gt;
                </button>
              </div>
              {isCalendarOpen && (
                <div className="calendar-popup">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    inline
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>
              )}
            </div>
          </div>
          <button className="analyze-btn">Tải dữ liệu</button>
          <button className="analyze-btn">Phân tích công</button>
        </div>

        <div className="timesheet-table">
          <table>
            <thead>
              <tr>
                <th colSpan="3">Thông tin nhân viên</th>
                <th colSpan="4">Lịch làm việc</th>
                <th colSpan="4">Dữ liệu được phân tích</th>
                <th>Giờ làm</th>
                <th>Dữ liệu chấm công</th>
              </tr>
              <tr>
                <th>Ấn F11 để thông tin chi tiết</th>
                <th>Ca</th>
                <th>Từ</th>
                <th>Nghỉ</th>
                <th>Vào</th>
                <th>Đến</th>
                <th>Từ</th>
                <th>Nghỉ</th>
                <th>Vào</th>
                <th>Đến</th>
                <th>Tổng</th>
                <th>Đêm</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>
                    <div className="employee-info">
                      <div className="name">{employee.name}</div>
                      <div className="role">{employee.role}</div>
                    </div>
                  </td>
                  <td>{employee.type}</td>
                  <td>{employee.timeStart}</td>
                  <td></td>
                  <td></td>
                  <td>{employee.timeEnd}</td>
                  <td>{employee.actualStart}</td>
                  <td></td>
                  <td></td>
                  <td>{employee.actualEnd}</td>
                  <td>{employee.totalHours}</td>
                  <td>{employee.nightHours}</td>
                  <td>{employee.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="note-panel">
          <h3>Lưu ý</h3>
          <div className="note-content">
            <p>Nhân viên có chấm công nhưng không hiển thị dữ liệu chấm công ở mục này, vui lòng kiểm tra các thông tin sau:</p>
            <p>1) Nếu nhân viên đang sử dụng thẻ chấm công:</p>
            <p>a) Mã thẻ được thiết lập trên phần mềm có khớp với mã thẻ được máy chấm công ghi nhận hay không?</p>
            <p>- Xem thông tin thẻ được gắn cho nhân viên trên website.</p>
            <p>b) Thẻ chấm công của nhân viên có thời gian sử dụng hết hạn?</p>
            <p>- Xem thông tin thời gian sử dụng thẻ của nhân viên trên website.</p>
            <p>2) Nếu nhân viên chấm công bằng vân tay:</p>
            <p>- Dùng phần mềm KHR Attendance để cập nhật dữ liệu dấu vân tay của nhân viên lên hệ thống.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhanTichCong;