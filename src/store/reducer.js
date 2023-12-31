export default function reducer(state, action) {
    switch (action.type) {
      case 'materials/save':
        const { materials = [] } = action;
  
        const materialsById = materials.map((product) => product.id);
  
        const materialsMap = {};
        for (const material of materials) {
          materialsMap[material.id] = material;
        }
  
        return { ...state, materialsById, materials: materialsMap };
  
      case 'colors/save':
        const { colors = [] } = action;
  
        const colorsById = colors.map((product) => product.id);
  
        const colorsMap = {};
        for (const material of colors) {
          colorsMap[material.id] = material;
        }
  
        return { ...state, colorsById, colors: colorsMap };
  
      case 'products/save':
        const { products = [] } = action;
  
        const productsById = products.map((product) => product.id);
  
        const productMap = {};
        for (const product of products) {
          productMap[product.id] = product;
        }
  
        return { ...state, productsById, products: productMap };
  
      case 'set-filter/material':
        return {
          ...state,
          selectedMaterial: action.materialId,
        };
  
      case 'set-filter/color':
        return { ...state, selectedColor: action.colorId };
  
      case 'remove-filter/color':
        return { ...state, selectedColor: null };
  
      case 'remove-filter/material':
        return { ...state, selectedMaterial: null };
  
      case 'cart/add':
        const { productId } = action;
  
        let clonedCart = JSON.parse(JSON.stringify(state.cart));
  
        clonedCart[productId] = clonedCart?.[productId] + 1 || 1;
  
        return { ...state, cart: clonedCart };
  
      case 'cart/remove':
        const clonedCart2 = JSON.parse(JSON.stringify(state.cart));
  
        if (clonedCart2?.[action.productId]) {
          delete clonedCart2?.[action.productId];
        }
  
        return { ...state, cart: clonedCart2 };
  
      case 'toggle-cart-drawer':
        return { ...state, isCartDrawerOpen: !state.isCartDrawerOpen };
  
      default:
        return state;
    }
  }
  