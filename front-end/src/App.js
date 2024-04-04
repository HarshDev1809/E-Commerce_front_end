import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsPage from './pages/ProductsPage/ProductsPage';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />


function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  </Router>
  )
}

export default App;
