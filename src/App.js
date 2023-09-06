import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Prizes from "./components/Prizes";
import Tracks from "./components/Tracks";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import ConductedBy from "./components/ConductedBy";

function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/tracks" element={<Tracks />}></Route>
        <Route path="/prizes" element={<Prizes />}></Route>
        <Route path="/conducted-by" element={<ConductedBy />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        </Routes>
      </Router>
      <div id="space">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
      </div>
    </>
  );
}

export default App;
