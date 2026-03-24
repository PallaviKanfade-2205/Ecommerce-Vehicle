export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">ElectricBikes Store</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your premier destination for premium electric two-wheelers. Discover the future of sustainable mobility with our curated collection of electric scooters and bikes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">contact@electricbikesstore.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="/cart" className="text-gray-300 hover:text-blue-400 transition-colors">Cart</a></li>
              <li><a href="/checkout" className="text-gray-300 hover:text-blue-400 transition-colors">Checkout</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Ather</span></li>
              <li><span className="text-gray-300">Ola</span></li>
              <li><span className="text-gray-300">Bajaj</span></li>
              <li><span className="text-gray-300">TVS</span></li>
              <li><span className="text-gray-300">Hero Electric</span></li>
              <li><span className="text-gray-300">Revolt</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 ElectricBikes Store. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.609.035 6.298.129c-1.31.094-2.207.447-2.996.95a5.886 5.886 0 00-2.144 2.144c-.503.789-.856 1.686-.95 2.996C.035 7.609 0 8.396 0 12.017s.035 4.408.129 5.719c.094 1.31.447 2.207.95 2.996a5.886 5.886 0 002.144 2.144c.789.503 1.686.856 2.996.95 1.31.094 2.098.129 5.719.129s4.408-.035 5.719-.129c1.31-.094 2.207-.447 2.996-.95a5.886 5.886 0 002.144-2.144c.503-.789.856-1.686.95-2.996.094-1.31.129-2.098.129-5.719s-.035-4.408-.129-5.719c-.094-1.31-.447-2.207-.95-2.996a5.886 5.886 0 00-2.144-2.144c-.789-.503-1.686-.856-2.996-.95C16.409.035 15.622 0 12.017 0zm0 4.839a7.178 7.178 0 100 14.356 7.178 7.178 0 000-14.356zm8.533.183a1.683 1.683 0 100 3.366 1.683 1.683 0 000-3.366z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}