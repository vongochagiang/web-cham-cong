import React, { useState } from "react";
import axios from "axios";
import './MaChamCong.css';

const MaChamCong = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
 const url='http://localhost:3001'
  const handleGetQR = async () => {
    setLoading(true);
    const id_user = localStorage.getItem("id_user");
    try {
      const res = await axios.get(`${url}/api/machamcong/${id_user}`);
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
      alert("Lỗi lấy thông tin nhân viên!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="qr-container">
      <h2>Mã QR chấm công của bạn</h2>
      <button onClick={handleGetQR}>Lấy mã</button>
      {loading && <div>Đang tải thông tin nhân viên...</div>}
      {user && (
        <div>
          <p>
            <b>{user.name_user}</b> ({user.id_user})
          </p>
          {user.qr_code_url_user ? (
            <img src={user.qr_code_url_user} alt="QR Code" width={200} />
          ) : (
            <div>Không có mã QR!</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MaChamCong;
















