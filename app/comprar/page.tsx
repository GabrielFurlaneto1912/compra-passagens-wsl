"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const viagens = {
  "1": {
    origem: "Southampton",
    destino: "Nova York",
    data: "10 de abril de 1931",
    preco: 870,
  },

  "2": {
    origem: "Southampton",
    destino: "Rio de Janeiro",
    data: "2 de maio de 1931",
    preco: 1200,
  },

  "3": {
    origem: "Southampton",
    destino: "Lisboa",
    data: "21 de junho de 1931",
    preco: 420,
  },
};

export default function ComprarPage() {

  const searchParams = useSearchParams();

  const viagemId =
    searchParams.get("viagem") || "1";

  const viagem =
    viagens[viagemId as keyof typeof viagens] ||
    viagens["1"];

  const [classe, setClasse] =
    useState("1ª Classe");

  const [passageiros, setPassageiros] =
    useState(1);

  const precos = {
    "1ª Classe": viagem.preco,
    "2ª Classe": 420,
    "3ª Classe": 180,
  };

  const total =
    precos[classe as keyof typeof precos] *
    passageiros;

  return (
    <main className="comprar-page">

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

          <Link
            href="/comprar"
            className="active"
          >
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


      {/* CONTEÚDO */}

      <section className="booking-section">

        <div className="booking-container">


          {/* FORMULÁRIO */}

          <div className="booking-form">

            <span className="booking-small-title">
              WHITE STAR LINE
            </span>

            <h1>
              Detalhes da Viagem
            </h1>

            <div className="gold-line left" />


            <div className="form-grid">

              <div className="form-group">

                <label>
                  ORIGEM
                </label>

                <select defaultValue={viagem.origem}>
                  <option>
                    Southampton
                  </option>

                  <option>
                    Liverpool
                  </option>
                </select>

              </div>


              <div className="form-group">

                <label>
                  DESTINO
                </label>

                <select defaultValue={viagem.destino}>

                  <option>
                    Nova York
                  </option>

                  <option>
                    Rio de Janeiro
                  </option>

                  <option>
                    Lisboa
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  DATA DA VIAGEM
                </label>

                <input
                  type="text"
                  value={viagem.data}
                  readOnly
                />

              </div>


              <div className="form-group">

                <label>
                  NÚMERO DE PASSAGEIROS
                </label>

                <input
                  type="number"
                  min="1"
                  value={passageiros}
                  onChange={(e) =>
                    setPassageiros(
                      Math.max(
                        1,
                        Number(e.target.value)
                      )
                    )
                  }
                />

              </div>

            </div>


            {/* CLASSES */}

            <div className="class-selection">

              <label>
                CLASSE
              </label>

              <div className="class-options">

                <button
                  type="button"
                  className={
                    classe === "1ª Classe"
                      ? "class-option selected"
                      : "class-option"
                  }
                  onClick={() =>
                    setClasse("1ª Classe")
                  }
                >

                  <strong>
                    I
                  </strong>

                  <span>
                    1ª Classe
                  </span>

                  <small>
                    £ {viagem.preco} / passageiro
                  </small>

                </button>


                <button
                  type="button"
                  className={
                    classe === "2ª Classe"
                      ? "class-option selected"
                      : "class-option"
                  }
                  onClick={() =>
                    setClasse("2ª Classe")
                  }
                >

                  <strong>
                    II
                  </strong>

                  <span>
                    2ª Classe
                  </span>

                  <small>
                    £ 420 / passageiro
                  </small>

                </button>


                <button
                  type="button"
                  className={
                    classe === "3ª Classe"
                      ? "class-option selected"
                      : "class-option"
                  }
                  onClick={() =>
                    setClasse("3ª Classe")
                  }
                >

                  <strong>
                    III
                  </strong>

                  <span>
                    3ª Classe
                  </span>

                  <small>
                    £ 180 / passageiro
                  </small>

                </button>

              </div>

            </div>


            <button
              type="button"
              className="reserve-button"
            >
              CONTINUAR RESERVA
            </button>

          </div>


          {/* RESUMO */}

          <aside className="booking-summary">

            <span>
              BILHETE DE EMBARQUE
            </span>

            <h2>
              RMS MAGNIFIC
            </h2>

            <div className="summary-decoration">
              ◆ ◇ ◆
            </div>


            <div className="summary-row">

              <span>
                ROTA
              </span>

              <strong>
                {viagem.origem} →
                {" "}
                {viagem.destino}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                DATA
              </span>

              <strong>
                {viagem.data}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                PASSAGEIROS
              </span>

              <strong>
                {passageiros}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                CLASSE
              </span>

              <strong>
                {classe}
              </strong>

            </div>


            <div className="summary-total">

              <span>
                TOTAL ESTIMADO
              </span>

              <strong>
                £ {total}
              </strong>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}