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
import Offers from './pages/offers/offers';
import Addpromo from './pages/addpromo/addpromo';
import Carticon from './pages/cart-icon/carticon';
import Favorite from './pages/favorite/favorite';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/brands" element={<Brand />} />
        <Route path="/allcategories" element={<Allcategories />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/multioffers" element={<Offers />} />
        <Route path='/promo' element={<Addpromo />} />
        <Route path='/maincart' element={<Carticon />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
