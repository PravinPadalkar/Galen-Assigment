import "./App.css";

import { Routes, Route } from "react-router";
import AppLayout from "./Components/AppLayout";
import ThemeProvider from "./Provider/ThemeProvider";
import DoctorDetailsProvider from "./Provider/DoctorDetailsProvider";
import Appointment from "./Pages/Appointment";
import PastAppointment from "./Pages/PastAppointment";

function App() {
  return (
    <ThemeProvider>
      <DoctorDetailsProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Appointment />} />
            <Route path="pastAppointment" element={<PastAppointment />} />
          </Route>
        </Routes>
      </DoctorDetailsProvider>
    </ThemeProvider>
  );
}

export default App;
