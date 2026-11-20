import type { Product } from '@/data/products';

type ProductArtworkProps = {
  product: Product;
  compact?: boolean;
};

export function ProductArtwork({ product, compact = false }: ProductArtworkProps) {
  return (
    <div
      className={`product-visual${compact ? ' cart-item-art' : ''}`}
    >
      <img
        className="product-photo"
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
