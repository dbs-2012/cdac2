import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"
import Navbar from "./components/Navbar/Navbar";
import Theory from "./components/Theory/Theory";
import Triangle from "./components/Simulation/Triangle";
import Quiz from "./components/Test/Quiz";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory" element={<Theory />} />
          <Route path='/sim' element={<Triangle />}/>
          {/* <Route path='/test' element={<Test2 />}/> */}
          <Route path='/test' element={<Quiz />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
