import { ShoppingBag } from 'lucide-react';
import { Link } from 'wouter';

type StoreHeaderProps = {
  itemCount: number;
  onOpenCart: () => void;
};

export function StoreHeader({ itemCount, onOpenCart }: StoreHeaderProps) {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="MIO TOKYO — home">
        <span className="brand-mark">M</span>
        <span className="brand-word">MIO TOKYO</span>
      </Link>
      <nav className="header-nav" aria-label="Main navigation">
        <Link href="/">トップページ</Link>
        <Link href="/コレクション">コレクション</Link>
      </nav>
      <button
        className="cart-trigger"
        type="button"
        onClick={onOpenCart}
        aria-label={`Open cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
      >
        <span>カート</span>
        <ShoppingBag size={17} strokeWidth={1.5} aria-hidden="true" />
        <span className="cart-count">{itemCount}</span>
      </button>
    </header>
  );
}