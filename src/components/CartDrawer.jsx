import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useCart from '../store/hooks/useCart';
import { MdClose } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from Font Awesome

export default function CartDrawer() {
  const { isCartDrawerOpen, cartItems, removeFromCart, toggleDrawer, totalItems } = useCart();
  const cartRef = useRef(null);

  const closeCartOnOutsideClick = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      toggleDrawer(); // Close the cart drawer
    }
  };

  useEffect(() => {
    // console.log('isCartDrawer', isCartDrawerOpen, toggleDrawer);
    if (isCartDrawerOpen) {
      // Add event listener when the cart drawer is open
      document.addEventListener('click', closeCartOnOutsideClick);
    } else {
      // Remove the event listener when the cart drawer is closed
      document.removeEventListener('click', closeCartOnOutsideClick);
    }
  }, []);

  return isCartDrawerOpen
    ? createPortal(
        <div className='fixed top-0 w-full h-full z-50' ref={cartRef}>
          {/* backdrop */}
          <div className='bg-gray-700 opacity-75'></div>
          <div className='absolute right-0 top-0 h-full w-[500px] bg-gray-300'>
            <div className='flex items-center justify-evenly mt-5'>
              <h5 className=' text-normal text-base text-gray'>All Product</h5>
              <h5 className=' text-normal text-base text-gray-700'>Featured Product</h5>
              <FaShoppingCart className='ml-2 ' /> {/* Add the cart icon */}
              <div>{totalItems}</div>
            </div>

            <div className='mt-20 flex flex-col px-10'>
              <div className='flex justify-between'>
                <h5 className='mb-5 text-normal text-xl text-gray-700'>Shopping Cart</h5>
                <h5
                  className='mb-5 text-normal text-xl text-gray-700 cursor-pointer'
                  onClick={toggleDrawer}
                >
                  <MdClose />
                </h5>
              </div>
              <div className='cart-content' style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <ul className='space-y-4'>
                  {cartItems.map((item) => (
                    <li key={item.productId} className='relative grid grid-cols-[200px_1fr] gap-4'>
                      <img src={item.image} alt={item.name} className='w-full h-[270px]' />

                      <div className='flex flex-col'>
                        <div className='flex flex-col space-y-1'>
                          <h5 className='text-xl font-normal text-gray-800'>{item.name}</h5>
                          <span>
                            <span className='uppercase text-base'>{item.color}</span>
                            <span className='text-gray-500 font-light uppercase'>
                              {item.material}
                            </span>
                          </span>
                        </div>
                        <span className='text-base uppercase font-light text-gray-800 space-x-1 mt-4'>
                          <span>INR</span>
                          <span>{item.price.toFixed(2)}</span>
                        </span>

                        <button
                          className='mt-6 w-fit px-2 py-2 bg-gray-700 text-white text-md font-medium flex items-center'
                          onClick={() => removeFromCart(item.productId)}
                        >
                          Remove <div className='ml-2 mt-1'><MdClose /></div>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
}
