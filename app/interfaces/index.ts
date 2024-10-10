export type Title = {
  title: string;
  description: string;
};

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

type Category = {
  id: number;
  name: string;
};

export interface Discount {
  title: string;
  percent: number;
}

export interface Tags {
  deals: boolean;
  newArrivals: boolean;
  discount?: Discount;
}

export interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  rating: number;
  tags: Tags;
  category: Category;
  stock: number;
}

export interface ProductsProps {
  products: Product[];
  loading: boolean;
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

export interface CustomersCarouselProps {
  data: Customer[];
  parentClass: string;
}
