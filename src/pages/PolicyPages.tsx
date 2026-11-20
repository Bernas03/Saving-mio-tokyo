import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

// Textos legais em rascunho. Os valores entre [ ] têm de ser confirmados
// pela empresa e revistos por um profissional jurídico antes de publicar.

export function TermsPage() {
  return (
    <InfoPage eyebrow="Legal" title="Termos e condições" intro={`Última atualização: [data].`}>
      <section>
        <h2>1. Quem somos</h2>
        <p>
          Este site é explorado pela {storeInfo.legalName} (NIF/VAT {storeInfo.vatNumber}), com sede em{' '}
          {storeInfo.postalAddress}. Ao utilizar a loja {storeInfo.name}, aceita estes termos.
        </p>
      </section>
      <section>
        <h2>2. Produtos e preços</h2>
        <p>
          Os produtos são apresentados com a maior precisão possível, incluindo cores e dimensões. Pequenas
          variações de tonalidade podem ocorrer devido ao ecrã utilizado. Os preços são indicados em [moeda],
          com [IVA incluído / excluído], e podem ser alterados sem aviso prévio, sem afetar encomendas já confirmadas.
        </p>
      </section>
      <section>
        <h2>3. Encomendas</h2>
        <p>
          A encomenda fica confirmada após o pagamento e o envio de confirmação por email. Reservamo-nos o
          direito de recusar ou cancelar encomendas em caso de erro evidente de preço, de stock ou de suspeita de fraude.
        </p>
      </section>
      <section>
        <h2>4. Pagamento</h2>
        <p>Os pagamentos são processados através de [prestador de pagamentos]. Não guardamos dados de cartão.</p>
      </section>
      <section>
        <h2>5. Propriedade intelectual</h2>
        <p>
          Textos, imagens, logótipos e designs deste site pertencem à {storeInfo.legalName} ou são utilizados
          com autorização. Não podem ser reproduzidos sem consentimento escrito.
        </p>
      </section>
      <section>
        <h2>6. Responsabilidade</h2>
        <p>
          Na medida permitida pela lei, a responsabilidade da loja limita-se ao valor pago pela encomenda em causa.
          Nada nestes termos afeta os seus direitos como consumidor.
        </p>
      </section>
      <section>
        <h2>7. Lei aplicável</h2>
        <p>Estes termos são regidos pela lei de [país]. Litígios serão resolvidos pelos tribunais competentes de [foro].</p>
      </section>
      <section>
        <h2>8. Contacto</h2>
        <p>
          Para qualquer dúvida sobre estes termos, escreva para {storeInfo.contactEmail} ou consulte a página de{' '}
          <a href="/contacto">contacto</a>.
        </p>
      </section>
    </InfoPage>
  );
}

export function PrivacyPage() {
  return (
    <InfoPage eyebrow="Legal" title="Política de privacidade" intro="Como recolhemos, usamos e protegemos os seus dados pessoais.">
      <section>
        <h2>Responsável pelo tratamento</h2>
        <p>
          {storeInfo.legalName}, {storeInfo.postalAddress}, email {storeInfo.contactEmail}.
        </p>
      </section>
      <section>
        <h2>Dados que recolhemos</h2>
        <p>
          Nome, email, morada de entrega e de faturação, número de telefone (se indicado), dados da encomenda e
          registos de navegação necessários ao funcionamento do site.
        </p>
      </section>
      <section>
        <h2>Para que os usamos</h2>
        <p>
          Processar e entregar encomendas, responder a pedidos de contacto, cumprir obrigações fiscais e legais
          e, com o seu consentimento, enviar novidades da loja.
        </p>
      </section>
      <section>
        <h2>Base legal</h2>
        <p>Execução do contrato, cumprimento de obrigações legais, interesse legítimo e consentimento, conforme o caso.</p>
      </section>
      <section>
        <h2>Partilha com terceiros</h2>
        <p>
          Partilhamos dados apenas com prestadores necessários à operação, como pagamentos, transportadoras e
          serviços de alojamento, e apenas na medida do necessário.
        </p>
      </section>
      <section>
        <h2>Conservação</h2>
        <p>Guardamos os dados pelo período exigido pela lei ou pelo tempo necessário para as finalidades indicadas: [prazo].</p>
      </section>
      <section>
        <h2>Os seus direitos</h2>
        <p>
          Pode pedir acesso, retificação, apagamento, limitação ou portabilidade dos seus dados, e opor-se ao
          tratamento ou retirar o consentimento a qualquer momento. Para isso, contacte {storeInfo.contactEmail}.
          Pode ainda apresentar reclamação junto da autoridade de controlo competente.
        </p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>Utilizamos apenas cookies e armazenamento necessários ao funcionamento do site: [detalhar, se existirem cookies de análise ou marketing].</p>
      </section>
    </InfoPage>
  );
}

