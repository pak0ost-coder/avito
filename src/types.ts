export type ProductStatus = 'IN_STOCK' | 'SHIPPING' | 'RESERVED' | 'SOLD';

export interface Product {
  id: string;
  brand: string;
  model: string;
  specs: string;
  purchasePrice: number;
  salePrice?: number;
  source: string;
  imei: string;
  comments?: string;
  status: ProductStatus;
  purchaseDate: string;
  saleDate?: string;
}

export interface Expense {
  id: string;
  type: 'Rent' | 'Marketing' | 'Logistics';
  amount: number;
  date: string;
}

export interface Settings {
  staleThreshold: number;
}
