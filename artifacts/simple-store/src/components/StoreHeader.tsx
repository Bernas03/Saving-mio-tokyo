import { ShoppingBag } from 'lucide-react';
import { Link } from 'wouter';

type StoreHeaderProps = {
  itemCount: number;
  onOpenCart: () => void;
};

export function StoreHeader({ itemCount, onOpenCart }: StoreHeaderProps) {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="YUME — página inicial">
        <span className="brand-mark">夢</span>
        <span className="brand-word">YUME</span>
      </Link>
      <nav className="header-nav" aria-label="Navegação principal">
        <Link href="/">Início</Link>
        <Link href="/collections/夢鞄">Coleção 夢鞄</Link>
      </nav>
      <button
        className="cart-trigger"
        type="button"
        onClick={onOpenCart}
        aria-label={`Abrir carrinho, ${itemCount} ${itemCount === 1 ? 'artigo' : 'artigos'}`}
      >
        <span>Carrinho</span>
        <ShoppingBag size={17} strokeWidth={1.5} aria-hidden="true" />
        <span className="cart-count">{itemCount}</span>
      </button>
    </header>
  );
}
