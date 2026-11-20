export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 'mystic-chat',
    name: 'サック アルティザナル - ミスティック チャット',
    price: 6000,
    image: `${import.meta.env.BASE_URL}products/product-1.jpg`,
  },
  {
    id: 'cyan-enchante',
    name: 'サック アルティザナル マテラッセ - シアン エンシャンテ',
    price: 6000,
    image: `${import.meta.env.BASE_URL}products/product-2.jpg`,
  },
  {
    id: 'yorkshire-charm',
    name: 'サック アルティザナル - ヨークシャーの魅力',
    price: 6000,
    image: `${import.meta.env.BASE_URL}products/product-3.jpg`,
  },
  {
    id: 'black-cat-book-bag',
    name: 'サック・アルティザナル - 黒猫デザインの書籍用バッグ',
    price: 6000,
    image: `${import.meta.env.BASE_URL}products/product-4.jpg`,
  },
  {
    id: 'flower-quilted-bag',
    name: 'フラワーパターン キルティングバッグ',
    price: 6000,
    image: `${import.meta.env.BASE_URL}products/product-5.jpg`,
  },
  {
    id: 'black-cat-and-books',
    name: 'サック アルティザナル マテラッセ - ブラックキャットと書籍',
    price: 6000,
    image: `${import.meta.env.BASE_URL}products/product-6.jpg`,
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(price);
}
