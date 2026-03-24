'use client';

import { useContext } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '../../data/products';
import { CartContext } from '../../context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <div>Loading...</div>;
  }
  const { addToCart } = cartContext;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-96 md:h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-2">{product.brand}</p>
              <p className="text-3xl font-bold text-green-600 mb-6">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Battery</p>
                    <p className="text-gray-600">{product.specifications.battery}</p>
                  </div>
                  <div>
                    <p className="font-medium">Range</p>
                    <p className="text-gray-600">{product.specifications.range}</p>
                  </div>
                  <div>
                    <p className="font-medium">Top Speed</p>
                    <p className="text-gray-600">{product.specifications.topSpeed}</p>
                  </div>
                  <div>
                    <p className="font-medium">Motor</p>
                    <p className="text-gray-600">{product.specifications.motor}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full md:w-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}