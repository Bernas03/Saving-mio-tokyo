import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function HomePage() {
  return (
    <main className="home-main">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">MIO TOKYO</span>
          <h1>
            Bags for everyday <em>use.</em>
          </h1>
          <p className="hero-description">
            A small collection of bags. Each one has its own description, materials and dimensions.
          </p>
          <div className="hero-actions">
            <Link href="/collections/夢鞄" className="button-primary">
              View the collection <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Bag on a soft background">
          <span className="art-sun" />
          <div className="hero-bag">
            <span className="bag-seam" />
            <span className="bag-label">M.</span>
          </div>
        </div>
      </section>
    </main>
  );
}