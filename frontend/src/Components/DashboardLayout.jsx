import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="dashboard-layout">
        <Sidebar />

        <div className="main-content">
          <Topbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <div className="page-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}