import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import GetReminder from "./components/GetReminder";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateGoal from "./components/CreateGoal";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/creategoal" element={<CreateGoal />} />
        <Route path="/getreminders" element={<GetReminder />} />
      </Routes>
    </div>
  );
}

// add error component

export default App;
