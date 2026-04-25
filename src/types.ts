export interface Deal {
  id: string;
  title: string;
  shopName: string;
  distance: string;
  discount: number;
  category: 'Food' | 'Fashion' | 'Electronics' | 'Services' | 'Beauty' | 'Sports';
  imageUrl: string;
  expiryDate: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  phone: string;
  whatsapp: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
