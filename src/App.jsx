import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </>
  );
}

export default App;
