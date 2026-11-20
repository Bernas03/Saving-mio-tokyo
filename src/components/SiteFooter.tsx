import { Link } from 'wouter';
import { storeInfo } from '@/data/store-info';

type FooterLink = { label: string; href: string };

const shopLinks: FooterLink[] = [
  { label: 'Início', href: '/' },
  { label: 'Coleção 夢鞄', href: '/collections/夢鞄' },
  { label: 'Rastreamento', href: '/rastreamento' },
];

const helpLinks: FooterLink[] = [
  { label: 'Sobre nós', href: '/sobre-nos' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Envios', href: '/politica-de-envio' },
  { label: 'Reembolsos', href: '/politica-de-reembolso' },
];

const legalLinks: FooterLink[] = [
  { label: 'Termos e condições', href: '/termos-e-condicoes' },
  { label: 'Política de privacidade', href: '/politica-de-privacidade' },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="footer-column">
      <h2 className="footer-column-title">{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-signoff">MIO TOKYO / 夢鞄</Link>
          <p>Feito devagar. Para os seus dias.</p>
        </div>
        <nav className="footer-columns" aria-label="Rodapé">
          <FooterColumn title="Loja" links={shopLinks} />
          <FooterColumn title="Ajuda" links={helpLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {storeInfo.name}</span>
        <span>{storeInfo.legalName}</span>
      </div>
    </footer>
  );
}
