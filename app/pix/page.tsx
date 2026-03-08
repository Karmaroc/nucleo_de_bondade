"use client";

import Link from "next/link";

export default function PixPage() {
  const chavePix = "dc06d909-3cd8-400a-9e5b-da69384b87a4";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(chavePix)}`;

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

      <header id="pix-hero">
        <div className="section-inner">
          <div className="reveal visible">
            <p className="section-label">Doação</p>
            <h1 className="section-title">Doação Livre</h1>
          </div>
        </div>
      </header>

      <section id="pix">
        <div className="section-inner">
          <div className="cadastro-card reveal visible">
            <div className="pix-content">
              <p className="pix-instruction">
                Escaneie o QR Code ou copie a chave PIX para doar qualquer valor.
              </p>
              <div className="pix-qr">
                <img src={qrCodeUrl} alt="QR Code para doação via PIX" />
              </div>
              <div className="pix-chave">
                <span className="pix-label">Chave PIX:</span>
                <code className="pix-code">{chavePix}</code>
                <button
                  className="nav-cta pix-copy"
                  onClick={() => {
                    navigator.clipboard.writeText(chavePix);
                    alert("Chave PIX copiada!");
                  }}
                >
                  Copiar
                </button>
              </div>
              <div className="pix-actions">
                <Link className="cadastro-secondary" href="/">
                  Voltar para a página inicial
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
