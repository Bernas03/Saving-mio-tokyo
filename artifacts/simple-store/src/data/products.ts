export type Product = {
  id: string;
  name: string;
  price: number;
  material: string;
  color: string;
  tone: string;
  shape: 'tote' | 'pouch' | 'crossbody';
  tilt: string;
};

export const products: Product[] = [
  {
    id: 'mori-tote',
    name: 'Mori Tote',
    price: 248,
    material: 'Lona de algodão · verde musgo',
    color: '#506b59',
    tone: 'sage',
    shape: 'tote',
    tilt: '-3deg',
  },
  {
    id: 'kumo-bag',
    name: 'Kumo Bag',
    price: 286,
    material: 'Linho lavado · terracota',
    color: '#b86f53',
    tone: 'clay',
    shape: 'crossbody',
    tilt: '3deg',
  },
  {
    id: 'nami-mini',
    name: 'Nami Mini',
    price: 198,
    material: 'Algodão orgânico · azul névoa',
    color: '#617c83',
    tone: 'blue',
    shape: 'crossbody',
    tilt: '-2deg',
  },
  {
    id: 'asa-market',
    name: 'Asa Market',
    price: 224,
    material: 'Lona de algodão · areia',
    color: '#a18b5d',
    tone: 'ochre',
    shape: 'tote',
    tilt: '2deg',
  },
  {
    id: 'tsuki-pouch',
    name: 'Tsuki Pouch',
    price: 118,
    material: 'Linho lavado · rosa antigo',
    color: '#a96e68',
    tone: 'rose',
    shape: 'pouch',
    tilt: '-3deg',
  },
  {
    id: 'yori-shoulder',
    name: 'Yori Shoulder',
    price: 268,
    material: 'Algodão encerado · carvão',
    color: '#59615a',
    tone: 'lilac',
    shape: 'crossbody',
    tilt: '3deg',
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);
}
