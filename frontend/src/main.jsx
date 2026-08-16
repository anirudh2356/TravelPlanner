import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import Flight from "./Flight.jsx";
import Hotel from "./Hotel.jsx";
import Train from "./Train.jsx";
import Bus from "./Bus.jsx";
import Holiday from "./Holiday.jsx";

import DashboardLayout from "./Components/DashboardLayout.jsx";

import DashboardHome from "./pages/DashboardHome.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Bookings from "./pages/Bookings.jsx";
import Notifications from "./pages/Notifications.jsx";
import Settings from "./pages/Settings.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* =========================
            TRAVEL PAGES
           ========================= */}

        <Route path="/flights" element={<Flight />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/trains" element={<Train />} />
        <Route path="/buses" element={<Bus />} />
        <Route path="/holidays" element={<Holiday />} />


        {/* =========================
            USER DASHBOARD
           ========================= */}

        <Route
          path="/"
          element={
            <DashboardLayout>
              <DashboardHome />
            </DashboardLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          }
        />

        <Route
          path="/edit-profile"
          element={
            <DashboardLayout>
              <EditProfile />
            </DashboardLayout>
          }
        />

        <Route
          path="/bookings"
          element={
            <DashboardLayout>
              <Bookings />
            </DashboardLayout>
          }
        />

        <Route
          path="/notifications"
          element={
            <DashboardLayout>
              <Notifications />
            </DashboardLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);