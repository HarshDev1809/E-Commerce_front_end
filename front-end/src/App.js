import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Product from './pages/Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPage from './pages/CartPage/CartPage';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />


function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/products/:id" element = {<Product />} />
      <Route path="/cart" element = {<CartPage />} />
    </Routes>
  </Router>
  )
}

export default App;