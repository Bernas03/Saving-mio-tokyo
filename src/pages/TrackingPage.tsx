import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function TrackingPage() {
  const copyEmail = () => {
    navigator.clipboard?.writeText(storeInfo.contactEmail);
  };

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
          <button className="button-primary" type="button" onClick={copyEmail}>
            Copy email address
          </button>
        </p>
        <p>We will reply {storeInfo.responseTime}.</p>
      </section>

      <section>
        <h2>Didn't receive a number?</h2>
        <p>
          Check your spam folder. If you still get no reply, contact us through our{' '}
          <a href="/お問い合わせ">contact</a> page.
        </p>
      </section>
    </InfoPage>
  );
}