import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function TrackingPage() {
  const copyEmail = () => {
    navigator.clipboard?.writeText(storeInfo.contactEmail);
  };

  return (
    <InfoPage
      eyebrow="荷物の行方をチェック"
      title="配送追跡"
      intro="ご注文商品の配送状況を確認されたい場合は、ご注文番号を明記のうえ、メールにてお問い合わせください。"
    >
      <section>
        <h2>追跡の依頼方法</h2>
        <p>
          以下の件名で、<strong>{storeInfo.contactEmail}</strong>までメールをお送りください：
        </p>
        <p>
          <strong>注文番号</strong>
        </p>
        <p>記入例：注文番号 – 12345</p>
                <p>
          <button className="button-primary" type="button" onClick={copyEmail}>
            メールアドレスをコピー
          </button>
        </p>
        <p>{storeInfo.responseTime}以内にご返信いたします。</p>
      </section>

      <section>
        <h2>注文番号が届いていませんか？</h2>
        <p>
          迷惑メールフォルダをご確認ください。それでも返信が届かない場合は、<a href="/お問い合わせ">お問い合わせ</a>ページからご連絡ください。
        </p>
      </section>
    </InfoPage>
  );
}