import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function OrderCompletePage() {
  return (
    <InfoPage
      eyebrow="Order complete"
      title="Thank you for your order"
      intro="Your payment was received."
    >
      <section>
        <h2>Questions about your order?</h2>
        <p>
          Write to <strong>{storeInfo.contactEmail}</strong> and we will reply {storeInfo.responseTime}.
        </p>
      </section>

      <section>
        <h2>Tracking</h2>
        <p>
          To check where your order is, go to our <a href="/配送追跡">tracking</a> page.
        </p>
      </section>
    </InfoPage>
  );
}