import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DangKy.css';

function DangKy() {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(4);
  const [currentYear, setCurrentYear] = useState(2025);
  const [days, setDays] = useState([]);
  const [showStatusDropdown, setShowStatusDropdown] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

  const getDaysInMonth = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    
    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month - 1, i);
      const weekday = getWeekdayName(date.getDay());
      daysArray.push({
        day: i,
        weekday: weekday,
        status: 'free',
        shifts: [{
          startTime: '',
          endTime: ''
        }],
        hasSecondShift: false
      });
    }
    return daysArray;
  };

  const getWeekdayName = (dayIndex) => {
    const adjustedIndex = (dayIndex + 6) % 7;
    const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    return weekdays[adjustedIndex];
  };

  const handleStatusSelect = (dayIndex, newStatus) => {
    const newDays = [...days];
    newDays[dayIndex].status = newStatus;
    
    if (newStatus === 'work') {
      newDays[dayIndex].shifts = [{
        startTime: '',
        endTime: ''
      }];
      newDays[dayIndex].hasSecondShift = false;
    } else {
      newDays[dayIndex].shifts = [{
        startTime: '',
        endTime: ''
      }];
      newDays[dayIndex].hasSecondShift = false;
    }
    
    setDays(newDays);
    setShowStatusDropdown(null);
  };

  const handleTimeChange = (dayIndex, shiftIndex, field, value) => {
    const newDays = [...days];
    newDays[dayIndex].shifts[shiftIndex][field] = value;
    setDays(newDays);
  };

  const toggleSecondShift = (dayIndex) => {
    const newDays = [...days];
    if (!newDays[dayIndex].hasSecondShift) {
      newDays[dayIndex].shifts.push({
        startTime: '',
        endTime: ''
      });
      newDays[dayIndex].hasSecondShift = true;
    } else {
      newDays[dayIndex].shifts.pop();
      newDays[dayIndex].hasSecondShift = false;
    }
    setDays(newDays);
  };

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

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const newDays = getDaysInMonth(currentMonth, currentYear);
    setDays(newDays);
  }, [currentMonth, currentYear]);

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
          <div 
            className="user-info"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <h2>{userData?.name || 'User'}</h2>
            <span className="role">{userData?.role || 'Role'}</span>
            {showDropdown && (
              <div className="user-dropdown">
                <div className="user-dropdown-item">
                  <i className="fas fa-user"></i>
                  Thông tin cá nhân
                </div>
                <div 
                  className="user-dropdown-item logout"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i>
                  Đăng xuất
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="nav-tabs">
        <button 
          className="tab-button"
          onClick={() => navigate('/bang-cong')}
        >
          Bảng công
        </button>
        <button className="tab-button active">Đăng ký giờ làm</button>
        <button 
          className="tab-button"
          onClick={() => navigate('/thong-tin')}
        >
          Thông tin
        </button>
        <button className="tab-button">PA</button>
      </div>

      <div className="schedule-container">
        <h2 className="schedule-title">Đăng ký thời gian làm việc</h2>
        
        <div className="month-selector">
          <span>Tháng</span>
          <button onClick={handlePrevMonth} className="month-nav">←</button>
          <span className="month-display">{currentMonth}</span>
          <span>/</span>
          <span className="year-display">{currentYear}</span>
          <button onClick={handleNextMonth} className="month-nav">→</button>
        </div>

        <button className="save-button">
          <span className="save-icon">📋</span> Lưu dữ liệu
        </button>

        <div className="guide-section">
          <span className="guide-text">Hướng dẫn đăng ký</span>
          <span className="guide-icon">?</span>
        </div>

        <div className="schedule-grid">
          {days.map((day, index) => (
            <div key={day.day} className="day-row">
              <div className="day-number">{day.day}</div>
              <div className="weekday">{day.weekday}</div>
              <div className="status-selector">
                <div 
                  className={`status-box ${day.status}`}
                  onClick={() => setShowStatusDropdown(index)}
                >
                  {day.status === 'work' ? 'Khung giờ làm' : 
                   day.status === 'free' ? 'Free' : 'OFF'}
                </div>
                {showStatusDropdown === index && (
                  <div className="status-dropdown">
                    <div 
                      className="status-option free"
                      onClick={() => handleStatusSelect(index, 'free')}
                    >
                      Free
                    </div>
                    <div 
                      className="status-option off"
                      onClick={() => handleStatusSelect(index, 'off')}
                    >
                      OFF
                    </div>
                    <div 
                      className="status-option work"
                      onClick={() => handleStatusSelect(index, 'work')}
                    >
                      Khung giờ làm
                    </div>
                  </div>
                )}
              </div>
              {day.status === 'work' && (
                <div className="shifts-container">
                  {day.shifts.map((shift, shiftIndex) => (
                    <div key={shiftIndex} className="shift-row">
                      <input 
                        type="text" 
                        className="time-input" 
                        value={shift.startTime}
                        onChange={(e) => handleTimeChange(index, shiftIndex, 'startTime', e.target.value)}
                        placeholder="HH:mm"
                      />
                      <span className="time-separator">-</span>
                      <input 
                        type="text" 
                        className="time-input" 
                        value={shift.endTime}
                        onChange={(e) => handleTimeChange(index, shiftIndex, 'endTime', e.target.value)}
                        placeholder="HH:mm"
                      />
                    </div>
                  ))}
                  <div className="shift-controls">
                    <button 
                      className="toggle-shift-button"
                      onClick={() => toggleSecondShift(index)}
                    >
                      {day.hasSecondShift ? '- Xóa ca' : '+ Thêm ca'}
                    </button>
                    <button 
                      className="delete-button"
                      onClick={() => handleStatusSelect(index, 'free')}
                    >×</button>
                    <input type="checkbox" className="day-checkbox" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DangKy; 