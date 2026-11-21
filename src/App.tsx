import { type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { CartDrawer, type CartLine } from '@/components/CartDrawer';
import { StoreHeader } from '@/components/StoreHeader';
import type { Product } from '@/data/products';
import { CollectionPage } from '@/pages/CollectionPage';
import { HomePage } from '@/pages/HomePage';
import { SiteFooter } from '@/components/SiteFooter';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { TrackingPage } from '@/pages/TrackingPage';
import { ProductPage } from '@/pages/ProductPage';
import { OrderCompletePage } from '@/pages/OrderCompletePage';
import {
  PrivacyPage,
  RefundPage,
  ShippingPage,
  TermsPage,
} from '@/pages/PolicyPages';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
  Link,
} from 'wouter';

const queryClient = new QueryClient();

function NotFoundPage() {
  return (
    <main className="not-found">
      <div>
        <span className="eyebrow">MIO TOKYO / 夢鞄</span>
        <h1>This page does not exist.</h1>
        <Link href="/">Back to home</Link>
      </div>
    </main>
  );
}

function Storefront() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const itemCount = cart.reduce((sum, line) => sum + line.quantity, 0);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((line) => line.product.id === product.id);
      if (existing) {
        return current.map((line) =>
          line.product.id === product.id
            ? { ...line, quantity: line.quantity + 1 }
            : line,
        );
      }
      return [...current, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const increment = (productId: string) => {
    setCart((current) =>
      current.map((line) =>
        line.product.id === productId
          ? { ...line, quantity: line.quantity + 1 }
          : line,
      ),
    );
  };

  const decrement = (productId: string) => {
    setCart((current) =>
      current.flatMap((line) => {
        if (line.product.id !== productId) {
          return [line];
        }
        return line.quantity <= 1
          ? []
          : [{ ...line, quantity: line.quantity - 1 }];
      }),
    );
  };

  const remove = (productId: string) => {
    setCart((current) => current.filter((line) => line.product.id !== productId));
  };

  return (
    <div className="page-shell">
      <StoreHeader itemCount={itemCount} onOpenCart={() => setCartOpen(true)} />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/コレクション">
          <CollectionPage onAdd={addToCart} />
        </Route>
        <Route path="/商品/:id">
          <ProductPage onAdd={addToCart} />
        </Route>
        <Route path="/私たちについて">
          <AboutPage />
        </Route>
        <Route path="/お問い合わせ">
          <ContactPage />
        </Route>
        <Route path="/配送追跡">
          <TrackingPage />
        </Route>
        <Route path="/利用規約">
          <TermsPage />
        </Route>
        <Route path="/プライバシーポリシー">
          <PrivacyPage />
        </Route>
        <Route path="/返金ポリシー">
          <RefundPage />
        </Route>
        <Route path="/配送ポリシー">
          <ShippingPage />
        </Route>
        <Route path="/注文完了">
          <OrderCompletePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <SiteFooter />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={remove}
      />
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Storefront />
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
