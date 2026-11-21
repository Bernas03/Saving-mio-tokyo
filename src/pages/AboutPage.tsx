import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function AboutPage() {
  return (
    <InfoPage
      eyebrow="About MIO TOKYO"
      title="About us"
    >
      <section>
        <h2>About {storeInfo.name}</h2>
        <p>
          {storeInfo.name} is an online store with a simple mission: to make well-selected,
          good-quality products accessible, with a smooth and transparent shopping experience.
          It started as a small project with a few favourite products and has grown gradually.
        </p>
        <p>
          We believe online shopping should be honest and free of surprises: clear prices, clear
          delivery times and customer support that responds.
        </p>
      </section>

      <section>
        <h2>What guides us</h2>
        <ul>
          <li>
            <strong>Quality over quantity</strong> — a careful selection, not an endless catalogue.
          </li>
          <li>
            <strong>Transparency</strong> — honest prices and clear delivery times, even when a
            delivery takes a little longer.
          </li>
          <li>
            <strong>Customers first</strong> — our team is available to help, before and after you
            buy.
          </li>
        </ul>
      </section>

      <section>
        <h2>Shipping and origin</h2>
        <p>
          To keep prices competitive, we work directly with suppliers and ship to several
          countries. Average delivery times and all the details are on our{' '}
          <a href="/配送ポリシー">shipping policy</a> page.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions? Our team is happy to help. Write to{' '}
          <strong>{storeInfo.contactEmail}</strong> and we will reply as soon as possible.
        </p>
      </section>

      <p>
        {storeInfo.name} is the trading name of <strong>{storeInfo.legalName}</strong> (Registration
        No. {storeInfo.vatNumber}), registered at {storeInfo.postalAddress}.
      </p>
    </InfoPage>
  );
}