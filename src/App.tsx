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
        <h1>Este caminho não existe.</h1>
        <Link href="/">Home Page</Link>
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
        <Route path="/collections/夢鞄">
          <CollectionPage onAdd={addToCart} />
        </Route>
        <Route path="/collections/%E5%A4%A2%E9%9E%84">
          <CollectionPage onAdd={addToCart} />
        </Route>
        <Route path="/sobre-nos">
          <AboutPage />
        </Route>
        <Route path="/contacto">
          <ContactPage />
        </Route>
        <Route path="/rastreamento">
          <TrackingPage />
        </Route>
        <Route path="/termos-e-condicoes">
          <TermsPage />
        </Route>
        <Route path="/politica-de-privacidade">
          <PrivacyPage />
        </Route>
        <Route path="/politica-de-reembolso">
          <RefundPage />
        </Route>
        <Route path="/politica-de-envio">
          <ShippingPage />
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
