export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const base = import.meta.env.BASE_URL;

export const products: Product[] = [
  {
    id: 'bucket-bag-blue',
    name: 'Bucket Bag — Blue',
    price: 6000,
    image: `${base}products/azul.png`,
  },
  {
    id: 'bucket-bag-brown',
    name: 'Bucket Bag — Brown',
    price: 6000,
    image: `${base}products/castanho.png`,
  },
  {
    id: 'bucket-bag-green',
    name: 'Bucket Bag — Green',
    price: 6000,
    image: `${base}products/verde.png`,
  },
  {
    id: 'bucket-bag-red',
    name: 'Bucket Bag — Red',
    price: 6000,
    image: `${base}products/vermelho.png`,
  },
];

// Fotos extra, para a futura página de produto (galeria / tabela de medidas).
export const extraProductPhotos = [
  `${base}products/another.png`,
  `${base}products/home-page.png`,
  `${base}products/size.png`,
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(price);
}