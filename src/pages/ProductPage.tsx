import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { Plus } from 'lucide-react';
import { products, formatPrice, type Product } from '@/data/products';

type ProductPageProps = {
  onAdd: (product: Product) => void;
};

const base = import.meta.env.BASE_URL;

const description = (
  <>
    編み込みハンドルと丸いチャームが特徴の、スエード調のバケット型トートバッグです。調節可能なストラップ付きで、肩掛けや斜め掛けの2WAYでお使いいただけます。内側はポリエステル素材の裏地付きで、内ポケットはありません。
    <br /><br />
    <strong>サイズ：</strong>幅22 cm × 奥行17 cm × 高さ19 cm
  </>
);

export function ProductPage({ onAdd }: ProductPageProps) {
  const params = useParams();
  const product = products.find((item) => item.id === params.id);
  const [active, setActive] = useState(0);

  if (!product) {
    return (
      <main className="product-page">
        <div>
          <p>商品が見つかりません</p>
          <Link href="/collections/夢鞄">コレクションに戻る</Link>
        </div>
      </main>
    );
  }

  const gallery = [product.image, product.secondaryImage];

  return (
    <main className="product-page">
      <div className="product-gallery">
        <div className="product-gallery-thumbs">
          {gallery.map((src, index) => (
            <button
              key={src}
              type="button"
              className={index === active ? 'is-active' : undefined}
              onClick={() => setActive(index)}
              aria-label={`Photo ${index + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
        <div className="product-gallery-main">
          <img src={gallery[active]} alt={product.name} />
        </div>
      </div>

      <div className="product-details">
        <span className="eyebrow">MIO TOKYO</span>
        <h1>{product.name}</h1>
        <p className="product-detail-price">{formatPrice(product.price)}</p>
        <p className="product-detail-description">{description}</p>
        <button
          className="button-primary product-add"
          type="button"
          onClick={() => onAdd(product)}
        >
          <Plus size={14} /> カートに入れる
        </button>
      </div>
    </main>
  );
}