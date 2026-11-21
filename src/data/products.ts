export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  secondaryImage: string;
};

const base = import.meta.env.BASE_URL;

export const products: Product[] = [
  {
    id: 'bucket-bag-blue',
    name: 'Bucket Bag — Blue',
    price: 6000,
    image: `${base}products/azul.png`,
    secondaryImage: `${base}products/azul2.png`,
  },
  {
    id: 'bucket-bag-brown',
    name: 'Bucket Bag — Brown',
    price: 6000,
    image: `${base}products/castanho.png`,
    secondaryImage: `${base}products/castanho2.png`,
  },
  {
    id: 'bucket-bag-green',
    name: 'Bucket Bag — Green',
    price: 6000,
    image: `${base}products/verde.png`,
    secondaryImage: `${base}products/verde2.png`,
  },
  {
    id: 'bucket-bag-red',
    name: 'Bucket Bag — Yellow',
    price: 6000,
    image: `${base}products/amarelo.png`,
    secondaryImage: `${base}products/amarelo2.png`,
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(price);
}