export function RefundPage() {
  return (
    <InfoPage eyebrow="Legal" title="Política de reembolso" intro="Como funcionam devoluções, trocas e reembolsos.">
      <section>
        <h2>Direito de livre resolução</h2>
        <p>
          Tem [14] dias a contar da receção da encomenda para a devolver sem indicar motivo, desde que o produto
          esteja em estado original, sem uso e com a embalagem intacta.
        </p>
      </section>
      <section>
        <h2>Como pedir uma devolução</h2>
        <p>
          Escreva-nos para {storeInfo.contactEmail} com o número da encomenda e o motivo. Enviaremos as
          instruções para devolução. Os custos de envio da devolução são [a cargo do cliente / da loja].
        </p>
      </section>
      <section>
        <h2>Reembolso</h2>
        <p>
          O reembolso é feito pelo mesmo meio de pagamento utilizado, no prazo de [X] dias úteis após a
          receção e verificação do produto devolvido.
        </p>
      </section>
      <section>
        <h2>Produtos com defeito</h2>
        <p>
          Se o produto chegar danificado ou com defeito, contacte-nos em [X] dias após a receção, com fotografias.
          Enviaremos um substituto ou procederemos ao reembolso total, à sua escolha.
        </p>
      </section>
      <section>
        <h2>Exceções</h2>
        <p>[Listar exceções aplicáveis, ex.: produtos personalizados, se existirem.]</p>
      </section>
    </InfoPage>
  );
}

export function ShippingPage() {
  return (
    <InfoPage eyebrow="Legal" title="Política de envio" intro="Prazos, custos e destinos de entrega.">
      <section>
        <h2>Processamento</h2>
        <p>As encomendas são preparadas em [X] dias úteis e expedidas assim que estiverem prontas.</p>
      </section>
      <section>
        <h2>Destinos</h2>
        <p>Entregamos em [países / regiões]. Para outros destinos, contacte-nos antes de encomendar.</p>
      </section>
      <section>
        <h2>Prazos de entrega</h2>
        <p>
          Entrega estimada em [X–Y] dias úteis após a expedição, consoante o destino. Os prazos são estimativas
          e podem variar em épocas de maior procura.
        </p>
      </section>
      <section>
        <h2>Custos de envio</h2>
        <p>
          [Valor] para encomendas até [valor], e envio gratuito acima desse valor. Os custos são apresentados
          no checkout antes da confirmação.
        </p>
      </section>
      <section>
        <h2>Rastreamento</h2>
        <p>
          Assim que a encomenda for expedida, recebe o número de rastreamento por email. Pode acompanhá-la na
          página de <a href="/rastreamento">rastreamento</a>.
        </p>
      </section>
      <section>
        <h2>Taxas e impostos</h2>
        <p>
          Em envios para fora do país de origem, podem ser cobrados direitos de importação e impostos locais,
          que são responsabilidade do destinatário.
        </p>
      </section>
      <section>
        <h2>Encomendas extraviadas ou danificadas</h2>
        <p>
          Se a encomenda não chegar ou chegar danificada, contacte-nos em [X] dias. Abriremos um processo junto da
          transportadora e tomaremos as medidas adequadas.
        </p>
      </section>
    </InfoPage>
  );
}
