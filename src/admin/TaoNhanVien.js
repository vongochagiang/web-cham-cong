import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './TaoNhanVien.css';

const TaoNhanVien = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    id_user: '',
    identity_number: '',
    issued_place: '',
    issued_date: '',
    marital_status: '',
    phone_number: '',
    address: '',
    created_at: new Date().toISOString().slice(0, 10),
    role_user: 'part-time',
    department_user: 'cook',
  });
  const [qrValue, setQrValue] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    // Tạo dữ liệu QR
    const qrData = JSON.stringify({
      id_user: form.id_user,
      email: form.email,
      // ...có thể thêm các trường khác nếu muốn
    });
    // Tạo URL ảnh QR code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=200x200`;
    setQrValue(qrUrl);
    setShowQR(true);

    // Gửi dữ liệu lên server để lưu vào DB (user + employee)
    try {
      const res = await fetch('http://localhost:3001/api/taonhanvien', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          qr_code: qrUrl // Lưu URL ảnh QR code
        })
      });
      if (!res.ok) {
        // Log chi tiết lỗi HTTP
        const text = await res.text();
        console.error('Lỗi HTTP:', res.status, text);
        alert('Tạo nhân viên thất bại! (HTTP ' + res.status + ')');
        return;
      }
      const data = await res.json();
      if (data.success) {
        alert('Tạo nhân viên thành công!');
      } else {
        alert('Tạo nhân viên thất bại!');
      }
    } catch (err) {
      console.error('Lỗi fetch:', err);
      alert('Lỗi kết nối server!');
    }
  };

  return (
    <div className="tao-nhan-vien-container">
      <h2>Tạo Nhân Viên Mới</h2>
      <form className="tao-nhan-vien-form" onSubmit={handleCreate}>
        <input name="id_user" placeholder="ID User" value={form.id_user} onChange={handleChange} required /><br />
        <input name="email" placeholder="Gmail" value={form.email} onChange={handleChange} required /><br />
        <input name="password" placeholder="Mật khẩu" type="password" value={form.password} onChange={handleChange} required /><br />
        <select
          name="role_user"
          value={form.role_user}
          onChange={handleChange}
          required
        >
          <option value="part-time">Part-time</option>
          <option value="fulltime">Fulltime</option>
          <option value="manager">Manager</option>
        </select>
        <br />
        <select
          name="department_user"
          value={form.department_user}
          onChange={handleChange}
          required
        >
          <option value="cook">Cook</option>
          <option value="supply">Supply</option>
          <option value="cashier">Cashier</option>
          <option value="loopy">Loopy</option>
        </select>
        <br />
        <input name="identity_number" placeholder="CMND/CCCD" value={form.identity_number} onChange={handleChange} required /><br />
        <input name="issued_place" placeholder="Nơi cấp" value={form.issued_place} onChange={handleChange} required /><br />
        <input name="issued_date" placeholder="Ngày cấp" type="date" value={form.issued_date} onChange={handleChange} required /><br />
        <input name="marital_status" placeholder="Tình trạng hôn nhân" value={form.marital_status} onChange={handleChange} required /><br />
        <input name="phone_number" placeholder="Số điện thoại" value={form.phone_number} onChange={handleChange} required /><br />
        <input name="address" placeholder="Địa chỉ" value={form.address} onChange={handleChange} required /><br />
        <input name="created_at" placeholder="Ngày tạo" type="date" value={form.created_at} onChange={handleChange} required /><br />
        <button type="submit">Tạo nhân viên & sinh mã QR</button>
      </form>

      {showQR && (
        <div className="qr-section">
          <h3>Mã QR chấm công cho nhân viên</h3>
          <img src={qrValue} alt="QR Code" width={200} />
          <div>
            <button onClick={() => setShowQR(false)}>Ẩn mã QR</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaoNhanVien;