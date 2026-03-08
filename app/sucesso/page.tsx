"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function SucessoPage() {
  useEffect(() => {
    // Opcional: limpar estado de autenticação ou fazer algo ao carregar
  }, []);

  return (
    <>
      <nav>
        <div className="nav-logo">Projeto: Núcleo de Bondade</div>
        <div className="nav-links">
          <Link className="nav-link" href="/">
            Voltar
          </Link>
        </div>
      </nav>

      <header id="sucesso-hero">
        <div className="section-inner">
          <div className="reveal visible">
            <p className="section-label">Sucesso</p>
            <h1 className="section-title">Cadastro realizado!</h1>
          </div>
        </div>
      </header>

      <section id="sucesso">
        <div className="section-inner">
          <div className="cadastro-card reveal visible">
            <div className="sucesso-content">
              <p className="sucesso-message">
                Seu cadastro foi realizado com sucesso! Agora você faz parte do movimento.
              </p>
              <p className="sucesso-sub">
                Fique de olho no seu e-mail para novidades sobre o próximo ciclo de seleção.
              </p>
              <div className="sucesso-actions">
                <Link className="nav-cta" href="/">
                  Voltar para a página inicial
                </Link>
                <Link className="cadastro-secondary" href="/login">
                  Fazer login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">Projeto: Núcleo de Bondade</div>
        <div className="footer-note">Aja bem. Sem depender do resultado.</div>
      </footer>
    </>
  );
}
