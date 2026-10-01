"use client";

import Link from "next/link";

type Viagem = {
  id: number;
  imagem: string;
  origem: string;
  destino: string;
  duracao: string;
  partida: string;
  classes: string;
  preco: number;
};

const viagens: Viagem[] = [
  {
    id: 1,
    imagem: "/images/magnific-new-york.jpg",
    origem: "Southampton",
    destino: "Nova York",
    duracao: "7 dias",
    partida: "10 de abril de 1931",
    classes: "1ª · 2ª · 3ª",
    preco: 870,
  },

  {
    id: 2,
    imagem: "/images/magnific-rio.jpg",
    origem: "Southampton",
    destino: "Rio de Janeiro",
    duracao: "14 dias",
    partida: "2 de maio de 1931",
    classes: "1ª · 2ª · 3ª",
    preco: 1200,
  },

  {
    id: 3,
    imagem: "/images/magnific-lisboa.jpg",
    origem: "Southampton",
    destino: "Lisboa",
    duracao: "4 dias",
    partida: "21 de junho de 1931",
    classes: "1ª · 2ª",
    preco: 420,
  },
];

export default function ViagensPage() {
  return (
    <main className="viagens-page">

      {/* NAVBAR */}

      <header className="navbar">

        <div className="logo">

          <span className="logo-small">
            WHITE STAR LINE
          </span>

          <span className="logo-main">
            MAGNIFIC
          </span>

        </div>

        <nav className="nav-menu">

          <Link href="/">
            Início
          </Link>

          <Link href="/comprar">
            Comprar Passagem
          </Link>

          <Link
            href="/viagens"
            className="active"
          >
            Viagens
          </Link>

          <Link href="/primeira-classe">
            1ª Classe
          </Link>

          <Link href="/segunda-classe">
            2ª Classe
          </Link>

          <Link href="/terceira-classe">
            3ª Classe
          </Link>

        </nav>

      </header>


      {/* CABEÇALHO */}

      <section className="travel-header">

        <span>
          WHITE STAR LINE
        </span>

        <h1>
          Viagens
        </h1>

        <div className="gold-line" />

        <p>
          Escolha seu próximo destino a bordo do RMS Magnific.
        </p>

      </section>


      {/* VIAGENS */}

      <section className="travel-list">

        <div className="travel-grid">

          {viagens.map((viagem) => (

            <article
              className="travel-card"
              key={viagem.id}
            >

              <div
                className="travel-image"
                style={{
                  backgroundImage:
                    `url("${viagem.imagem}")`,
                }}
              />

              <div className="travel-content">

                <span className="travel-origin">
                  {viagem.origem}
                </span>

                <h2>
                  → {viagem.destino}
                </h2>

                <div className="travel-divider" />

                <div className="travel-info">

                  <div>
                    <span>
                      DURAÇÃO
                    </span>

                    <strong>
                      {viagem.duracao}
                    </strong>
                  </div>

                  <div>
                    <span>
                      PARTIDA
                    </span>

                    <strong>
                      {viagem.partida}
                    </strong>
                  </div>

                  <div>
                    <span>
                      CLASSES
                    </span>

                    <strong>
                      {viagem.classes}
                    </strong>
                  </div>

                </div>


                <div className="travel-price">

                  <span>
                    A PARTIR DE
                  </span>

                  <strong>
                    £ {viagem.preco}
                  </strong>

                </div>


                <Link
                  href={`/comprar?viagem=${viagem.id}`}
                  className="travel-button"
                >
                  AGENDAR VIAGEM
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}