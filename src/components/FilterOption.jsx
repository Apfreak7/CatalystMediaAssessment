import React from 'react';
import { capitalize, classNames } from '../utils/helpers';

export default function FilterOption({ name, active, onSelect }) {
  return (
    <li
      className={classNames(
        'text-base text-gray-700 cursor-pointer',
        active ? 'font-medium' : 'font-light',
      )}
      onClick={onSelect}
    >
      <span>{capitalize(name)}</span>
    </li>
  );
}
