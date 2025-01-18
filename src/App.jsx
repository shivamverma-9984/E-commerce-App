
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetails from './Pages/ProductDetails';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSearch } from './context/CartContext';
import ScrollToTop from './Utils/ScrollToTop';

const App=()=> {
  const {searchQuery,setSearchQuery} =useSearch()

  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen  flex flex-col">
        <Navbar onSearch={setSearchQuery}  />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/product" element={<ProductList searchQuery={searchQuery}  />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<ProductList searchQuery={searchQuery} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;