import React from 'react';

import { useAppState, useDispatch } from '../store';

import FilterSection from './FilterSection';
import FilterOption from './FilterOption';
import FilterList from './FilterList';

export default function LeftArea() {
  const dispatch = useDispatch();
  const { materials, materialsById, colors, colorsById, selectedMaterial, selectedColor } =
    useAppState();

  function setMaterialFilter(materialId) {
    dispatch({ type: 'set-filter/material', materialId });
  }

  function setColorFilter(colorId) {
    dispatch({ type: 'set-filter/color', colorId });
  }

  return (
    <div className='space-y-10'>
      <h6 className='text-xl font-medium text-gray-800'>Filter</h6>

      <FilterSection filterTitle={'Materials'}>
        <FilterList>
          <FilterOption
            name={'All'}
            active={selectedMaterial === null}
            onSelect={() => setMaterialFilter(null)}
          />
          {materialsById.map((materialId) => {
            const material = materials[materialId]?.name || '';
            return (
              <FilterOption
                key={materialId}
                name={material}
                active={selectedMaterial === materialId}
                onSelect={() => setMaterialFilter(materialId)}
              />
            );
          })}
        </FilterList>
      </FilterSection>

      <FilterSection filterTitle={'Colors'}>
        <FilterList>
          <FilterOption
            name={'All'}
            active={selectedColor === null}
            onSelect={() => setColorFilter(null)}
          />
          {colorsById.map((colorId) => {
            const color = colors[colorId]?.name || '';
            return (
              <FilterOption
                key={colorId}
                name={color}
                active={selectedColor === colorId}
                onSelect={() => setColorFilter(colorId)}
              />
            );
          })}
        </FilterList>
      </FilterSection>
    </div>
  );
}
