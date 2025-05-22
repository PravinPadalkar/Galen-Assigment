import "./App.css";

import { Routes, Route } from "react-router";
import AppLayout from "./Components/AppLayout";
import ThemeProvider from "./Provider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
