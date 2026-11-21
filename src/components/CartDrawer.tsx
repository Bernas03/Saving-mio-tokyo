import { useEffect, useState } from 'react';
import { ArrowRight, Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { Link } from 'wouter';
import { formatPrice, type Product } from '@/data/products';
import { ProductArtwork } from '@/components/ProductArtwork';
import { startCheckout } from '@/lib/checkout';

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartDrawerProps = {
  open: boolean;
  items: CartLine[];
  onClose: () => void;
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
  onRemove: (productId: string) => void;
};

export function CartDrawer({
  open,
  items,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}: CartDrawerProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = async () => {
    setLoading(true);
    setError('');
    try {
      await startCheckout(
        items.map((line) => ({ id: line.product.id, quantity: line.quantity })),
      );
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="cart-backdrop"
        type="button"
        aria-label="Close cart"
        onClick={onClose}
      />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <header className="drawer-header">
          <h2 id="cart-title">カート</h2>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close cart">
            <X size={21} strokeWidth={1.5} />
          </button>
        </header>
        {items.length === 0 ? (
          <div className="cart-content">
            <div className="empty-cart">
              <div className="empty-symbol">
                <ShoppingBag size={27} strokeWidth={1.2} />
              </div>
              <h3>まだ空です</h3>
              <p>毎日に寄り添う、あなたのためのバッグをご用意しています。</p>
              <Link href="/コレクション" onClick={onClose}>
                コレクションを見る
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-content">
              {items.map(({ product, quantity }) => (
                <article className="cart-item" key={product.id}>
                  <ProductArtwork product={product} compact />
                  <div className="cart-item-details">
                    <h3>{product.name}</h3>
                    <p>{formatPrice(product.price)}</p>
                    <div className="quantity-control" aria-label={`Quantity of ${product.name}`}>
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${product.name}`}
                        onClick={() => onDecrement(product.id)}
                      >
                        <Minus size={12} />
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${product.name}`}
                        onClick={() => onIncrement(product.id)}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-side">
                    <span>{formatPrice(product.price * quantity)}</span>
                    <button
                      className="remove-button"
                      type="button"
                      onClick={() => onRemove(product.id)}
                    >
                      削除
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <footer className="drawer-footer">
              <div className="subtotal-row">
                <span>小計</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <button
                className="drawer-continue"
                type="button"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? 'しばらくお待ちください…' : 'レジに進む'} <ArrowRight size={15} />
              </button>
              {error && <p className="shipping-note">{error}</p>}
              <button className="remove-button" type="button" onClick={onClose}>
                買い物を続ける
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}