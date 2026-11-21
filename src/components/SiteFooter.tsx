import { Link } from 'wouter';
import { storeInfo } from '@/data/store-info';

type FooterLink = { label: string; href: string };

const informationLinks: FooterLink[] = [
  { label: 'About us', href: '/私たちについて' },
  { label: 'Contact', href: '/お問い合わせ' },
  { label: 'Tracking', href: '/配送追跡' },
];

const policyLinks: FooterLink[] = [
  { label: 'Terms and Conditions', href: '/利用規約' },
  { label: 'Privacy', href: '/プライバシーポリシー' },
  { label: 'Refund', href: '/返金ポリシー' },
  { label: 'Shipping', href: '/配送ポリシー' },
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
          <Link href="/" className="footer-signoff">MIO TOKYO</Link>
          <p className="footer-copyright">© {new Date().getFullYear()} {storeInfo.name}</p>
        </div>
        <nav className="footer-columns" aria-label="Rodapé">
          <FooterColumn title="Information" links={informationLinks} />
          <FooterColumn title="POLICIES" links={policyLinks} />
          <div className="footer-column">
            <h2 className="footer-column-title">COMPANY DETAILS</h2>
            <ul className="footer-company">
              <li>{storeInfo.legalName}</li>
              <li>Registration No. {storeInfo.vatNumber}</li>
              <li>{storeInfo.postalAddress}</li>
              <li>{storeInfo.contactEmail}</li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}