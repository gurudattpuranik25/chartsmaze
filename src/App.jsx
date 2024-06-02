import "./App.css";
import Filters from "./components/Filters/Filters";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filters" element={<Filters />}></Route>
      </Routes>
    </>
  );
}

export default App;
