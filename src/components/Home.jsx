import React from 'react'
import CarouselBanner from './../Pages/CarouselBanner';
import ProductList from './ProductList';
import { useBanner } from '../context/CartContext';
const Home = ({searchQuery}) => {
    const {checkBanner, setCheckBanner} =useBanner();
  return (
    <div>
        {
            checkBanner&&<CarouselBanner/>
        }
        <ProductList searchQuery={searchQuery} />
    </div>
  )
}

export default Home