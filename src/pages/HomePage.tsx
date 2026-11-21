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
            Bags for everyday <em>use.</em>
          </h1>
          <p className="hero-description">
            A small collection of bags. Each one has its own description, materials and dimensions.
          </p>
          <div className="hero-actions">
            <Link href="/コレクション" className="button-primary">
              View the collection <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="home-products" aria-label="Products">
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