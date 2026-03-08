"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    window.open("https://forms.gle/SkxFPVpBCC43xZ916", "_blank");
  };

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

      <header id="login-hero">
        <div className="section-inner">
          <div className="reveal visible">
            <p className="section-label">Login</p>
            <h1 className="section-title">Entre na sua conta</h1>
          </div>
        </div>
      </header>

      <section id="login">
        <div className="section-inner">
          <div className="cadastro-card reveal visible">
            <form className="cadastro-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div className="cadastro-grid">
                <label className="cadastro-field cadastro-field-full">
                  <span className="cadastro-label">E-mail</span>
                  <input className="cadastro-input" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
                </label>

                <label className="cadastro-field cadastro-field-full">
                  <span className="cadastro-label">Senha</span>
                  <input className="cadastro-input" name="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} autoComplete="current-password" required />
                </label>
              </div>

              <div className="cadastro-actions">
                <button className="nav-cta" type="submit">
                  Entrar
                </button>
                <Link className="cadastro-secondary" href="/cadastro">
                  Ainda não tem cadastro? Criar conta
                </Link>
                <Link className="cadastro-secondary" href="/">
                  Voltar para a página inicial
                </Link>
              </div>
            </form>
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
