import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Login from './users/Login';
import DangKy from './users/DangKy';
import BangCong from './users/BangCong';
import ThongTin from './users/ThongTin';
import NhanVien from './admin/NhanVien';
import QuetMa from './admin/QuetMa';
import Quet_Ma from './admin/Quet_Ma';
import LichLamViec from './admin/ChamCong/LichLamViec';
import PhanTichCong from './admin/ChamCong/PhanTichCong';
import MaChamCong from './users/MaChamCong';
import TaoNhanVien from './admin/TaoNhanVien';

import './App.css';

function App() {
  // Kiểm tra xem người dùng đã đăng nhập chưa
  const isAuthenticated = () => {
    // return localStorage.getItem('user') !== null || sessionStorage.getItem('user') !== null;
  
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  
  };

  // Component bảo vệ route
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" replace />;
    }
    return (
      <>
        {children}
      </>
    );



    // const user = isAuthenticated();
    // if (!user) {
    //   return <Navigate to="/login" replace />;
    // }

    // if (requiredRole && user.role !== requiredRole) {
    //   // Nếu vai trò không khớp, bạn có thể chuyển hướng đến trang lỗi hoặc trang không được phép
    //   return <Navigate to="/unauthorized" replace />; // Tạo một route /unauthorized nếu cần
    // }

    // return (
    //   <>
    //     {children}
    //   </>
    // );



  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <DangKy />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cham-cong" 
          element={ 
            <ProtectedRoute>
              <BangCong />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/thong-tin" 
          element={
            <ProtectedRoute>
              <ThongTin />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/nhan-vien" 
          element={
            <ProtectedRoute>
              <NhanVien />
            </ProtectedRoute>
          } 
        />


        <Route 
          path="/quet-ma" 
          element={
            <ProtectedRoute>
              <QuetMa />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/tao-nhan-vien" 
          element={
            <ProtectedRoute>
              <TaoNhanVien />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/quet-ma-camera" 
          element={
            <ProtectedRoute>
              <Quet_Ma />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/ma-cham-cong" 
          element={
            <ProtectedRoute>
              <MaChamCong />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/lich-lam-viec" 
          element={
            <ProtectedRoute>
              <LichLamViec />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/phan-tich-cong" 
          element={
            <ProtectedRoute>
              <PhanTichCong />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/bang-gia-km" 
          element={
            <ProtectedRoute>
              <div>Bảng giá KM</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/nhap-lieu-hang-ngay" 
          element={
            <ProtectedRoute>
              <div>Nhập liệu hằng ngày</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/360-survey" 
          element={
            <ProtectedRoute>
              <div>360 Survey</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/thong-bao" 
          element={
            <ProtectedRoute>
              <div>Thông báo</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/reports" 
          element={
            <ProtectedRoute>
              <div>Reports</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/bgm-duyet-cong" 
          element={
            <ProtectedRoute>
              <div>BGM duyệt công</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/am-xet-duyet" 
          element={
            <ProtectedRoute>
              <div>AM xét duyệt</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/chi-tieu-nhan-vien" 
          element={
            <ProtectedRoute>
              <div>Chỉ tiêu nhân viên</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/mo-hinh-bep-cong" 
          element={
            <ProtectedRoute>
              <div>Mô hình bếp công</div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/report-setting" 
          element={
            <ProtectedRoute>
              <div>Report setting</div>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
