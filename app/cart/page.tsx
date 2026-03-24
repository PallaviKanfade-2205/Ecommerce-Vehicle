'use client';

import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';

export default function CartPage() {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <div>Loading...</div>;
  }
  const { cart, removeFromCart, updateQuantity } = cartContext;

  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">Add some electric vehicles to your cart to get started!</p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          {cart.map((item) => (
            <div key={item.product.id} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
              <div className="relative w-24 h-24 mr-4">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">{item.product.brand}</p>
                <p className="text-green-600 font-bold">₹{item.product.price.toLocaleString('en-IN')}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3 py-1 border border-gray-300 rounded">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <div className="ml-4 text-right">
                <p className="text-lg font-bold">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</p>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-600 hover:text-red-800 text-sm mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold text-green-600">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div className="mt-6 flex justify-between">
              <Link
                href="/products"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/checkout"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}