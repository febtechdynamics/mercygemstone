import './App.css';
import Home from './components/home/Home';
import ProductDetail from './components/productdetail/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Shared from './components/sharedlayout/Shared';
import AboutDetail from './components/about/AboutDetail';
import Login from "./components/login/Login"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutDetail/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
