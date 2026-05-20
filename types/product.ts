// types/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  tag?: string;
}

export type ProductType = 
  | 'Groceries'
  | 'Drinks & Beverages'
  | 'Beauty & Personal Care'
  | 'Household Items'
  | 'Bakery'
  | 'Frozen Foods'
  | 'Electrical Items'
  | 'Gifts & Books'
  | 'Fresh Produce';