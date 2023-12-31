import React, { useContext, useReducer } from 'react';

import reducer from './reducer';

export const StoreContext = React.createContext({});

const initialState = {
  productsById: [],
  products: {},
  colorsById: [],
  colors: {},
  materialsById: [],
  materials: {},
  featuredProducts: [],
  selectedMaterial: null,
  selectedColor: null,
  cart: {},
  isCartDrawerOpen: false,
};

export default function StoreContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}

export function useDispatch() {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
}

export function useAppState() {
  const { state } = useContext(StoreContext);
  return state;
}
