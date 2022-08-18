import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginContainer from 'containers/LoginContainer';
import DashboardContainer from 'containers/DashboardContainer';
import ForgotPasswordContainer from 'containers/ForgotPasswordContainer';
import RegisterContainer from 'containers/RegisterContainer';
import ProjectContainer from './ProjectContainer';

export const NavigationContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
      <Route path="/dashboard" element={<DashboardContainer />} />
      <Route path="/projects/:id" element={<ProjectContainer />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};