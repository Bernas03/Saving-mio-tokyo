import { InfoPage } from '@/components/InfoPage';
import { storeInfo } from '@/data/store-info';

export function AboutPage() {
  return (
    <InfoPage
      eyebrow="A nossa história"
      title="Sobre nós"
      intro="Malas para os caminhos de todos os dias, desenhadas com calma e costuradas uma a uma."
    >
      <section>
        <h2>Pequenos lotes</h2>
        <p>
          A MIO TOKYO trabalha em pequenos lotes. Cada peça da coleção 夢鞄 — “malas de sonho”
          — é feita com tempo e atenção aos detalhes, em vez de em grande escala.
        </p>
      </section>
      <section>
        <h2>Feito com cuidado</h2>
        <p>
          Formas simples, tecidos escolhidos com critério e espaço para tudo o que faz o seu dia.
          Acreditamos que um bom objeto acompanha-nos durante muito tempo.
        </p>
      </section>
      <section>
        <h2>Quem está por trás</h2>
        <p>
          A {storeInfo.name} é gerida pela {storeInfo.legalName}. Para qualquer questão, pode
          escrever-nos através da página de <a href="/contacto">contacto</a>.
        </p>
      </section>
    </InfoPage>
  );
}
