import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePages from './pages/HomePages';
import FormularioPages from './pages/FormularioPages';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => [...prevCart, pizza]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<HomePages addToCart={addToCart} />} />
        <Route path="/formulario" element={<FormularioPages />} />
      </Routes>
    </>
  );
}

export default App;