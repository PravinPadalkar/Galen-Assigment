import "./App.css";
import MyLayout from "./Components/MyLayout";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
