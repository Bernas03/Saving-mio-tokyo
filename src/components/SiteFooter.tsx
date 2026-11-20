import { Link } from 'wouter';
import { storeInfo } from '@/data/store-info';

type FooterLink = { label: string; href: string };

const informationLinks: FooterLink[] = [
  { label: 'Sobre nós', href: '/sobre-nos' },
  { label: 'Contacto', href: '/contacto' },
];

const policyLinks: FooterLink[] = [
  { label: 'Termos e condições', href: '/termos-e-condicoes' },
  { label: 'Privacidade', href: '/politica-de-privacidade' },
  { label: 'Reembolso', href: '/politica-de-reembolso' },
  { label: 'Envio', href: '/politica-de-envio' },
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
          <p className="footer-copyright">© {new Date().getFullYear()} {storeInfo.name}</p>
        </div>
        <nav className="footer-columns" aria-label="Rodapé">
          <FooterColumn title="Informação" links={informationLinks} />
          <FooterColumn title="Políticas" links={policyLinks} />
          <div className="footer-column">
            <h2 className="footer-column-title">Dados da empresa</h2>
            <ul className="footer-company">
              <li>{storeInfo.legalName}</li>
              <li>Nº de registo: {storeInfo.vatNumber}</li>
              <li>{storeInfo.postalAddress}</li>
              <li>{storeInfo.contactEmail}</li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}