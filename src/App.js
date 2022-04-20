import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./pages/Header";
import Home from "./pages/Home";
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from "./pages/Footer";
import Profile from './components/profile/Profile';
import Pagenotfound from './pages/Pagenotfound';
import Product from './components/products/Product';
import Checkout from './components/checkout/Checkout';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/shop/:productID' element={<Product />} />
          <Route exact path='/aboutus' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='*' element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
