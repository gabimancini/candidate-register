import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CandidateRegister from "./components/CandidateRegister";
function App() {
  return (
    <div>   
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/candidate/registration" element={<CandidateRegister/>}></Route>
        <Route path="/candidate/list" element={<CandidateRegister/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
