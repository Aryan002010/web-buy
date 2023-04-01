import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Cart from './pages/Cart/Cart';
import User from './pages/User/User.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className='new'>
        <Navbar />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          >
            {' '}
          </Route>
          <Route
            path='/cart'
            element={<Cart />}
          />
          <Route
            path='/user'
            element={<User />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
