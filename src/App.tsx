import "./App.css";

import { Routes, Route } from "react-router";
import AppLayout from "./Components/AppLayout";
import ThemeProvider from "./Provider/ThemeProvider";
import DoctorDetailsProvider from "./Provider/DoctorDetailsProvider";

function App() {
  return (
    <ThemeProvider>
      <DoctorDetailsProvider>
        <Routes>
          <Route path="/" element={<AppLayout />} />
        </Routes>
      </DoctorDetailsProvider>
    </ThemeProvider>
  );
}

export default App;
