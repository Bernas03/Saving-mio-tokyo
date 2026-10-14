import type { CSSProperties } from 'react';
import type { Product } from '@/data/products';

type ProductArtworkProps = {
  product: Product;
  compact?: boolean;
};

export function ProductArtwork({ product, compact = false }: ProductArtworkProps) {
  return (
    <div
      className={`product-visual visual-${product.tone}${compact ? ' cart-item-art' : ''}`}
      role="img"
      aria-label={`Ilustração da bolsa ${product.name}`}
    >
      <div
        className={`product-bag ${product.shape}`}
        style={{
          '--bag-color': product.color,
          '--tilt': product.tilt,
        } as CSSProperties}
      >
        {product.shape === 'crossbody' && <span className="bag-strap" />}
      </div>
    </div>
  );
}
