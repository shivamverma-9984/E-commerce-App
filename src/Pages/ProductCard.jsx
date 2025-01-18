import React, { useContext } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
// import { AuthContext } from './../context/AuthContext';

const ProductCard=({ id, name, price, image, category })=> {
  const { addToCart, cart } = useCart();

  const navigate=useNavigate()
  // const { isAuthenticated } = useContext(AuthContext);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const isInCart = cart.some(item => item.id === id);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate('/login')
      // alert('Please log in to add items to your cart.');
      return;
    }

else{
    toast.success('Item added successfully')>
    addToCart({ id, name, price, image, quantity: 1 });
    // localStorage.setItem("users", JSON.stringify({ id, name, price, image, quantity: 1 }));

    }
  };

  return (

    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative" >
      <Link to={`/product/${id}`} className="block">

        <img 
          src={image} 
          alt={name}
          className="w-full  object-cover"
        />
            </Link>

        <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white">
          <Heart className="w-4 h-4 md:w-5 md:h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      <div className="p-2">
        <span className="text-sm text-indigo-600 font-medium">{category}</span>
        <h3 className=" text-md font-medium text-gray-900 truncate">{name}</h3>
        <div className=" flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className={`flex items-center justify-center p-2  rounded-full ${
              isInCart 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white`}
          >
            <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;