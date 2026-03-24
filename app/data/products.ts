export interface Product {
  id: string;
  name: string;
  brand: string;
  type: string; // e.g., scooter, bike
  price: number;
  image: string;
  description: string;
  specifications: {
    battery: string;
    range: string;
    topSpeed: string;
    motor: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ather 450X',
    brand: 'Ather',
    type: 'scooter',
    price: 145000,
    image: '/images/ather-450x.jpg',
    description: 'A premium electric scooter with advanced features.',
    specifications: {
      battery: '3.7 kWh',
      range: '146 km',
      topSpeed: '90 km/h',
      motor: '6.4 kW'
    }
  },
  {
    id: '2',
    name: 'Chetak Premium',
    brand: 'Bajaj',
    type: 'scooter',
    price: 120000,
    image: '/images/chetak-premium.jpg',
    description: 'Reliable and stylish electric scooter.',
    specifications: {
      battery: '3 kWh',
      range: '95 km',
      topSpeed: '70 km/h',
      motor: '4 kW'
    }
  },
  {
    id: '3',
    name: 'Ola S1 Pro',
    brand: 'Ola',
    type: 'scooter',
    price: 130000,
    image: '/images/ola-s1-pro.jpg',
    description: 'High-performance electric scooter with smart features.',
    specifications: {
      battery: '4 kWh',
      range: '181 km',
      topSpeed: '116 km/h',
      motor: '8.5 kW'
    }
  },
  {
    id: '4',
    name: 'TVS iQube Electric',
    brand: 'TVS',
    type: 'scooter',
    price: 110000,
    image: '/images/tvs-iqube.jpg',
    description: 'Affordable and efficient electric scooter.',
    specifications: {
      battery: '3.04 kWh',
      range: '75 km',
      topSpeed: '78 km/h',
      motor: '3 kW'
    }
  },
  {
    id: '5',
    name: 'Hero Electric Optima',
    brand: 'Hero',
    type: 'scooter',
    price: 75000,
    image: '/images/hero-optima.jpg',
    description: 'Budget-friendly electric scooter for daily commute.',
    specifications: {
      battery: '1.5 kWh',
      range: '50 km',
      topSpeed: '25 km/h',
      motor: '250 W'
    }
  },
  {
    id: '6',
    name: 'Revolt RV400',
    brand: 'Revolt',
    type: 'bike',
    price: 130000,
    image: '/images/revolt-rv400.jpg',
    description: 'Powerful electric bike for adventure.',
    specifications: {
      battery: '3.24 kWh',
      range: '150 km',
      topSpeed: '85 km/h',
      motor: '3 kW'
    }
  },
  {
    id: '7',
    name: 'Ather 450 Plus',
    brand: 'Ather',
    type: 'scooter',
    price: 125000,
    image: '/images/ather-450-plus.jpg',
    description: 'Enhanced version of the popular Ather 450 with better range.',
    specifications: {
      battery: '3.7 kWh',
      range: '116 km',
      topSpeed: '80 km/h',
      motor: '5.4 kW'
    }
  },
  {
    id: '8',
    name: 'Ola S1 Air',
    brand: 'Ola',
    type: 'scooter',
    price: 95000,
    image: '/images/ola-s1-air.jpg',
    description: 'Lightweight and efficient electric scooter for city commuting.',
    specifications: {
      battery: '3 kWh',
      range: '101 km',
      topSpeed: '85 km/h',
      motor: '4 kW'
    }
  },
  {
    id: '9',
    name: 'Bajaj Chetak Urban',
    brand: 'Bajaj',
    type: 'scooter',
    price: 100000,
    image: '/images/bajaj-chetak-urban.jpg',
    description: 'Urban-focused electric scooter with modern design.',
    specifications: {
      battery: '2.5 kWh',
      range: '85 km',
      topSpeed: '63 km/h',
      motor: '3 kW'
    }
  },
  {
    id: '10',
    name: 'TVS iQube S',
    brand: 'TVS',
    type: 'scooter',
    price: 125000,
    image: '/images/tvs-iqube-s.jpg',
    description: 'Premium version of iQube with enhanced features.',
    specifications: {
      battery: '3.4 kWh',
      range: '100 km',
      topSpeed: '82 km/h',
      motor: '4.4 kW'
    }
  },
  {
    id: '11',
    name: 'Hero Electric Photon',
    brand: 'Hero',
    type: 'bike',
    price: 95000,
    image: '/images/hero-photon.jpg',
    description: 'Affordable electric bike for daily commuting.',
    specifications: {
      battery: '1.5 kWh',
      range: '80 km',
      topSpeed: '45 km/h',
      motor: '1 kW'
    }
  },
  {
    id: '12',
    name: 'Revolt RV300',
    brand: 'Revolt',
    type: 'bike',
    price: 110000,
    image: '/images/revolt-rv300.jpg',
    description: 'Mid-range electric bike with good performance.',
    specifications: {
      battery: '2.7 kWh',
      range: '120 km',
      topSpeed: '65 km/h',
      motor: '1.5 kW'
    }
  },
  {
    id: '13',
    name: 'Ampere Magnus Pro',
    brand: 'Ampere',
    type: 'scooter',
    price: 85000,
    image: '/images/ampere-magnus-pro.jpg',
    description: 'Value-for-money electric scooter with decent range.',
    specifications: {
      battery: '2.3 kWh',
      range: '121 km',
      topSpeed: '50 km/h',
      motor: '1.5 kW'
    }
  },
  {
    id: '14',
    name: 'Okinawa iPraise Pro',
    brand: 'Okinawa',
    type: 'scooter',
    price: 105000,
    image: '/images/okinawa-ipraise-pro.jpg',
    description: 'Feature-rich electric scooter with digital display.',
    specifications: {
      battery: '2.9 kWh',
      range: '139 km',
      topSpeed: '56 km/h',
      motor: '2 kW'
    }
  },
  {
    id: '15',
    name: 'Ather Rizta',
    brand: 'Ather',
    type: 'bike',
    price: 95000,
    image: '/images/ather-rizta.jpg',
    description: 'Stylish electric bike for urban riders.',
    specifications: {
      battery: '2.9 kWh',
      range: '110 km',
      topSpeed: '75 km/h',
      motor: '3 kW'
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
};

export const getProductsByType = (type: string): Product[] => {
  return products.filter(product => product.type.toLowerCase() === type.toLowerCase());
};

export const getProductsInPriceRange = (min: number, max: number): Product[] => {
  return products.filter(product => product.price >= min && product.price <= max);
};