import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Chapri from './components/Chapri';
import Sample from './components/Sample';
import Muskan from './components/company/Company';
import Company from './components/company/Company';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Company />}/>
        {/* <Route path="/" element={<Chapri />}/> */}
        <Route path="/home" element={<Home />}/>
        <Route path="/sample" element={<Sample />}/>
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
