import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from Font Awesome

import useCart from '../store/hooks/useCart';

export default function Navbar() {
  const { totalItems, toggleDrawer } = useCart();

  return (
    <div className='fixed top-0 left-0 w-full z-20 color-white shadow-sm'>
      <div className='px-10 py-6'>
        <div className='flex justify-between items-center cursor-pointer'>
          <h6>
            <span className='logo-right'>RIGHT</span>
            <span className='logo-reset'>FIT.COM</span>
          </h6>

          <ul className='flex items-center justify-between space-x-12 cursor-pointer'>
            <li>
              <a>All Products</a>
            </li>
            <li>
              <a>Featured Products</a>
            </li>
            <li onClick={toggleDrawer}>
              <span className='flex items-center'>
                {' '}
                {/* Create a container for the cart icon */}
                <FaShoppingCart className='ml-2' /> {/* Add the cart icon */}
                {/* {totalItems !== 0 && */}
                <div className='pl-10 '>{totalItems}</div>
                {/* } */}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
