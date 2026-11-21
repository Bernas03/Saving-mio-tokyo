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
    A suede bucket-style tote with a braided handle and a round charm. The adjustable strap lets you wear it over the shoulder or across the body. The interior is lined in polyester and has no inner pocket.
    <br /><br />
    <strong>Dimensions:</strong> 22 cm (width) × 17 cm (depth) × 19 cm (height).
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
          <p>Product not found.</p>
          <Link href="/collections/夢鞄">Back to the collection</Link>
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
          <Plus size={14} /> Add to cart
        </button>
      </div>
    </main>
  );
}