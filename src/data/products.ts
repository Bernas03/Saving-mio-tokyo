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
    name: 'バケットバッグ — ブルー',
    price: 11000,
    image: `${base}products/blue.png`,
    secondaryImage: `${base}products/blue2.png`,
  },
  {
    id: 'bucket-bag-brown',
    name: 'バケットバッグ — ブラウン',
    price: 11000,
    image: `${base}products/brown.png`,
    secondaryImage: `${base}products/brown2.png`,
  },
  {
    id: 'bucket-bag-green',
    name: 'バケットバッグ — グリーン',
    price: 11000,
    image: `${base}products/green.png`,
    secondaryImage: `${base}products/green2.png`,
  },
  {
    id: 'bucket-bag-yellow',
    name: 'バケットバッグ — レッド',
    price: 11000,
    image: `${base}products/yellow.png`,
    secondaryImage: `${base}products/yellow2.png`,
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(price);
}