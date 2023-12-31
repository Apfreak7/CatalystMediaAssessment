import React, { useEffect, useState } from 'react';
import { useAppState } from '../store';
import ProductCard from './ProductCard';

export default function ProductsGrid() {
  const { products, productsById, colors, materials, selectedMaterial, selectedColor } =
    useAppState();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products to display per page
  // Filter products based on selected material and color
  let filteredProducts = [];

  if (selectedMaterial !== null && selectedColor !== null) {
    filteredProducts = productsById.filter(
      (productId) =>
        products[productId]?.materialId === selectedMaterial &&
        products[productId]?.colorId === selectedColor,
    );
  } else if (selectedMaterial !== null) {
    filteredProducts = productsById.filter(
      (productId) => products[productId]?.materialId === selectedMaterial,
    );
  } else if (selectedColor !== null) {
    filteredProducts = productsById.filter(
      (productId) => products[productId]?.colorId === selectedColor,
    );
  } else {
    filteredProducts = productsById;
  }

  // Calculate the range of products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  useEffect(() => {
    console.log('Masthead', currentProducts);
  }, [currentProducts]);
  // Function to change the current page
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      <div>
        <div className='grid grid-cols-3 gap-14'>
          {currentProducts.map((productId) => {
            const product = products[productId];
            return (
              <ProductCard
                key={productId}
                {...{
                  productId,
                  name: product.name,
                  image: product.image,
                  price: product.price,
                  color: colors[product.colorId]?.name || '',
                  material: materials[product.materialId]?.name || '',
                }}
              />
            );
          })}
        </div>

        <div className='pagination flex items-center justify-center space-x-10 py-14'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index + 1)}
              className={`${
                currentPage === index + 1 && 'bg-gray-200 text-gray-700'
              } rounded-full w-8 h-8 `}
              style={currentPage === index + 1 ? { backgroundColor: '#D9D9D9' } : {}}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
