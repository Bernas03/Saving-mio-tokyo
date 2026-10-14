import { Plus } from 'lucide-react';
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
          <span className="eyebrow">Feitas para acompanhar</span>
          <h1>夢鞄 <span lang="ja">— malas de sonho</span></h1>
        </div>
        <p>
          Formas simples, tecidos honestos e espaço para tudo o que faz o seu dia.
          Seis peças, cada uma com o seu próprio ritmo.
        </p>
      </header>
      <section className="collection-grid" aria-label="Produtos da coleção">
        {products.map((product, index) => (
          <article
            className="product-card"
            key={product.id}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <ProductArtwork product={product} />
            <div className="product-info">
              <div className="product-title-line">
                <h2>{product.name}</h2>
                <span className="product-price">{formatPrice(product.price)}</span>
              </div>
              <p className="product-meta">{product.material}</p>
              <button className="add-button" type="button" onClick={() => onAdd(product)}>
                <Plus size={13} /> Adicionar ao carrinho
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
