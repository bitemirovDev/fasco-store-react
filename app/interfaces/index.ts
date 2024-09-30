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
  rating: number;
  tags: {
    deals: boolean;
    newArrivals: boolean;
    discount?: {
      title: string;
      percent: string;
    };
  };
  categoryId: number;
  stock: number;
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

export interface CustomersCarouselProps {
  data: Customer[];
  parentClass: string;
}
