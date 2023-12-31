import { useAppState, useDispatch } from '..';

export default function useCart() {
  const dispatch = useDispatch();
  const { products, cart, materials, colors, isCartDrawerOpen } = useAppState();

  function addToCart(productId) {
    dispatch({ type: 'cart/add', productId });
  }

  function removeFromCart(productId) {
    dispatch({ type: 'cart/remove', productId });
  }

  function toggleDrawer() {
    dispatch({ type: 'toggle-cart-drawer' });
  }

  let cartItems = [];

  for (const item in cart) {
    if (products[item]) {
      cartItems.push({
        productId: item,
        name: products[item].name,
        image: products[item].image,
        price: products[item].price,
        color: colors[products[item].colorId]?.name || '',
        material: materials[products[item].materialId]?.name || '',
      });
    }
  }

  return {
    isCartDrawerOpen,
    totalItems: Object.keys(cart).length,
    cartItems,
    addToCart,
    removeFromCart,
    toggleDrawer,
  };
}
