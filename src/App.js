import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./pages/Header";
import Home from "./pages/Home";
import Seed from './pages/Seeds';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/seeds' element={<Seed />} />
          <Route exact path='/aboutus' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
