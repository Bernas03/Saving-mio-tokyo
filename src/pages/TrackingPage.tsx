import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function TrackingPage() {
  const mailto = `mailto:${storeInfo.contactEmail}?subject=${encodeURIComponent('tracking - ')}`;

  return (
    <InfoPage
      eyebrow="Acompanhe a sua encomenda"
      title="Rastreamento"
      intro="Para saber onde está a sua encomenda, envie-nos um email com o número da encomenda."
    >
      <section>
        <h2>Como pedir o rastreamento</h2>
        <p>
          Envie um email para <strong>{storeInfo.contactEmail}</strong> com o seguinte assunto:
        </p>
        <p>
          <strong>tracking - número da encomenda</strong>
        </p>
        <p>Por exemplo: tracking - 12345</p>
        <p>
          <a className="button-primary" href={mailto}>
            Abrir email
          </a>
        </p>
        <p>Responderemos {storeInfo.responseTime}.</p>
      </section>

      <section>
        <h2>Não recebeu o número?</h2>
        <p>
          Verifique a pasta de spam do seu email. Se continuar sem resposta, contacte-nos através da página de{' '}
          <a href="/contacto">contacto</a>.
        </p>
      </section>
    </InfoPage>
  );
}