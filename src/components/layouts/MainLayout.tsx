import React from 'react'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: 250 }}>
        Sidebar
      </div>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;