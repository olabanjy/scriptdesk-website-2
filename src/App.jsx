import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import CodeOfConductPage from "./Pages/CodeOfConductPage";

function App() {
  return (
    <div className=" font-CeraGr">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
