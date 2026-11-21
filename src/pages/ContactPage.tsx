import { useState, type FormEvent } from 'react';
import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

const subjects = [
  'An order',
  'Shipping and tracking',
  'Returns and refunds',
  'Products',
  'Other',
];

// The form opens the visitor's email app; no server processes the data.
export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${storeInfo.contactEmail}?subject=${encodeURIComponent(
      `[${storeInfo.name}] ${subject}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <InfoPage
      eyebrow="ぜひお気軽にご相談ください"
      title="お問い合わせ"
      intro="ご注文やバッグについてご質問はございますか？お気軽にお問い合わせください。"
    >
      <section className="contact-details">
        <h2>お問い合わせ先</h2>
        <dl>
          <dt>メールアドレス</dt>
          <dd>{storeInfo.contactEmail}</dd>
          <dt>営業時間</dt>
          <dd>{storeInfo.contactHours}</dd>
          <dt>返信時間</dt>
          <dd>{storeInfo.responseTime}</dd>
          <dt>住所</dt>
          <dd>{storeInfo.postalAddress}</dd>
        </dl>
      </section>

      {/* FORM DISABLED — to re-enable, remove the comment markers below
      <section>
        <h2>Send us a message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>
          <label>
            Subject
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              {subjects.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button className="button-primary" type="submit">
            Open email
          </button>
        </form>
      </section>
      */}
    </InfoPage>
  );
}