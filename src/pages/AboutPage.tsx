import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function AboutPage() {
  return (
    <InfoPage
      eyebrow="A MIO TOKYO"
      title="Sobre nós"
    >
      <section>
        <h2>Sobre a {storeInfo.name}</h2>
        <p>
          A {storeInfo.name} é uma loja online com uma missão simples: tornar acessíveis produtos
          bem selecionados e de boa qualidade, com uma experiência de compra fluida e transparente.
          Começou como um pequeno projeto, com alguns produtos favoritos, e foi crescendo aos poucos.
        </p>
        <p>
          Acreditamos que comprar online deve ser honesto e sem surpresas: preços claros, prazos de
          entrega claros e um apoio ao cliente que responde.
        </p>
      </section>

      <section>
        <h2>O que nos guia</h2>
        <ul>
          <li>
            <strong>Qualidade acima de quantidade</strong> — uma seleção cuidada, não um catálogo
            interminável.
          </li>
          <li>
            <strong>Transparência</strong> — preços honestos e prazos de entrega claros, mesmo quando
            uma entrega demora um pouco mais.
          </li>
          <li>
            <strong>Cliente em primeiro lugar</strong> — a nossa equipa está disponível para ajudar,
            antes e depois da compra.
          </li>
        </ul>
      </section>

      <section>
        <h2>Envios e origem</h2>
        <p>
          Para oferecer preços competitivos, trabalhamos diretamente com fornecedores e enviamos
          para vários países. O tempo médio de entrega e todos os detalhes estão na página de{' '}
          <a href="/politica-de-envio">envio</a>.
        </p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>
          Dúvidas? A nossa equipa tem todo o gosto em ajudar. Escreva para{' '}
          <strong>{storeInfo.contactEmail}</strong> e responderemos o mais brevemente possível.
        </p>
      </section>

      <p>
        {storeInfo.name} é o nome comercial de <strong>{storeInfo.legalName}</strong> (Nº de registo{' '}
        {storeInfo.vatNumber}), com sede em {storeInfo.postalAddress}.
      </p>
    </InfoPage>
  );
}