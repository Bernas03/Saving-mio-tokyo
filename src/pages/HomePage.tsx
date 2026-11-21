import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { products, formatPrice } from '@/data/products';

export function HomePage() {
  return (
    <main className="home-main">
      <section className="home-split">
        <div className="hero-copy">
          <span className="eyebrow">MIO TOKYO</span>
          <h1>
            <span className="hero-line">毎日使える</span>
            <em className="hero-line">バッグ。</em>
          </h1>
          <p className="hero-description">
            バッグの小さなコレクションです。それぞれのバッグには、説明、素材、サイズが記載されています。
          </p>
          <div className="hero-actions">
            <Link href="/コレクション" className="button-primary">
              コレクションを見る <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="home-products" aria-label="商品">
          <div className="home-products-grid">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/商品/${product.id}`}
                className="home-product-card"
                aria-label={product.name}
              >
                <img src={product.image} alt={product.name} loading="lazy" />
                <h3>{product.name}</h3>
                <span>{formatPrice(product.price)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}