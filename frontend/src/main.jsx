import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Flight from "./Flight.jsx";
import Hotel from "./Hotel.jsx";
import Train from "./Train.jsx";
import Bus from "./Bus.jsx";
import Holiday from "./Holiday.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<App />} />
  <Route path="/flights" element={<Flight />} />
  <Route path="/hotels" element={<Hotel />} />
  <Route path="/trains" element={<Train />} />
  <Route path="/buses" element={<Bus />} />
  <Route path="/holidays" element={<Holiday />} />
</Routes>
    </BrowserRouter>
  </StrictMode>
);