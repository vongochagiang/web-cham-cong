// import React, { useRef, useState } from "react";

// const CameraToggle = () => {
//   const videoRef = useRef(null);
//   const streamRef = useRef(null); // lưu stream để stop
//   const [isCameraOn, setIsCameraOn] = useState(false);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: {
//           facingMode: "user" // dùng camera trước
//         },
//         audio: false,
//       });
//       streamRef.current = stream;
//       videoRef.current.srcObject = stream;
//       videoRef.current.play();
//       setIsCameraOn(true);
//     } catch (error) {
//       console.error("Không thể bật camera:", error);
//       alert("Không thể bật camera. Có thể bạn chưa cho phép truy cập.");
//     }
//   };

//   const stopCamera = () => {
//     if (streamRef.current) {
//       streamRef.current.getTracks().forEach((track) => track.stop());
//       streamRef.current = null;
//     }
//     if (videoRef.current) {
//       videoRef.current.srcObject = null;
//     }
//     setIsCameraOn(false);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Camera trước</h2>
//       <video ref={videoRef} style={{ width: "100%", maxWidth: "500px" }} autoPlay />
//       <div style={{ marginTop: "20px" }}>
//         {!isCameraOn ? (
//           <button onClick={startCamera}>Bật Camera</button>
//         ) : (
//           <button onClick={stopCamera}>Tắt Camera</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CameraToggle;







import React, { useRef, useState } from "react";
import "./Quet_Ma.css"; // import CSS riêng

const CameraToggle = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setIsCameraOn(true);
    } catch (error) {
      console.error("Không thể bật camera:", error);
      alert("Không thể bật camera. Có thể bạn chưa cho phép truy cập.");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
  };

  return (
    <div>
      {/* --- HEADER & SUB-NAV --- */}
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
        <button className="sub-nav-btn">Phân tích công</button>
        <button className="sub-nav-btn">RGM duyệt công</button>
        <button className="sub-nav-btn">AM xét duyệt</button>
        <button className="sub-nav-btn">C&B điều chỉnh</button>
        <button className="sub-nav-btn">Mở khóa bảng công</button>
        <button className="sub-nav-btn">Roster setting</button>
      </div>
      {/* --- END HEADER & SUB-NAV --- */}

      <div className="camera-container">
        <h2 className="camera-title"></h2>
        <video ref={videoRef} className="camera-video" autoPlay />
        <div className="camera-buttons">
          {!isCameraOn ? (
            <button className="camera-btn" onClick={startCamera}>
              Bật Camera
            </button>
          ) : (
            <button className="camera-btn" onClick={stopCamera}>
              Tắt Camera
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CameraToggle;
