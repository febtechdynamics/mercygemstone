import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Shared from './components/sharedlayout/Shared';
import AboutDetail from './components/about/AboutDetail';
import Login from "./components/login/Login"
import Contact from "./components/contact/Contact"
import GemstoneDetail from './components/gemstoneDetaill/GemstonDetail';
import IndustrialDetail from './components/IndustrialDetail/IndustrialDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/gemstone/:id" element={<GemstoneDetail />} />
            <Route path="/industrial/:id" element={<IndustrialDetail />} />
            <Route path="/about" element={<AboutDetail/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
