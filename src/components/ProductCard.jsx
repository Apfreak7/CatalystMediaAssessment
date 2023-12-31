import React from 'react';
import useCart from '../store/hooks/useCart';

export default function ProductCard({ productId, name, image, price, color, material }) {
  const { addToCart } = useCart();

  return (
    <div className='relative group bg-gray-100 rounded-lg overflow-hidden'>
      <div className='aspect-w-4 aspect-h-5'>
        {' '}
        {/* Set a 4:5 aspect ratio for the container */}
        <img
          alt={name}
          src={image}
          className='object-cover'
          style={{ width: '100%' }}
          loading='lazy'
        />{' '}
        {/* Maintain aspect ratio with object-cover */}
      </div>
      <div className='absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000CC] transition-all duration-500 ease-in-out'>
        <button
          className='bg-transparent outline-none border-none text-white text-sm font-normal'
          onClick={() => addToCart(productId)}
        >
          Add to cart
        </button>
      </div>
      <div className='p-4'>
        <h5 className='text-xl font-normal text-gray-800'>{name}</h5>
        <div className={color ? 'space-x-2' : ''}>
          <span className='uppercase text-base'>{color}</span>
          <span className='text-gray-500 font-light uppercase'>{material}</span>
        </div>
        <div className='text-base uppercase font-light text-gray-800 space-x-1'>
          <span>INR</span>
          <span>{price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
