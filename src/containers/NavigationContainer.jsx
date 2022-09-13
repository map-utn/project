import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginContainer from 'containers/LoginContainer';
import DashboardContainer from 'containers/DashboardContainer';
import ForgotPasswordContainer from 'containers/ForgotPasswordContainer';
import RegisterContainer from 'containers/RegisterContainer';
import ProjectContainer from 'containers/ProjectContainer';
import FodaContainer from 'containers/FODA/FodaContainer';
import FodaContainerResults from 'containers/FODA/FodaContainerResults';
import PestelContainer from 'containers/PESTEL/PestelContainer';
import PestelContainerResults from 'containers/PESTEL/PestelContainerResults';
import CreateToolContainer from 'containers/CreateToolContainer';
import McKinseyContainer from 'containers/MCKINSEY/McKinseyContainer';
import McKinseyContainerResults from 'containers/MCKINSEY/McKinseyContainerResults';

export const NavigationContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
      <Route path="/dashboard" element={<DashboardContainer />} />
      <Route path="/projects">
        <Route
          path=":id/foda/:fodaId/results"
          element={<FodaContainerResults />}
        />
        <Route path=":id/foda/:fodaId" element={<FodaContainer />} />
        <Route
          path=":id/pestel/:pestelId/results"
          element={<PestelContainerResults />}
        />
        <Route path=":id/pestel/:pestelId" element={<PestelContainer />} />
        <Route
          path=":id/mckinsey/:matrizId/results"
          element={<McKinseyContainerResults />}
        />
        <Route path=":id/mckinsey/:matrizId" element={<McKinseyContainer />} />
        <Route path=":id/createTool/*" element={<CreateToolContainer />} />
        <Route path=":id" element={<ProjectContainer />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
