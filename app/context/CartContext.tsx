'use client';

import { createContext, useReducer, ReactNode } from 'react';
import { Product } from '../data/products';

interface CartItem {
  product: Product;
  quantity: number;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: string;
}

interface CartState {
  cart: CartItem[];
  userData: UserData | null;
}

type CartAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_USER_DATA'; userData: UserData }
  | { type: 'CLEAR_USER_DATA' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.product.id === action.product.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { product: action.product, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.productId),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.userData,
      };
    case 'CLEAR_USER_DATA':
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

const CartContext = createContext<{
  cart: CartItem[];
  userData: UserData | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setUserData: (userData: UserData) => void;
  clearUserData: () => void;
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [], userData: null });

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const setUserData = (userData: UserData) => {
    dispatch({ type: 'SET_USER_DATA', userData });
  };

  const clearUserData = () => {
    dispatch({ type: 'CLEAR_USER_DATA' });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, userData: state.userData, addToCart, removeFromCart, updateQuantity, clearCart, setUserData, clearUserData }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };