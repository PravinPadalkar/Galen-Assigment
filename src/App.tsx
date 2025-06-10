import "./App.css";

import { Routes, Route, useLocation, Navigate } from "react-router";
import AppLayout from "./Components/AppLayout";
import ThemeProvider from "./Provider/ThemeProvider";
import DoctorDetailsProvider from "./Provider/DoctorDetailsProvider";
import Appointment from "./Pages/Appointment";
import PastAppointment from "./Pages/PastAppointment";

function App() {
  const { pathname } = useLocation();

  return (
    <ThemeProvider>
      <DoctorDetailsProvider>
        {pathname === "/" ? <Navigate to="appointment" replace /> : null}
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="appointment" element={<Appointment />} />
            <Route path="pastAppointment" element={<PastAppointment />} />
          </Route>
        </Routes>
      </DoctorDetailsProvider>
    </ThemeProvider>
  );
}

export default App;
