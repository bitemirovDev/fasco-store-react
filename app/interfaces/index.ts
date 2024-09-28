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
  rating: number;
}

export interface Sale {
  title: string;
  discount: string;
}

export interface ProductsProps {
  products: Product[];
}

export interface CardProps {
  product: Product;
}

export interface SVGProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // Теперь icon – это React-компонент
}

export interface Customer {
  id: number;
  img: string;
  customerName: string;
  review: string;
  rating: number;
  profession: string;
}

export interface PoromoCarousel {
  data: Product[];
  parentClass: string;
}

export interface ICustomersCarousel {
  data: Customer[];
  parentClass: string;
}
