"use client";

import { useState } from "react";
import Link from "next/link";

const precos = {
  primeira: 870,
  segunda: 420,
  terceira: 180,
};

export default function ComprarPage() {
  const [origem, setOrigem] = useState("Southampton");
  const [destino, setDestino] = useState("Rio de Janeiro");
  const [data, setData] = useState("");
  const [passageiros, setPassageiros] = useState(1);
  const [classe, setClasse] = useState("primeira");

  const preco =
    precos[classe as keyof typeof precos];

  const total = preco * passageiros;

  const nomeClasse =
    classe === "primeira"
      ? "1ª Classe"
      : classe === "segunda"
      ? "2ª Classe"
      : "3ª Classe";

  return (
    <main className="booking-page">

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


      {/* ================= ÁREA DE COMPRA ================= */}

      <section className="booking-container">


        {/* ================= FORMULÁRIO ================= */}

        <div className="booking-form">

          <div className="booking-title">

            <span>
              RMS MAGNIFIC
            </span>

            <h1>
              Detalhes da Viagem
            </h1>

            <div className="gold-line left"></div>

          </div>


          {/* ORIGEM / DESTINO */}

          <div className="form-grid">

            <div className="form-group">

              <label>
                ORIGEM
              </label>

              <select
                value={origem}
                onChange={(event) =>
                  setOrigem(event.target.value)
                }
              >

                <option value="Southampton">
                  Southampton
                </option>

                <option value="Lisboa">
                  Lisboa
                </option>

                <option value="Rio de Janeiro">
                  Rio de Janeiro
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>
                DESTINO
              </label>

              <select
                value={destino}
                onChange={(event) =>
                  setDestino(event.target.value)
                }
              >

                <option value="Rio de Janeiro">
                  Rio de Janeiro
                </option>

                <option value="Nova York">
                  Nova York
                </option>

                <option value="Lisboa">
                  Lisboa
                </option>

              </select>

            </div>


            {/* DATA */}

            <div className="form-group">

              <label>
                DATA DA VIAGEM
              </label>

              <input
                type="date"
                value={data}
                onChange={(event) =>
                  setData(event.target.value)
                }
              />

            </div>


            {/* PASSAGEIROS */}

            <div className="form-group">

              <label>
                NÚMERO DE PASSAGEIROS
              </label>

              <input
                type="number"
                min="1"
                max="10"
                value={passageiros}
                onChange={(event) => {
                  const valor =
                    Number(event.target.value);

                  setPassageiros(
                    valor < 1 ? 1 : valor
                  );
                }}
              />

            </div>

          </div>


          {/* ================= CLASSE ================= */}

          <div className="class-selection">

            <label>
              CLASSE
            </label>

            <div className="class-options">


              {/* 1ª CLASSE */}

              <button
                type="button"
                className={
                  classe === "primeira"
                    ? "class-option selected"
                    : "class-option"
                }
                onClick={() =>
                  setClasse("primeira")
                }
              >

                <strong>
                  I
                </strong>

                <span>
                  1ª Classe
                </span>

                <small>
                  £ 870 / passageiro
                </small>

              </button>


              {/* 2ª CLASSE */}

              <button
                type="button"
                className={
                  classe === "segunda"
                    ? "class-option selected"
                    : "class-option"
                }
                onClick={() =>
                  setClasse("segunda")
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


              {/* 3ª CLASSE */}

              <button
                type="button"
                className={
                  classe === "terceira"
                    ? "class-option selected"
                    : "class-option"
                }
                onClick={() =>
                  setClasse("terceira")
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


          {/* ================= BOTÃO ================= */}

          <button
            type="button"
            className="reservation-button"
            onClick={() => {

              alert(
                `Reserva iniciada!\n\n` +
                `Rota: ${origem} → ${destino}\n` +
                `Passageiros: ${passageiros}\n` +
                `Classe: ${nomeClasse}\n` +
                `Total: £ ${total}`
              );

            }}
          >
            CONTINUAR RESERVA
          </button>

        </div>


        {/* ================= BILHETE ================= */}

        <aside className="ticket">

          <span className="ticket-label">
            BILHETE DE EMBARQUE
          </span>

          <h2>
            RMS MAGNIFIC
          </h2>


          <div className="ticket-decoration">

            <span></span>

            <b>◆</b>

            <i>◇</i>

            <b>◆</b>

            <span></span>

          </div>


          {/* INFORMAÇÕES */}

          <div className="ticket-info">

            <div>

              <span>
                ROTA
              </span>

              <strong>
                {origem} → {destino}
              </strong>

            </div>


            <div>

              <span>
                DATA
              </span>

              <strong>
                {data || "—"}
              </strong>

            </div>


            <div>

              <span>
                PASSAGEIROS
              </span>

              <strong>
                {passageiros}
              </strong>

            </div>


            <div>

              <span>
                CLASSE
              </span>

              <strong>
                {nomeClasse}
              </strong>

            </div>

          </div>


          {/* TOTAL */}

          <div className="ticket-total">

            <span>
              TOTAL ESTIMADO
            </span>

            <strong>
              £ {total}
            </strong>

          </div>

        </aside>

      </section>

    </main>
  );
}