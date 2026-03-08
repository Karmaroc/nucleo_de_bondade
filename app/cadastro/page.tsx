"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function CadastroPage() {
  const router = useRouter();
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pix = formData.get("pix") as string | undefined;

    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: {
          cpf,
          pix: pix || "",
        },
      },
    });

    if (error) {
      setError(error.message);
    } else if (data.user) {
      router.push("/sucesso");
    }
    setLoading(false);
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

      <header id="cadastro-hero">
        <div className="section-inner">
          <div className="reveal visible">
            <p className="section-label">Cadastro</p>
            <h1 className="section-title">Entre para o movimento</h1>
          </div>
        </div>
      </header>

      <section id="cadastro">
        <div className="section-inner">
          <div className="cadastro-card reveal visible">
            <form className="cadastro-form" onSubmit={handleCadastro}>
              <div className="cadastro-grid">
                <label className="cadastro-field">
                  <span className="cadastro-label">Nome</span>
                  <input className="cadastro-input" name="nome" type="text" autoComplete="name" required />
                </label>

                <label className="cadastro-field">
                  <span className="cadastro-label">CPF</span>
                  <input
                    className="cadastro-input"
                    name="cpf"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    required
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </label>

                <label className="cadastro-field">
                  <span className="cadastro-label">Pix</span>
                  <input className="cadastro-input" name="pix" type="text" autoComplete="off" required />
                </label>

                <label className="cadastro-field">
                  <span className="cadastro-label">E-mail</span>
                  <input className="cadastro-input" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
                </label>

                <label className="cadastro-field cadastro-field-full">
                  <span className="cadastro-label">Senha</span>
                  <input className="cadastro-input" name="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} autoComplete="new-password" required />
                </label>
              </div>

              {error && <p className="cadastro-error">{error}</p>}

              <div className="cadastro-actions">
                <button className="nav-cta" type="submit" disabled={loading}>
                  {loading ? "Cadastrando..." : "Criar cadastro"}
                </button>
                <Link className="cadastro-secondary" href="/login">
                  Já tem conta? Fazer login
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
