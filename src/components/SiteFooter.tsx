import { Link } from 'wouter';
import { storeInfo } from '@/data/store-info';

type FooterLink = { label: string; href: string };

const informationLinks: FooterLink[] = [
  { label: '私たちについて', href: '/私たちについて' }, //about us
  { label: 'お問い合わせ', href: '/お問い合わせ' }, //contact
  { label: '配送追跡', href: '/配送追跡' }, //tracking
];

const policyLinks: FooterLink[] = [
  { label: '利用規約', href: '/利用規約' }, //terms of servixe
  { label: 'プライバシーポリシー', href: '/プライバシーポリシー' }, //privacy
  { label: '返金ポリシー', href: '/返金ポリシー' }, //refund
  { label: '配送ポリシー', href: '/配送ポリシー' }, //shipping
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
          <FooterColumn title="情報" links={informationLinks} />
          <FooterColumn title="ポリシー" links={policyLinks} />
          <div className="footer-column">
            <h2 className="footer-column-title">会社概要</h2>
            <ul className="footer-company">
              <li>{storeInfo.legalName}</li>
              <li>登録番号 {storeInfo.vatNumber}</li>
              <li>{storeInfo.postalAddress}</li>
              <li>{storeInfo.contactEmail}</li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}