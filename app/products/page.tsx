'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../data/products';

export default function ProductsPage() {
  const [brandFilter, setBrandFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [batteryFilter, setBatteryFilter] = useState('');
  const [rangeFilter, setRangeFilter] = useState('');
  const [speedFilter, setSpeedFilter] = useState('');
  const [motorFilter, setMotorFilter] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesBrand = !brandFilter || product.brand.toLowerCase() === brandFilter.toLowerCase();
      const matchesType = !typeFilter || product.type.toLowerCase() === typeFilter.toLowerCase();
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

      // Parse specifications for filtering
      const batteryValue = parseFloat(product.specifications.battery.replace(' kWh', '').replace(' Wh', '')) * (product.specifications.battery.includes('Wh') ? 0.001 : 1);
      const rangeValue = parseInt(product.specifications.range.replace(' km', ''));
      const speedValue = parseInt(product.specifications.topSpeed.replace(' km/h', ''));
      const motorValue = parseFloat(product.specifications.motor.replace(' kW', '').replace(' W', '')) * (product.specifications.motor.includes('W') ? 0.001 : 1);

      const matchesBattery = !batteryFilter || (
        batteryFilter === '1-2 kWh' && batteryValue >= 1 && batteryValue < 2 ||
        batteryFilter === '2-3 kWh' && batteryValue >= 2 && batteryValue < 3 ||
        batteryFilter === '3-4 kWh' && batteryValue >= 3 && batteryValue < 4 ||
        batteryFilter === '4+ kWh' && batteryValue >= 4
      );

      const matchesRange = !rangeFilter || (
        rangeFilter === '0-75 km' && rangeValue <= 75 ||
        rangeFilter === '75-100 km' && rangeValue > 75 && rangeValue <= 100 ||
        rangeFilter === '100-150 km' && rangeValue > 100 && rangeValue <= 150 ||
        rangeFilter === '150+ km' && rangeValue > 150
      );

      const matchesSpeed = !speedFilter || (
        speedFilter === '0-50 km/h' && speedValue <= 50 ||
        speedFilter === '50-80 km/h' && speedValue > 50 && speedValue <= 80 ||
        speedFilter === '80-100 km/h' && speedValue > 80 && speedValue <= 100 ||
        speedFilter === '100+ km/h' && speedValue > 100
      );

      const matchesMotor = !motorFilter || (
        motorFilter === '0-2 kW' && motorValue <= 2 ||
        motorFilter === '2-4 kW' && motorValue > 2 && motorValue <= 4 ||
        motorFilter === '4-6 kW' && motorValue > 4 && motorValue <= 6 ||
        motorFilter === '6+ kW' && motorValue > 6
      );

      return matchesBrand && matchesType && matchesPrice && matchesBattery && matchesRange && matchesSpeed && matchesMotor;
    });
  }, [brandFilter, typeFilter, priceRange, batteryFilter, rangeFilter, speedFilter, motorFilter]);

  const brands = [...new Set(products.map(p => p.brand))];
  const types = [...new Set(products.map(p => p.type))];

  const clearAllFilters = () => {
    setBrandFilter('');
    setTypeFilter('');
    setPriceRange({ min: 0, max: 200000 });
    setBatteryFilter('');
    setRangeFilter('');
    setSpeedFilter('');
    setMotorFilter('');
  };

  const activeFiltersCount = [
    brandFilter, typeFilter,
    batteryFilter, rangeFilter, speedFilter, motorFilter,
    priceRange.min > 0 || priceRange.max < 200000 ? 'price' : ''
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Electric Two-Wheelers</h1>
          <p className="text-lg text-gray-600">Find your perfect electric vehicle from our premium collection</p>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{filteredProducts.length}</div>
                <div className="text-sm text-gray-500">Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  ₹{Math.min(...filteredProducts.map(p => p.price)).toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-gray-500">Starting from</div>
              </div>
            </div>
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className={`bg-white rounded-xl shadow-sm border border-gray-100 mb-8 transition-all duration-300 ${showAdvancedFilters ? 'p-6' : 'p-4'}`}>
          {/* Basic Filters - Always Visible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                  className="w-1/2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                  className="w-1/2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Advanced Filters - Collapsible */}
          {showAdvancedFilters && (
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Battery Capacity</label>
                  <select
                    value={batteryFilter}
                    onChange={(e) => setBatteryFilter(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">All Capacities</option>
                    <option value="1-2 kWh">1-2 kWh</option>
                    <option value="2-3 kWh">2-3 kWh</option>
                    <option value="3-4 kWh">3-4 kWh</option>
                    <option value="4+ kWh">4+ kWh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Range</label>
                  <select
                    value={rangeFilter}
                    onChange={(e) => setRangeFilter(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">All Ranges</option>
                    <option value="0-75 km">0-75 km</option>
                    <option value="75-100 km">75-100 km</option>
                    <option value="100-150 km">100-150 km</option>
                    <option value="150+ km">150+ km</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Top Speed</label>
                  <select
                    value={speedFilter}
                    onChange={(e) => setSpeedFilter(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">All Speeds</option>
                    <option value="0-50 km/h">0-50 km/h</option>
                    <option value="50-80 km/h">50-80 km/h</option>
                    <option value="80-100 km/h">80-100 km/h</option>
                    <option value="100+ km/h">100+ km/h</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Motor Power</label>
                  <select
                    value={motorFilter}
                    onChange={(e) => setMotorFilter(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">All Powers</option>
                    <option value="0-2 kW">0-2 kW</option>
                    <option value="2-4 kW">2-4 kW</option>
                    <option value="4-6 kW">4-6 kW</option>
                    <option value="6+ kW">6+ kW</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Filter Actions */}
          {activeFiltersCount > 0 && (
            <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {product.type}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
                  <p className="text-sm font-medium text-gray-500">{product.brand}</p>
                </div>

                {/* Key Specs */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="font-semibold text-gray-900">{product.specifications.range}</div>
                    <div className="text-gray-500">Range</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="font-semibold text-gray-900">{product.specifications.topSpeed}</div>
                    <div className="text-gray-500">Top Speed</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                    <p className="text-xs text-gray-500">Starting Price</p>
                  </div>
                  
                </div>
                <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center justify-between gap-2 bg-linear-to-r from-blue-200 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    View Details
                    <svg className="w-2 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your filters to see more options.</p>
            <button
              onClick={clearAllFilters}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}