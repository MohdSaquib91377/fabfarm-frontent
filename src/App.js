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
import ScrollToTop from './pages/ScrollToTop';
import { connect } from 'react-redux';
import Orderlist from './components/orders/Orderlist';
import OrderproductDetails from './components/orders/OrderproductDetails';
import Wishlist from './components/wishlist/Wishlist';
import Basicpopup from './components/util/productstemplates/Basicpopup';
import Privacyandpolicy from './components/footer/Privacyandpolicy';
import Termsandcondition from './components/footer/ Termsandcondition';
import Faqspage from './components/footer/Faqspage';
function App({ isAuthorized, mainCategory }) {
  return (
    <>
      <Router>
        <Basicpopup />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path={mainCategory ? '/shop/:categoryId' : '/shop/:categoryId/:subCategoryID'} element={<Shop />} />
          <Route exact path='/shop/:categoryId/product/:productID' element={<Product />} />
          <Route exact path='/aboutus' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/privacyandpolicy' element={<Privacyandpolicy />} />
          <Route exact path='/termandcondition' element={<Termsandcondition />} />
          <Route exact path='/faqs' element={<Faqspage />} />
          {isAuthorized ?
            <Route exact path='/profile' element={<Profile />} />
            :
            undefined}
          {isAuthorized ?
            <Route exact path='/orderlist' element={<Orderlist />} /> :
            undefined}
          {isAuthorized ?
            <Route exact path='/orderproductdetails/:prodID' element={<OrderproductDetails />} /> :
            undefined}
          {isAuthorized ?
            <Route exact path='/wishlist' element={<Wishlist />} /> :
            undefined}
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='*' element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthorized: state.shop.isAuthorized,
    mainCategory: state.shop.mainCategory
  }
}
export default connect(mapStateToProps)(App);
