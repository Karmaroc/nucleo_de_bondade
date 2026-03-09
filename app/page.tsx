"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    reveals.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  const scrollToJoin = () => {
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToCadastro = () => {
    router.push("/cadastro");
  };

  const handleAssinar = () => {
    window.open("https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=64ba9496654244848ed920b5084272fa", "_blank");
  };

  const handlePix = () => {
    router.push("/pix");
  };

  return (
    <>
      <nav>
        <div className="nav-logo">Projeto: Núcleo de Bondade</div>
        <div className="nav-links">
          <a className="nav-link" href="#faith">
            Fundamento
          </a>
          <a className="nav-link" href="#principles">
            Princípios
          </a>
          <a className="nav-link" href="#system">
            Sistema
          </a>
          <button className="nav-cta" onClick={goToCadastro}>
            Participar
          </button>
        </div>
      </nav>

      <header id="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-overlay"></div>
        </div>
        <p className="hero-eyebrow">Uma missão viva</p>
        <h1 className="hero-title">Acredite na</h1>
        <span className="hero-title-gold">bondade.</span>
        <p className="hero-sub">
          Esqueça o passado. Estabilize sua vida.
          <br />
          A liberdade nasce quando se é inocente — capaz de sentir pureza.
        </p>
        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span className="hero-scroll-text">Rolar</span>
        </div>
      </header>

      <section id="faith">
        <div className="section-inner">
          <div className="reveal">
            <div className="deco-rule">
              <div className="deco-rule-line"></div>
              <div className="deco-rule-dot"></div>
            </div>
            <p className="section-label">O fundamento</p>
            <blockquote className="faith-quote">
              Acreditar na bondade começa por ser <strong>cristão</strong> — e a
              partir disso, sustentar cada ação em três princípios.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="principles">
        <div className="section-inner">
          <div className="reveal">
            <div className="deco-rule">
              <div className="deco-rule-line"></div>
              <div className="deco-rule-dot"></div>
            </div>
            <p className="section-label">Os três pilares</p>
            <h2 className="section-title">O que sustenta uma vida íntegra</h2>
          </div>
          <div className="principles-grid">
            <div className="principle-card reveal" style={{ transitionDelay: "0.08s" }}>
              <div className="principle-num">01</div>
              <div className="principle-name">Presença Consistente</div>
              <div className="principle-desc">
                O chão que sustenta tudo. Presença não é ausência de limite — é
                importar-se com respeito mútuo, sem se tornar um alvo.
              </div>
            </div>
            <div className="principle-card reveal" style={{ transitionDelay: "0.18s" }}>
              <div className="principle-num">02</div>
              <div className="principle-name">Competência Real</div>
              <div className="principle-desc">
                O que transforma boa vontade em impacto concreto. Aja bem sem
                depender de reconhecimento. Tenha firmeza sem fechar o coração.
              </div>
            </div>
            <div className="principle-card reveal" style={{ transitionDelay: "0.28s" }}>
              <div className="principle-num">03</div>
              <div className="principle-name">Coragem Moral</div>
              <div className="principle-desc">
                O que faz você agir quando é mais fácil se omitir. Não negocie o
                núcleo. Quando o silêncio custaria sua integridade, fale.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fight">
        <div className="section-inner">
          <div className="reveal">
            <div className="deco-rule">
              <div className="deco-rule-line"></div>
              <div className="deco-rule-dot"></div>
            </div>
            <p className="section-label">Sobre a luta</p>
            <h2 className="section-title">Saber quando e como agir</h2>
            <p className="section-body">
              Quando alguém age com maldade, há uma causa: resistência ou
              rejeição real. Importe-se — mas não seja um alvo. Respeito mútuo é
              o limite.
            </p>
          </div>
          <div className="fight-cols">
            <div className="fight-col reveal" style={{ transitionDelay: "0.08s" }}>
              <div className="fight-col-title">Luta Física</div>
              <ul>
                <li>
                  Quando o corpo — seu ou de alguém indefeso — está em perigo
                  imediato e não há outra saída
                </li>
                <li>
                  Não para provar ponto. Não para recuperar honra. Não por raiva.
                  Só quando a alternativa é ser machucado ou assistir alguém ser
                  machucado sem poder fazer nada.
                </li>
              </ul>
            </div>
            <div className="fight-col reveal" style={{ transitionDelay: "0.2s" }}>
              <div className="fight-col-title">Luta Verbal</div>
              <ul>
                <li>
                  Quando o silêncio custaria sua integridade ou a de alguém
                  vulnerável
                </li>
                <li>
                  Quando uma mentira é aceita como verdade e você pode
                  corrigi-la
                </li>
                <li>
                  Quando um limite precisa ser dito em voz alta para existir
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="system">
        <div className="section-inner">
          <div className="reveal">
            <div className="deco-rule">
              <div
                className="deco-rule-line"
                style={{
                  background: "linear-gradient(to right, transparent, var(--gold-c))",
                }}
              ></div>
              <div className="deco-rule-dot"></div>
            </div>
            <p className="section-label">O sistema</p>
            <h2 className="section-title">Ajuda que se multiplica</h2>
            <p className="section-body">
              Não é dinheiro. São recursos concretos: alimentação, saúde mental,
              equipamentos de estudo, roupas, contas básicas, transporte e
              moradia. Distribuídos em até um mês.
            </p>
          </div>
          <div className="system-steps">
            <div className="step reveal">
              <div className="step-num">1</div>
              <div className="step-content">
                <div className="step-title">Você recebe</div>
                <div className="step-text">
                  Tenha 15 anos ou mais e um sonho que vai mudar o mundo para
                  melhor. Não é preciso comprovar mais nada — acreditamos no seu
                  destino.
                </div>
              </div>
            </div>
            <div className="step reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="step-num">2</div>
              <div className="step-content">
                <div className="step-title">Você escolhe um caminho</div>
                <div className="step-text">
                  Ajudar alguém, estudar para empreender ou aceitar uma missão
                  utópica. Ao concluir sua tarefa, o sistema passa você para o
                  próximo passo.
                </div>
              </div>
            </div>
            <div className="step reveal" style={{ transitionDelay: "0.2s" }}>
              <div className="step-num">3</div>
              <div className="step-content">
                <div className="step-title">Você documenta</div>
                <div className="step-text">
                  Um vídeo de um minuto por 24 horas — de quem doa e de quem
                  recebe. A bondade ganha rosto. O movimento se torna visível.
                </div>
              </div>
            </div>
            <div className="step reveal" style={{ transitionDelay: "0.3s" }}>
              <div className="step-num">4</div>
              <div className="step-content">
                <div className="step-title">O ciclo continua</div>
                <div className="step-text">
                  Com capital entrando regularmente, o patrocínio se estende até
                  a abertura da sua empresa. As missões utópicas evoluem com
                  ciclos de feedback.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission">
        <div className="section-inner">
          <div className="reveal">
            <div className="deco-rule">
              <div className="deco-rule-line"></div>
              <div className="deco-rule-dot"></div>
            </div>
            <p className="section-label">Sua escolha</p>
            <h2 className="section-title">Três caminhos, uma direção</h2>
          </div>
          <div className="mission-options">
            <div className="mission-option reveal" style={{ transitionDelay: "0.08s" }}>
              <div className="mission-letter">A</div>
              <div className="mission-option-title">Ajudar Alguém</div>
              <div className="mission-option-text">
                Há uma lista de pessoas que precisam de algo. Você realiza sua
                tarefa — qualquer ajuda conta — e passa para a próxima.
              </div>
            </div>
            <div className="mission-option reveal" style={{ transitionDelay: "0.18s" }}>
              <div className="mission-letter">B</div>
              <div className="mission-option-title">Estudar e Empreender</div>
              <div className="mission-option-text">
                Aprenda a multiplicar o que tem. Saia como agente de bondade e
                chegue como fundador — com acompanhamento real.
              </div>
            </div>
            <div className="mission-option reveal" style={{ transitionDelay: "0.28s" }}>
              <div className="mission-letter">C</div>
              <div className="mission-option-title">Missão Utópica</div>
              <div className="mission-option-text">
                Para quem quer mudar o mundo de verdade. Construída em conjunto,
                com ciclos de feedback para saber quem está chegando perto do
                marco.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join">
        <div className="join-bg" aria-hidden="true">
                  </div>
        <div className="join-inner">
          <div className="reveal">
            <div className="deco-rule deco-rule-center">
              <div className="deco-rule-line"></div>
              <div className="deco-rule-dot"></div>
              <div className="deco-rule-line"></div>
            </div>
            <p className="section-label" style={{ textAlign: "center" }}>
              Entre para o movimento
            </p>
            <h2 className="join-title">
              Assine a <span className="gold-text">bondade</span> do outro.
            </h2>
            <p className="join-sub">
              Patrocine alguém que você nunca conheceu. O retorno é moral — e
              real.
            </p>
            <div className="join-disclaimer-card reveal visible">
              <p className="join-notice">
                Qualquer um pode assinar e doar a qualquer momento, qualquer valor.
              </p>
              <p className="join-disclaimer">
                Ao clicar em <strong>Participar</strong> você entrará na página de cadastro e login, pois é a única forma de ser selecionado para receber o valor compartilhado.
              </p>
              <p className="join-disclaimer">
                Não existem retornos nem garantias.
              </p>
            </div>
          </div>
          <div className="join-cards reveal" style={{ transitionDelay: "0.12s" }}>
            <div className="join-card" role="button" tabIndex={0} onClick={handleAssinar} onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleAssinar();
            }}>
              <div className="join-card-price">R$ 100</div>
              <div className="join-card-label">por mês — assinatura de bondade</div>
            </div>
            <div className="join-card" role="button" tabIndex={0} onClick={handlePix} onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handlePix();
            }}>
              <div className="join-card-price">Livre</div>
              <div className="join-card-label">doação de qualquer valor, quando quiser</div>
            </div>
          </div>
          <div className="join-eligibility reveal" style={{ transitionDelay: "0.22s" }}>
            Para receber os recursos: <strong>15 anos ou mais</strong> e um sonho
            que vai mudar o mundo para melhor.
            <br />
            Não é preciso comprovar mais nada.
            <br />
            <br />
            <em>
              Acreditamos no seu destino de bondade — de querer ver o outro bem.
            </em>
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
