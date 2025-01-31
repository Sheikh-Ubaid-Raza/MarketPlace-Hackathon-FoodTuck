export interface Product {
  _id: string;
  name: string;
  _type: "food";
  image: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  originalPrice: number;
  description?: string;  // Should be a string, not number
  slug: {
    _type: "slug";
    current: string;
  };
  tags: string[];  // Should be an array of strings
  category: string;
  available: boolean;
  stripe?: string;  // stripe ID can be optional if not all products have it
  sku:string
}
