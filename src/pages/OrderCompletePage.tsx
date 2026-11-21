import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function OrderCompletePage() {
  return (
    <InfoPage
      eyebrow="ご注文完了"
      title="ご注文ありがとうございます"
      intro="お支払いを確認いたしました。"
    >
      <section>
        <h2>ご注文についてご不明な点はございますか？</h2>
        <p>
          ご注文についてご不明な点がございましたら、<strong>{storeInfo.contactEmail}</strong>までご連絡ください。{storeInfo.responseTime}以内にご返信いたします。
        </p>
      </section>

      <section>
        <h2>配送追跡</h2>
        <p>
          ご注文商品の配送状況を確認するには、<a href="/配送追跡">配送追跡</a>ページをご覧ください。
        </p>
      </section>
    </InfoPage>
  );
}