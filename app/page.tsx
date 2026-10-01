import "./globals.css";

function Home() {
  return (
    <div className="home">

      {/* MENU */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-small">WHITE STAR LINE</span>
          <span className="logo-main">MAGNIFIC</span>
        </div>

        <nav>
          <a href="/">Início</a>
          <a href="/comprar">Comprar Passagem</a>
          <a href="/viagens">Viagens</a>
          <a href="/primeira-classe">1ª Classe</a>
          <a href="/segunda-classe">2ª Classe</a>
          <a href="/terceira-classe">3ª Classe</a>
        </nav>
      </header>


      {/* HERO */}
      <section className="hero">

        {/* Coloque aqui a foto principal do RMS Magnific */}
        <div className="hero-image">
          <div className="hero-placeholder">
            <span>FOTO DO RMS MAGNIFIC</span>
          </div>
        </div>

        <div className="hero-content">
          <p className="hero-subtitle">
            WHITE STAR LINE
          </p>

          <h1>RMS MAGNIFIC</h1>

          <div className="gold-line"></div>

          <p>
            A grandeza dos mares começa aqui.
          </p>

          <a href="/comprar" className="main-button">
            COMPRAR PASSAGEM
          </a>
        </div>

      </section>


      {/* HISTÓRIA */}
      <section className="history">

        <div className="section-title">
          <span>NOSSA HISTÓRIA</span>
          <h2>Uma tradição pelos mares</h2>
          <div className="gold-line"></div>
        </div>

        <div className="history-content">

          <div className="history-text">
            <p>
              Há décadas, nossa companhia atravessa os oceanos,
              levando passageiros a novos destinos e transformando
              cada viagem em uma experiência inesquecível.
            </p>

            <p>
              De nossos primeiros navios ao grandioso RMS Magnific,
              nossa história é construída sobre inovação, elegância
              e o espírito de aventura que sempre acompanhou as
              grandes viagens marítimas.
            </p>

            <p>
              Hoje, o Magnific representa o ápice dessa tradição:
              um navio criado para unir conforto, luxo e a emoção
              de atravessar o oceano.
            </p>
          </div>

        </div>

      </section>


      {/* NAVIOS ANTERIORES */}
      <section className="ships">

        <div className="section-title">
          <span>NOSSA FROTA</span>
          <h2>Uma história construída pelos mares</h2>
          <div className="gold-line"></div>
        </div>

        <div className="ships-grid">

          <div className="ship-card">
            <div className="ship-image">
              <span>FOTO DO NAVIO</span>
            </div>

            <h3>O Primeiro</h3>
            <p>
              O início de uma tradição marítima.
            </p>
          </div>


          <div className="ship-card">
            <div className="ship-image">
              <span>FOTO DO NAVIO</span>
            </div>

            <h3>Uma Nova Era</h3>
            <p>
              Um novo capítulo na história da companhia.
            </p>
          </div>


          <div className="ship-card">
            <div className="ship-image">
              <span>FOTO DO NAVIO</span>
            </div>

            <h3>O Grande Navegador</h3>
            <p>
              Um navio que levou nossa companhia além dos horizontes.
            </p>
          </div>


          <div className="ship-card magnific-card">
            <div className="ship-image">
              <span>FOTO DO RMS MAGNIFIC</span>
            </div>

            <h3>RMS Magnific</h3>
            <p>
              O ápice da nossa história marítima.
            </p>
          </div>

        </div>

      </section>


      {/* MAGNIFIC */}
      <section className="magnific">

        <div className="magnific-image">
          <span>FOTO DO RMS MAGNIFIC</span>
        </div>

        <div className="magnific-content">

          <span>O ORGULHO DA COMPANHIA</span>

          <h2>RMS Magnific</h2>

          <div className="gold-line"></div>

          <p>
            O maior navio já construído pela companhia.
          </p>

          <p>
            Projetado para proporcionar uma experiência
            extraordinária em alto-mar, o RMS Magnific reúne
            elegância, conforto e grandiosidade em cada detalhe.
          </p>

          <a href="/viagens" className="outline-button">
            CONHEÇA AS VIAGENS
          </a>

        </div>

      </section>


      {/* CLASSES */}
      <section className="classes">

        <div className="section-title">
          <span>EXPERIÊNCIA A BORDO</span>
          <h2>Escolha sua classe</h2>
          <div className="gold-line"></div>
        </div>

        <div className="classes-grid">

          <a href="/primeira-classe" className="class-card">
            <div className="class-number">I</div>
            <h3>1ª Classe</h3>
            <p>
              Elegância, conforto e serviços exclusivos.
            </p>
            <span>CONHECER →</span>
          </a>


          <a href="/segunda-classe" className="class-card">
            <div className="class-number">II</div>
            <h3>2ª Classe</h3>
            <p>
              Conforto e qualidade para sua viagem.
            </p>
            <span>CONHECER →</span>
          </a>


          <a href="/terceira-classe" className="class-card">
            <div className="class-number">III</div>
            <h3>3ª Classe</h3>
            <p>
              Uma viagem inesquecível para todos.
            </p>
            <span>CONHECER →</span>
          </a>

        </div>

      </section>


      {/* RESERVA */}
      <section className="reservation">

        <div>
          <span>PRONTO PARA EMBARCAR?</span>

          <h2>
            Sua próxima grande viagem
            começa aqui.
          </h2>

          <a href="/comprar" className="main-button">
            COMPRAR PASSAGEM
          </a>
        </div>

      </section>


      {/* RODAPÉ */}
      <footer className="footer">

        <div className="footer-logo">
          <span>WHITE STAR LINE</span>
          <strong>RMS MAGNIFIC</strong>
        </div>

        <div className="footer-links">
          <a href="/comprar">Comprar Passagem</a>
          <a href="/viagens">Viagens</a>
          <a href="/primeira-classe">1ª Classe</a>
          <a href="/segunda-classe">2ª Classe</a>
          <a href="/terceira-classe">3ª Classe</a>
        </div>

        <p>
          © 1930 White Star Line — RMS Magnific
        </p>

      </footer>

    </div>
  );
}

export default Home;