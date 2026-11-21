import { useEffect } from 'react';
import { ArrowRight, Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { Link } from 'wouter';
import { formatPrice, type Product } from '@/data/products';
import { ProductArtwork } from '@/components/ProductArtwork';

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
          <h2 id="cart-title">Cart</h2>
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
              <h3>Still empty</h3>
              <p>We have a bag designed to accompany you through every day.</p>
              <Link href="/コレクション" onClick={onClose}>
                Discover the Collection
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
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <footer className="drawer-footer">
              <div className="subtotal-row">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <button className="drawer-continue" type="button" onClick={onClose}>
                Continue Shopping <ArrowRight size={15} />
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}