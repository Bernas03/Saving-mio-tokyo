import { Plus } from 'lucide-react';
import { Link } from 'wouter';
import { products, formatPrice, type Product } from '@/data/products';
import { ProductArtwork } from '@/components/ProductArtwork';

type CollectionPageProps = {
  onAdd: (product: Product) => void;
};

export function CollectionPage({ onAdd }: CollectionPageProps) {
  return (
    <main className="collection-main">
      <header className="collection-heading">
        <div>
          <span className="eyebrow">いつもあなたのそばに</span>
          <h1>バケットバッグ</h1>
        </div>
        <p>
          シンプルなフォルム、素材本来の風合い、そして毎日のあらゆるシーンに寄り添う収納力。
        </p>
      </header>
      <section className="collection-grid" aria-label="Collection products">
        {products.map((product, index) => (
          <article
            className="product-card"
            key={product.id}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <Link href={`/商品/${product.id}`} aria-label={product.name}>
              <ProductArtwork product={product} />
            </Link>
            <div className="product-info">
              <div className="product-title-line">
                <h2>
                  <Link href={`/商品/${product.id}`}>{product.name}</Link>
                </h2>
                <span className="product-price">{formatPrice(product.price)}</span>
              </div>
              <button className="add-button" type="button" onClick={() => onAdd(product)}>
                <Plus size={13} /> カートに入れる
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}