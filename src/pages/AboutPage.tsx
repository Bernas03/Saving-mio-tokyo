import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function AboutPage() {
  return (
    <InfoPage
      eyebrow="MIO TOKYO について"
      title="私たちについて"
    >
      <section>
        <h2>について {storeInfo.name}</h2>
        <p>
          {storeInfo.name} は、厳選された高品質な商品を、スムーズで透明性の高いショッピング体験とともにお届けすることを使命とするオンラインストアです。お気に入りの商品をいくつか取り扱う小さなプロジェクトとして始まり、少しずつ成長してきました。
        </p>
        <p>
          私たちは、オンラインショッピングは誠実であり、予期せぬ事態がないものであるべきだと考えています。つまり、明確な価格、明確な配送期間、そして迅速に対応してくれるカスタマーサポートです。
        </p>
      </section>

      <section>
        <h2>私たちの指針</h2>
        <ul>
          <li>
            <strong>量より質</strong> — 厳選された品揃えであり、延々と続くカタログではない
          </li>
          <li>
            <strong>透明性</strong> — 適正な価格と明確な配送時期。たとえ 配送に少し時間がかかったとしても。
          </li>
          <li>
            <strong>お客様第一</strong> — ご購入の前後を問わず、当社のチームがいつでもお手伝いいたします。
          </li>
        </ul>
      </section>

      <section>
        <h2>配送と発送元</h2>
        <p>
          価格をお求めやすく保つため、サプライヤーと直接取引を行い、複数の国へ商品を発送しています。
          平均配送日数や詳しい情報については、<a href="/配送ポリシー">配送ポリシー</a>のページをご覧ください。
        </p>
      </section>

      <section>
        <h2>お問い合わせ</h2>
        <p>
          ご質問やご不明な点がございましたら、お気軽にお問い合わせください。<strong>{storeInfo.contactEmail}</strong>までご連絡いただければ、できるだけ早くご返信いたします。
        </p>
      </section>

      <p>
        {storeInfo.name}は、<strong>{storeInfo.legalName}</strong>（登録番号：{storeInfo.vatNumber}）の商号であり、{storeInfo.postalAddress}に登録されています。
      </p>
    </InfoPage>
  );
}