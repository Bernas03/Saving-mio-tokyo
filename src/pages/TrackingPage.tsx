import { useState, type FormEvent } from 'react';
import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

// Não há integração com a loja: o número da encomenda é enviado à página de rastreamento da transportadora.
export function TrackingPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const code = orderNumber.trim();
    if (!code) return;
    setSubmitted(code);
  };

  const trackingLink = submitted
    ? `${storeInfo.carrierTrackingUrl}${encodeURIComponent(submitted)}`
    : null;

  return (
    <InfoPage
      eyebrow="Acompanhe a sua encomenda"
      title="Rastreamento"
      intro="Assim que a sua encomenda for expedida, receberá por email o número de rastreamento."
    >
      <section>
        <h2>Como acompanhar</h2>
        <p>
          Introduza o número da sua encomenda abaixo. Vai ser encaminhado para a página de
          acompanhamento da transportadora ({storeInfo.carrierName}).
        </p>
        <form className="tracking-form" onSubmit={handleSubmit}>
          <label>
            Número da encomenda ou de rastreamento
            <input
              value={orderNumber}
              onChange={(e) => {
                setOrderNumber(e.target.value);
                setSubmitted(null);
              }}
              required
              autoComplete="off"
            />
          </label>
          <button className="button-primary" type="submit">
            Verificar
          </button>
        </form>
        {trackingLink && (
          <p className="tracking-result">
            <a href={trackingLink} target="_blank" rel="noopener noreferrer">
              Ver estado da encomenda {submitted} na transportadora
            </a>
          </p>
        )}
      </section>

      <section>
        <h2>Não recebeu o número?</h2>
        <p>
          Verifique a pasta de spam do seu email. Se continuar sem resposta, contacte-nos
          através da página de <a href="/contacto">contacto</a>.
        </p>
      </section>
    </InfoPage>
  );
}
