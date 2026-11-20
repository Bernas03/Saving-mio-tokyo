import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function TrackingPage() {
  const mailto = `mailto:${storeInfo.contactEmail}?subject=${encodeURIComponent('tracking - ')}`;

  return (
    <InfoPage
      eyebrow="Track your order"
      title="Tracking"
      intro="To find out where your order is, send us an email with your order number."
    >
      <section>
        <h2>How to request tracking</h2>
        <p>
          Send an email to <strong>{storeInfo.contactEmail}</strong> with this subject:
        </p>
        <p>
          <strong>tracking - order number</strong>
        </p>
        <p>For example: tracking - 12345</p>
        <p>
          <a className="button-primary" href={mailto}>
            Open email
          </a>
        </p>
        <p>We will reply {storeInfo.responseTime}.</p>
      </section>

      <section>
        <h2>Didn't receive a number?</h2>
        <p>
          Check your spam folder. If you still get no reply, contact us through our{' '}
          <a href="/contact">contact</a> page.
        </p>
      </section>
    </InfoPage>
  );
}