import { useEffect, type ReactNode } from 'react';
import { storeInfo } from '@/data/store-info';

type InfoPageProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

// Layout comum às páginas institucionais e legais.
export function InfoPage({ eyebrow, title, intro, children }: InfoPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} — ${storeInfo.name}`;
  }, [title]);

  return (
    <main className="info-main">
      <header className="info-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {intro && <p className="info-intro">{intro}</p>}
      </header>
      <div className="info-body">{children}</div>
    </main>
  );
}
