import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Package } from 'lucide-react';
import { useBanner, useCart } from '../context/CartContext';
import  CartDropdown  from '../Pages/CartDropdown';
import { Link } from 'react-router-dom';
import AuthPage from '../Auth/AuthPage';
export default function Navbar({ onSearch }) {
  const {setCheckBanner} =useBanner();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();
  const handleSearchChange = (e) => {
    setCheckBanner(false)
    onSearch(e.target.value);
  };

  return (
    <nav className="relative">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 fixed w-full z-50 bg-white shadow-md ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Package className="h-8 w-8 text-indigo-600" />
            <Link to="/"  className="ml-2 text-xl font-bold text-gray-800">Store</Link>
            <div className="hidden sm:flex gap-4 ml-6 font-semibold ">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            </div>
          </div>


          

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden sm:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Link to='/product' className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </Link>
              <input
                type="text"
                onChange={handleSearchChange}
             
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/* <button className='flex justify-end ml-32 text-white rounded-md bg-green-400 px-3 py-1 font-semibold '>Sign In</button> */}
          {/* Cart Icon */}
          <div className="flex items-center md:gap-3">
          <AuthPage/>

            <button 
              className="p-2 rounded-full hover:bg-gray-100 relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search products..."
            />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Categories
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Deals
              </a>
            </div>
          </div>
        )}

        {/* Cart Dropdown */}
        <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </nav>
  );
}