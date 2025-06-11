import "./App.css";

import { Routes, Route, useLocation, Navigate } from "react-router";
import AppLayout from "./Components/AppLayout";
import ThemeProvider from "./Provider/ThemeProvider";
import DoctorDetailsProvider from "./Provider/DoctorDetailsProvider";
import Appointment from "./Pages/Appointment";
import PastAppointment from "./Pages/PastAppointment";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { AuthProvider } from "./Provider/AuthProvider";

function App() {
  const { pathname } = useLocation();

  return (
    <ThemeProvider>
      <AuthProvider>
        <DoctorDetailsProvider>
          {pathname === "/" ? <Navigate to="appointment" replace /> : null}
          <Routes>
            <Route path="/doctor" element={<AppLayout />}>
              <Route path="appointment" element={<Appointment />} />
              <Route path="pastAppointment" element={<PastAppointment />} />
            </Route>
            <Route path="/nurse" element={<AppLayout />}>
              <Route path="appointment" element={<Appointment />} />
              <Route path="pastAppointment" element={<PastAppointment />} />
            </Route>
            <Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Route>
          </Routes>
        </DoctorDetailsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
