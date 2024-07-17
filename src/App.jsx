import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import ChartRace from "./components/ChartRace/ChartRace";
import { data_200EMA } from "./utils/200EMA";
import { data_50EMA } from "./utils/50EMA";
import Flowchart from "./components/Flowchart/Flowchart";
import Bar from "./components/Flowchart/Bar";
import Industry from "./components/Industry/Industry";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route
          path="/chart"
          element={
            <div style={{ marginLeft: "200px" }}>
              <ChartRace data={data_200EMA} />
              <ChartRace data={data_50EMA} />
            </div>
          }
        ></Route>
        {/* <Route path="/map" element={<Flowchart />}></Route> */}
        <Route path="/map" element={<Bar />}></Route>
        <Route path="/industry" element={<Industry />}></Route>
      </Routes>
    </>
  );
}

export default App;
