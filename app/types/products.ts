export type Products = {
  id: string;
  name: string;
  price: number;
  rates: number;
  image: string;
  createdAt: string;
};

export type ProductDetails = {
  owner: string;
  images: string[];
  stock: number;
  totalSolds: number;
  category: string;
};

export type Comments = {
  username: string;
  userId: string;
  rates: number;
  comment: string;
  commentCreatedAt: string;
};

export type ProductsDetail = { product: Products & ProductDetails } & {
  comments: [Comments];
};
