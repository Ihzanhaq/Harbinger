import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminNav from '../components/AdminNav';
import AdminRes from '../components/AdminRes';
import '../Styles/Admin.css';
import AdminMenu from '../components/AdminMenu';
import AdminFeedback from '../components/AdminFeedback';

function Admin() {
  return (
    <div>
      <AdminNav />
      <Routes>
        <Route path="/" element={<Navigate to="/Admin/Res" />} />
        <Route path="Res" element={<AdminRes />} />
        <Route path="MenuManagement" element={<AdminMenu />} />
        <Route path="Feedbacks" element={<AdminFeedback />} />
      </Routes>
    </div>
  );
}

export default Admin;


