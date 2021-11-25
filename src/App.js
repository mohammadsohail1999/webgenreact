//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopAppBar from "./Components/Appbar";
import HeaderPage from "./Pages/Header/HeaderPage";
// import Template from "./Template/Template";

function App() {
  return (
    <>
      <Router>
        <TopAppBar />
        <Routes>
          <Route path="/" element={<HeaderPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
