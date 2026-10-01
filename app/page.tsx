"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}

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
          <Link href="/" className="active">
            Início
          </Link>

          <Link href="/comprar">
            Comprar Passagem
          </Link>

          <Link href="/viagens">
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


      {/* ================= HERO ================= */}

      <section className="hero">

        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url('/images/magnific-hero.jpg')",
          }}
        />

        <div className="hero-overlay" />

        <div className="hero-content">

          <span className="hero-company">
            WHITE STAR LINE
          </span>

          <h1>
            RMS MAGNIFIC
          </h1>

          <div className="gold-line" />

          <p>
            A grandeza dos mares começa aqui.
          </p>

          <Link
            href="/comprar"
            className="gold-button"
          >
            COMPRAR PASSAGEM
          </Link>

        </div>

      </section>


      {/* ================= HISTÓRIA ================= */}

      <section className="history">

        <div className="section-header">

          <span>
            NOSSA HISTÓRIA
          </span>

          <h2>
            Uma tradição pelos mares
          </h2>

          <div className="gold-line" />

        </div>

        <div className="history-content">

          <p>
            Há décadas, nossa companhia atravessa os oceanos,
            levando passageiros a novos destinos e transformando
            cada viagem em uma experiência inesquecível.
          </p>

          <p>
            De nossos primeiros navios ao grandioso
            <strong> RMS Magnific</strong>, nossa história é
            construída sobre inovação, elegância e o espírito
            de aventura que sempre acompanhou as grandes
            viagens marítimas.
          </p>

          <p>
            Hoje, o Magnific representa o ápice dessa tradição:
            um navio criado para unir conforto, luxo e a emoção
            de atravessar o oceano.
          </p>

        </div>

      </section>


      {/* ================= FROTA ================= */}

      <section className="fleet">

        <div className="section-header">

          <span>
            NOSSA FROTA
          </span>

          <h2>
            Uma história construída pelos mares
          </h2>

          <div className="gold-line" />

        </div>


        <div className="ships-grid">

          <article className="ship-card">

            <div
              className="ship-image"
              style={{
                backgroundImage:
                  "url('/images/magnific-olympic.jpg')",
              }}
            />

            <div className="ship-info">

              <span>
                1969 - 1974
              </span>

              <h3>
                HMS Olimpic
              </h3>

              <p>
                O início de uma grande tradição marítima.
              </p>

            </div>

          </article>


          <article className="ship-card">

            <div
              className="ship-image"
              style={{
                backgroundImage:
                  "url('/images/magnific-magestic.jpg')",
              }}
            />

            <div className="ship-info">

              <span>
                1018 - 2022
              </span>

              <h3>
                RMS Magestic
              </h3>

              <p>
                Um novo capítulo na história da companhia.
              </p>

            </div>

          </article>


          <article className="ship-card">

            <div
              className="ship-image"
              style={{
                backgroundImage:
                  "url('/images/magnific-celestic.jpg')",
              }}
            />

            <div className="ship-info">

              <span>
                2023 - 2026
              </span>

              <h3>
                RMS Celestic
              </h3>

              <p>
                Um navio que levou nossa companhia além
                dos horizontes.
              </p>

            </div>

          </article>


          <article className="ship-card featured-ship">

            <div
              className="ship-image"
              style={{
                backgroundImage:
                  "url('/images/magnific.jpg')",
              }}
            />

            <div className="ship-info">

              <span>
                2027
              </span>

              <h3>
                RMS Magnific
              </h3>

              <p>
                O ápice da nossa história marítima.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* ================= MAGNIFIC ================= */}

      <section className="magnific">

        <div
          className="magnific-photo"
          style={{
            backgroundImage:
              "url('/images/magnific.jpg')",
          }}
        />

        <div className="magnific-content">

          <span className="small-title">
            O ORGULHO DA COMPANHIA
          </span>

          <h2>
            RMS Magnific
          </h2>

          <div className="gold-line left" />

          <p>
            O maior navio já construído pela companhia.
          </p>

          <p>
            Projetado para proporcionar uma experiência
            extraordinária em alto-mar, o RMS Magnific
            reúne elegância, conforto e grandiosidade
            em cada detalhe.
          </p>

          <Link
            href="/viagens"
            className="outline-button"
          >
            CONHEÇA AS VIAGENS
          </Link>

        </div>

      </section>


      {/* ================= CLASSES ================= */}

      <section className="classes">

        <div className="section-header">

          <span>
            EXPERIÊNCIA A BORDO
          </span>

          <h2>
            Escolha sua classe
          </h2>

          <div className="gold-line" />

        </div>


        <div className="classes-grid">

          <Link
            href="/primeira-classe"
            className="class-card"
          >

            <span className="class-number">
              I
            </span>

            <h3>
              1ª Classe
            </h3>

            <p>
              Elegância, conforto e serviços exclusivos
              para uma experiência extraordinária.
            </p>

            <span className="class-link">
              CONHECER →
            </span>

          </Link>


          <Link
            href="/segunda-classe"
            className="class-card"
          >

            <span className="class-number">
              II
            </span>

            <h3>
              2ª Classe
            </h3>

            <p>
              Conforto e qualidade para tornar sua
              travessia inesquecível.
            </p>

            <span className="class-link">
              CONHECER →
            </span>

          </Link>


          <Link
            href="/terceira-classe"
            className="class-card"
          >

            <span className="class-number">
              III
            </span>

            <h3>
              3ª Classe
            </h3>

            <p>
              Uma oportunidade de atravessar o oceano
              e viver uma grande aventura.
            </p>

            <span className="class-link">
              CONHECER →
            </span>

          </Link>

        </div>

      </section>


      {/* ================= RESERVA ================= */}

      <section className="reservation">

        <div className="reservation-content">

          <span>
            PRONTO PARA EMBARCAR?
          </span>

          <h2>
            Sua próxima grande viagem
            começa aqui.
          </h2>

          <Link
            href="/comprar"
            className="gold-button"
          >
            COMPRAR PASSAGEM
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">

          <span>
            WHITE STAR LINE
          </span>

          <strong>
            RMS MAGNIFIC
          </strong>

        </div>

        <div className="footer-links">

          <Link href="/comprar">
            Comprar Passagem
          </Link>

          <Link href="/viagens">
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

        </div>

        <p>
          © 1930 White Star Line — RMS Magnific
        </p>

      </footer>

    </main>
  );
}