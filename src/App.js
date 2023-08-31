import logo from './logo.svg';
import './App.css';
import '../src/assets/css/globle.css';
import '../src/assets/css/responsive.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/loginpage/login';
import Allcategories from './pages/allcategories/allcategories';
import Allproducts from './pages/allproducts/allproducts';
import Cart from './pages/addtocart/cart'
import Brand from './pages/brand/brands';
import Home from './pages/home/Home';
import Data from './pages/Data';
import Addpromo from './pages/addpromo/addpromo';
import Carticon from './pages/cart-icon/carticon';
import { useState } from 'react';

function App() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  //Preloader
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (

    <BrowserRouter>
      <Routes>
        {!loading && <Route path="/login" element={<Login />} />}
        {!loading && <Route path="/" element={<Home isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal} />} />}
        {!loading && <Route path="/brands" element={<Brand />} />}
        {!loading && <Route path="/allcategories" element={<Allcategories />} />}
        {!loading && <Route path="/allproducts" element={<Allproducts />} />}
        {!loading && <Route path="/cart" element={<Cart />} />}
        {!loading && <Route path='/promo' element={<Addpromo />} />}
        {!loading && <Route path='/maincart' element={<Carticon />} />}
        {!loading && <Route path='/data' element={<Data />} />}
      </Routes>

    </BrowserRouter>

  );
}

export default App;
