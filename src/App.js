import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopAppBar from "./Components/Appbar";
import HeaderPage from "./Pages/Header/HeaderPage";
import { useRef } from "react";
import Preview from "./Pages/Preview/Preview";

function App() {
  const headerRef = useRef(null);

  return (
    <>
      <Router>
        <TopAppBar />
        <Routes>
          <Route path="/" element={<HeaderPage headerRef={headerRef} />} />
          <Route path="/preview" element={<Preview headerRef={headerRef} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
