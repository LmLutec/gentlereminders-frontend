import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import GetReminder from "./components/GetReminder";
import Login from "./components/Login";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/getreminders" element={<GetReminder />} />
      </Routes>
    </div>
  );
}

// add error component

export default App;
