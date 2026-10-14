import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function HomePage() {
  return (
    <main className="home-main">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Pequenos lotes, feitos com cuidado</span>
          <h1>Leve o que <em>importa.</em></h1>
          <p className="hero-description">
            Malas para os caminhos de todos os dias. Desenhadas com calma, costuradas uma a uma.
          </p>
          <div className="hero-actions">
            <Link href="/collections/夢鞄" className="button-primary">
              Ver a coleção <ArrowRight size={15} />
            </Link>
              <span className="hero-note">Feito à mão, perto de si.</span>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Bolsa artesanal verde em um cenário suave">
          <span className="art-sun" />
          <span className="art-caption">日々のかばん</span>
          <div className="hero-bag">
            <span className="bag-seam" />
            <span className="bag-label">M.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
