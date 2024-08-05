export interface ReceiptItem {
  id: string;
  name: string;
  price: number;
  category?: string;
}

export interface Category {
  id: string;
  name: string;
  items: ReceiptItem[];
  color: string;
}

export interface GeneratedChartConfigItem {
  [x: string]: { label: string; color: string };
}

export interface DataItem {
  category: string;
  total: number;
  fill: string;
}
