'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CartContext } from '../context/CartContext';

export default function OrderConfirmationPage() {
  const cartContext = useContext(CartContext);
  const router = useRouter();

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cart, userData } = cartContext;
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  // If cart is not empty, redirect to checkout (this page should only be accessed after successful order)
  useEffect(() => {
    if (cart.length > 0) {
      router.push('/checkout');
    }
  }, [cart, router]);

  // Generate a random order number (useEffect to avoid hydration mismatch)
  const [orderNumber, setOrderNumber] = useState('');
  
  useEffect(() => {
    setOrderNumber(`ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-500">Order Number:</span>
                <p className="font-mono text-gray-900">{orderNumber}</p>
              </div>
              <div>
                <span className="font-medium text-gray-500">Order Date:</span>
                <p className="text-gray-900">{new Date().toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          {userData && (
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-500">Name:</span>
                  <p className="text-gray-900">{userData.name}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Email:</span>
                  <p className="text-gray-900">{userData.email}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Phone:</span>
                  <p className="text-gray-900">{userData.phone}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Payment Method:</span>
                  <p className="text-gray-900 capitalize">{userData.paymentMethod}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-medium text-gray-500">Shipping Address:</span>
                  <p className="text-gray-900">
                    {userData.address}, {userData.city} - {userData.zipCode}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Order Summary */}
          {/* <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No items in this order</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚲</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.product.name}</h4>
                      <p className="text-sm text-gray-500">{item.product.brand}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div> */}

          {/* Total */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Amount:</span>
                <span className="text-green-600">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>
          )}
        </div>

        {/* Next Steps */}
        {/* <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-medium text-blue-900">Email Confirmation</h4>
              <p className="text-sm text-blue-700">Check your email for order details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="font-medium text-blue-900">Processing</h4>
              <p className="text-sm text-blue-700">We'll prepare your order for shipping</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h4 className="font-medium text-blue-900">Delivery</h4>
              <p className="text-sm text-blue-700">Estimated delivery in 3-5 business days</p>
            </div>
          </div>
        </div> */}

        {/* Action Buttons */}
        <div className="text-center space-x-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}