// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { products } from '../data/products';
// import { Heart, ShoppingCart, ArrowLeft, Star, Truck, Shield } from 'lucide-react';
// import ProductCard from './ProductCard';


// function LoadingSpinner() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[60vh]">
//       <LoaderComponent className="w-12 h-12 text-indigo-600 animate-spin" />
//       <p className="mt-4 text-gray-600">Loading product details...</p>
//     </div>
//   );
// }
// export default function ProductDetails() {
//   const { id } = useParams();
//   const { addToCart, cart } = useCart();
  
//   const product = products.find(p => p.id === Number(id));
  
//   if (!product) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
//           <Link to="/" className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">
//             Return to Home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const isInCart = cart.some(item => item.id === product.id);
  
//   const relatedProducts = products
//     .filter(p => p.category === product.category && p.id !== product.id)
//     .slice(0, 4);

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity: 1 });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24 sm:mt-14">
//       <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-8">
//         <ArrowLeft className="w-5 h-5 mr-2" />
//         Back to Products
//       </Link>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 -mt-3">
//         {/* Product Image */}
//         <div className="relative">
//           <img 
//             src={product.image} 
//             alt={product.name}
//             className="w-full h-[500px] object-cover rounded-lg shadow-lg"
//           />
//           <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
//             <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
//           </button>
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col">
//           <div className="bg-white p-2 ">
//             <span className="text-indigo-600 font-medium">{product.category}</span>
//             <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
            
//             <div className="flex items-center mt-4">
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <span className="ml-2 text-gray-600">(50+ reviews)</span>
//             </div>

//             <span className="text-3xl font-bold text-gray-900 mt-4 block">
//               ${product.price.toFixed(2)}
//             </span>
            
//             <div className="mt-6">
//               <h3 className="text-lg font-medium text-gray-900">Product Description</h3>
//               <p className="mt-2 text-gray-600 leading-relaxed">
//                 {product.description}
//               </p>
//             </div>

//             <div className="mt-6 space-y-4">
//               <div className="flex items-center text-gray-600">
//                 <Truck className="w-5 h-5 mr-2" />
//                 <span>Free shipping on orders over $50</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <Shield className="w-5 h-5 mr-2" />
//                 <span>1-year warranty included</span>
//               </div>
//             </div>

//             <button
//               onClick={handleAddToCart}
//               className={`mt-8 w-full flex items-center justify-center px-6 py-3 rounded-lg ${
//                 isInCart 
//                   ? 'bg-green-600 hover:bg-green-700' 
//                   : 'bg-indigo-600 hover:bg-indigo-700'
//               } text-white font-medium transition-colors duration-200`}
//             >
//               <ShoppingCart className="w-5 h-5 mr-2" />
//               {isInCart ? 'Added to Cart' : 'Add to Cart'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-16">
//         <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {relatedProducts.map(product => (
//             <ProductCard key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Heart, ShoppingCart, ArrowLeft, Star, Truck, Shield } from 'lucide-react';
import ProductCard from './ProductCard';
import LoaderSpinner from './../Utils/Loader';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart, cart } = useCart();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate=useNavigate()


  useEffect(() => {
    // Simulate loading delay
    setLoading(true);
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id === Number(id));
      setProduct(foundProduct);
      
      if (foundProduct) {
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }, 800); // Add a slight delay to show loading state

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <LoaderSpinner />;
  }
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate('/login')
      // alert('Please log in to add items to your cart.');
      return;
    }else{
    addToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8  mt-24 sm:mt-14">
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 -mt-3">
        {/* Product Image */}
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full  object-cover rounded-lg shadow-lg"
          />
          <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
            <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="bg-white ">
            <span className="text-indigo-600 font-medium">{product.category}</span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
            
            <div className="flex items-center mt-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(50+ reviews)</span>
            </div>

            <span className="text-3xl font-bold text-gray-900 mt-2 block">
              ${product.price.toFixed(2)}
            </span>
            
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">Product Description</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center text-gray-600">
                <Truck className="w-5 h-5 mr-2" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Shield className="w-5 h-5 mr-2" />
                <span>1-year warranty included</span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full flex items-center justify-center px-6 py-3 rounded-lg ${
                isInCart 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white font-medium transition-colors duration-200`}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}