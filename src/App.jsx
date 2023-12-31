import { useEffect, useState } from 'react';

import { getColors, getMaterials, getProducts } from './utils/api';
import { useAppState, useDispatch } from './store';
import { capitalize } from './utils/helpers';

import Header from './assets/Masthead.png';
import Footer from './assets/Footer.png';
// import heroBanner from './assets/hero-banner.png';

import Chip from './components/Chip';
import CartDrawer from './components/CartDrawer';
import ProductsGrid from './components/ProductsGrid';
import Navbar from './components/Navbar';
import LeftArea from './components/LeftArea';
import ReactLoading from 'react-loading';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { colors, materials, selectedMaterial, selectedColor } = useAppState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data from API
    Promise.all([getColors(), getMaterials(), getProducts()])
      .then(([colorsData, materialsData, productsData]) => {
        // Step 3: Set the loading state to false when data is fetched
        dispatch({ type: 'colors/save', colors: colorsData?.colors });
        dispatch({ type: 'materials/save', materials: materialsData?.material });
        dispatch({ type: 'products/save', products: productsData?.products });
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even on error to avoid indefinite loading
      });
  }, [dispatch]);

  function removeColorFilter() {
    dispatch({ type: 'remove-filter/color' });
  }

  function removeMaterialFilter() {
    dispatch({ type: 'remove-filter/material' });
  }

  return (
    <>
      <div className='w-full relative'>
        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <div className='w-full h-[auto] relative'>
          <img src={Header} alt='Hero' className='w-full h-full' />
        </div>

        {loading ? (
          <div className='loading-container grid place-items-center justify-center py-20'>
            <ReactLoading type='spin' color='#D9D9D9' height={50} width={50} />
          </div>
        ) : (
          <div className='w-full h-full pt-12'>
            <div className='px-10'>
              <div className='grid grid-cols-[250px_1fr] gap-5'>
                <LeftArea />
                <div className='flex flex-col'>
                  <div className='mb-5 flex space-x-3'>
                    {!!selectedColor && (
                      <Chip
                        text={capitalize(colors[selectedColor]?.name)}
                        onClose={removeColorFilter}
                      />
                    )}
                    {!!selectedMaterial && (
                      <Chip
                        text={capitalize(materials[selectedMaterial]?.name)}
                        onClose={removeMaterialFilter}
                      />
                    )}
                  </div>

                  <ProductsGrid />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* footer */}
        <div className='w-full h-[auto] relative'>
          <img src={Footer} alt='Footer' className='w-full h-full' />
        </div>
      </div>

      <CartDrawer />
    </>
  );
}

export default App;
