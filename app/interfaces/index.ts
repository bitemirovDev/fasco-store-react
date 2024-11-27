export type Title = {
  title: string;
  description: string;
};

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

export interface PoromoCarousel {
  data: Product[];
  parentClass: string;
}
