import { useState, type FormEvent } from 'react';
import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

const subjects = [
  'Uma encomenda',
  'Envios e rastreamento',
  'Devoluções e reembolsos',
  'Produtos',
  'Outro assunto',
];

// O formulário abre o cliente de email do visitante; não há servidor a processar os dados.
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
      eyebrow="Fale connosco"
      title="Contacto"
      intro="Têm alguma dúvida sobre uma encomenda ou sobre as nossas malas? Escreva-nos."
    >
      <section className="contact-details">
        <h2>Dados de contacto</h2>
        <dl>
          <dt>Email</dt>
          <dd>{storeInfo.contactEmail}</dd>
          <dt>Horário</dt>
          <dd>{storeInfo.contactHours}</dd>
          <dt>Tempo de resposta</dt>
          <dd>{storeInfo.responseTime}</dd>
          <dt>Morada</dt>
          <dd>{storeInfo.postalAddress}</dd>
        </dl>
      </section>

      <section>
        <h2>Envie-nos uma mensagem</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nome
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
            Assunto
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              {subjects.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mensagem
            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button className="button-primary" type="submit">
            Abrir email
          </button>
        </form>
      </section>
    </InfoPage>
  );
}
