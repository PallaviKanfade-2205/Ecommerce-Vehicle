import Link from 'next/link';
import Image from 'next/image';
import { products } from './data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Show first 3 as featured

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#0f172a_11%,_#0f172a_20%,_#0f172a_30%,_#1e293b_66%,_#334155_100%)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-4xl md:text-6xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Ride the Future with Electric Two-Wheelers
          </p>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover premium electric scooters and bikes from top brands with advanced technology and zero-emission power.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-emerald-400 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-emerald-300 transition-all shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{product.brand}</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.type}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-green-600">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Electric?</h2>
          <p className="text-xl mb-8">
            Explore our full range of electric vehicles and find your perfect ride.
          </p>
          <Link
            href="/products"
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
