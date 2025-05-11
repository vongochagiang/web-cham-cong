import React, { useRef, useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

import './QuetMa.css'; // optional nếu bạn có CSS

const QuetMa = () => {
  const qrCodeRegionId = "qr-reader";
  const html5QrCodeRef = useRef(null);
  const [scanning, setScanning] = useState(false);
  const [found, setFound] = useState(false);
  const [message, setMessage] = useState('');

  // Tách hàm khởi tạo scan ra khỏi nút bấm
  useEffect(() => {
    if (!scanning) return;

    html5QrCodeRef.current = new Html5Qrcode(qrCodeRegionId);

    html5QrCodeRef.current.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      async (decodedText) => {
        setFound(true);
        setMessage("Đã nhận diện mã QR! Đang gửi dữ liệu...");

        // Xử lý nếu mã là URL chứa data
        let qrData = decodedText;
        try {
          const url = new URL(decodedText);
          const dataParam = url.searchParams.get('data');
          if (dataParam) {
            qrData = decodeURIComponent(dataParam);
          }
        } catch (e) {
          // Không phải URL, giữ nguyên
        }

        // Gửi dữ liệu lên backend
        try {
          const res = await fetch('http://localhost:3001/api/quetma', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ qrData })
          });
          const data = await res.json();
          if (data.success) {
            setMessage(data.message || "Check-in thành công!");
          } else {
            setMessage(data.message || "Check-in thất bại!");
          }
        } catch (err) {
          setMessage("Lỗi kết nối server!");
        }
        // Nếu muốn dừng sau khi quét 1 lần:
        // setScanning(false);
      },
      (errorMessage) => {
        // Xử lý lỗi quét (nếu cần)
      }
    );

    // Dọn dẹp khi component unmount hoặc khi scanning=false
    return () => {
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current.stop().then(() => {
          if (html5QrCodeRef.current) {
            html5QrCodeRef.current.clear();
            html5QrCodeRef.current = null;
          }
        }).catch(() => {
          html5QrCodeRef.current = null;
        });
      }
    };
    // eslint-disable-next-line
  }, [scanning]);

  const handleStartScan = () => {
    setFound(false);
    setMessage('');
    setScanning(true);
  };

  const stopScan = async () => {
    setScanning(false);
  };

  return (
    <div className="qr-container" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Quét mã QR nhân viên</h2>
      {!scanning && (
        <button onClick={handleStartScan}>Quét Mã</button>
      )}
      {scanning && (
        <>
          <div
            id={qrCodeRegionId}
            style={{
              width: 300,
              height: 300,
              margin: 'auto',
              border: found ? '4px solid #4caf50' : '4px solid #e3e3e3',
              borderRadius: 8,
              transition: 'border 0.2s'
            }}
          />
          {message && <div style={{color: found ? '#4caf50' : '#d32f2f', marginTop: 10}}>{message}</div>}
          <button onClick={stopScan} style={{ marginTop: 10 }}>Dừng quét</button>
        </>
      )}
    </div>
  );
};

export default QuetMa;
