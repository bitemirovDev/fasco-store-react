export interface Timer {
  title: string;
  endDate: Date;
}

export type Title = {
  title: string;
  description: string;
};

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface Product {
  id: number;
  img: string;
  title: string;
  price: string;
  deals: boolean;
  newArrivals: boolean;
  sale?: Sale;
}

export interface Sale {
  title: string;
  discount: string;
}

export interface Products {
  data: Product[];
}
