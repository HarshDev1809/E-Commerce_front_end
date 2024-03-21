import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  </Router>
  )
}

export default App;
