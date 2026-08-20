/**
 * Direção visual: Jardim de Aprendizagens — editorial botânico, fotografia como narrativa
 * e uma trilha de leitura leve, pensada para telas de celular e visitantes do Instagram.
 */
import {
  ArrowUpRight,
  BookOpenCheck,
  Brain,
  ChevronDown,
  Copy,
  Flower2,
  GraduationCap,
  Languages,
  PenLine,
  Share2,
  Sparkles,
  Sprout,
} from "lucide-react";
import { useState } from "react";

const assets = {
  mark: "/manus-storage/pro-polly-flower-mark_c9c68c9a.png",
  heroBotanical: "/manus-storage/pro-polly-hero-botanical_78110055.png",
  studyStillLife: "/manus-storage/pro-polly-study-still-life_cf1dae83.png",
  growthIllustration: "/manus-storage/pro-polly-growth-illustration_51a1cf65.png",
  portrait: "/manus-storage/pro-polly-retrato-profissional_d1881cf3.jpeg",
  bilingualBook: "/manus-storage/pro-polly-com-pedagogia-bilingue_b99280c0.jpeg",
  positiveDiscipline: "/manus-storage/pro-polly-disciplina-positiva_28f2e908.jpeg",
};

const menuItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Percurso", href: "#percurso" },
  { label: "Galeria", href: "#galeria" },
];

export default function Home() {
  const [shareNotice, setShareNotice] = useState("");

  async function sharePortfolio() {
    const shareData = {
      title: "Pro Polly | Portfólio Profissional",
      text: "Conheça o portfólio profissional da Pro Polly.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareNotice("Portfólio pronto para ser compartilhado.");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareNotice("Link copiado. Agora é só colocar na bio do Instagram.");
      }
    } catch {
      setShareNotice("Você pode copiar o link desta página pela barra do navegador.");
    }
  }

  return (
    <main className="site-shell" id="topo">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header" aria-label="Navegação principal">
        <a className="brand-lockup" href="#topo" aria-label="Pro Polly — voltar ao início">
          <img src={assets.mark} alt="Símbolo floral da Pro Polly" className="brand-mark" />
          <span className="brand-type">
            <span>PRO</span>
            <em>Polly</em>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Seções do portfólio">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="header-share" onClick={sharePortfolio} type="button">
          <Share2 size={15} aria-hidden="true" />
          <span>Compartilhar</span>
        </button>
      </header>

      <section className="hero-section" id="conteudo" aria-labelledby="hero-title">
        <div className="hero-background" style={{ backgroundImage: `url(${assets.heroBotanical})` }} aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Professora &amp; aprendiz permanente</p>
          <h1 id="hero-title">
            Educação que acolhe,<br />
            <em>ensina e floresce.</em>
          </h1>
          <p className="hero-intro">
            Eu sou <strong>Pollyana Nascimento</strong>, a Pro Polly. Acredito em uma educação construída com escuta, estudo e caminhos possíveis para cada aprendizagem.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#percurso">
              Conheça meu percurso <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#sobre">
              Minha história <ChevronDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="mini-dot" />
            <span>27 anos · formação contínua</span>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-arch" />
          <figure className="hero-portrait">
            <img src={assets.portrait} alt="Pollyana Nascimento, a Pro Polly, professora e pedagoga bilíngue" />
            <figcaption>
              <span>PRO POLLY</span>
              <span>Educação com propósito</span>
            </figcaption>
          </figure>
          <div className="hero-badge">
            <Sparkles size={19} aria-hidden="true" />
            <span>Aprender também é<br /><strong>cultivar.</strong></span>
          </div>
          <div className="hero-sticker" aria-hidden="true">
            <Flower2 size={29} />
          </div>
        </div>
      </section>

      <section className="intro-ribbon" aria-label="Resumo de atuação">
        <p>Pedagogia Bilíngue</p><span>✦</span><p>Psicopedagogia</p><span>✦</span><p>Alfabetização &amp; Letramento</p><span>✦</span>
      </section>

      <section className="about-section section-pad" id="sobre" aria-labelledby="about-title">
        <div className="section-kicker"><Sprout size={16} aria-hidden="true" /> A essência da Pro Polly <img className="kicker-mark" src={assets.mark} alt="" aria-hidden="true" /></div>
        <div className="about-layout">
          <div className="about-title-block">
            <h2 id="about-title">Uma trajetória que nasce da <em>escuta.</em></h2>
            <p className="pull-quote">“Educar é cultivar possibilidades todos os dias.”</p>
          </div>
          <div className="about-copy">
            <p>
              Meu nome é <strong>Pollyana Nascimento</strong>, mas você pode me chamar de Pro Polly. Sou professora, formada em <strong>Pedagogia Bilíngue pelo IFG</strong>, e encontro na educação uma forma de acompanhar histórias, incentivar descobertas e fazer do conhecimento um lugar de pertencimento.
            </p>
            <p>
              Hoje, sigo aprofundando esse compromisso em duas pós-graduações: <strong>Psicopedagogia</strong> e <strong>Alfabetização e Letramento</strong>. Para mim, estar em formação é manter viva a curiosidade que também desejo despertar em cada estudante.
            </p>
          </div>
        </div>

        <div className="about-visual-row">
          <div className="study-note">
            <span className="note-pin" />
            <img className="note-bloom" src={assets.mark} alt="" aria-hidden="true" />
            <p className="note-label">EM FORMAÇÃO</p>
            <p>Estudo, afeto e intencionalidade guiam o meu olhar para a aprendizagem.</p>
            <div className="note-line" />
            <span className="note-signature">Pro Polly</span>
          </div>
          <figure className="study-still-life">
            <img src={assets.studyStillLife} alt="Composição editorial de materiais de estudo em tons de lilás e rosa" loading="lazy" />
          </figure>
          <div className="decorative-word" aria-hidden="true">crescer</div>
        </div>
      </section>

      <section className="path-section section-pad" id="percurso" aria-labelledby="path-title">
        <img className="growth-art" src={assets.growthIllustration} alt="" aria-hidden="true" loading="lazy" />
        <div className="path-heading">
          <div>
            <div className="section-kicker"><BookOpenCheck size={16} aria-hidden="true" /> Percurso acadêmico <img className="kicker-mark" src={assets.mark} alt="" aria-hidden="true" /></div>
            <h2 id="path-title">Conhecimento em<br /><em>movimento.</em></h2>
          </div>
          <p>Cada etapa fortalece uma prática atenta às pessoas, às linguagens e às possibilidades de aprender.</p>
        </div>

        <div className="timeline" aria-label="Formação acadêmica">
          <article className="timeline-item timeline-item-complete">
            <div className="timeline-marker"><GraduationCap size={21} aria-hidden="true" /></div>
            <span className="archive-tag">ARQUIVO 01</span>
            <p className="timeline-status">FORMAÇÃO</p>
            <h3>Pedagogia Bilíngue</h3>
            <p className="timeline-detail">Instituto Federal de Goiás <strong>· IFG</strong></p>
            <img className="timeline-bloom" src={assets.mark} alt="" aria-hidden="true" />
          </article>
          <article className="timeline-item timeline-item-current">
            <div className="timeline-marker"><Brain size={21} aria-hidden="true" /></div>
            <span className="archive-tag">ARQUIVO 02</span>
            <p className="timeline-status">PÓS-GRADUAÇÃO EM ANDAMENTO</p>
            <h3>Psicopedagogia</h3>
            <p className="timeline-detail">Aprendizagem, desenvolvimento e um olhar individual para os processos.</p>
            <img className="timeline-bloom" src={assets.mark} alt="" aria-hidden="true" />
          </article>
          <article className="timeline-item timeline-item-current">
            <div className="timeline-marker"><PenLine size={21} aria-hidden="true" /></div>
            <span className="archive-tag">ARQUIVO 03</span>
            <p className="timeline-status">PÓS-GRADUAÇÃO EM ANDAMENTO</p>
            <h3>Alfabetização &amp; Letramento</h3>
            <p className="timeline-detail">Palavras, sentidos e o encantamento de construir novos repertórios.</p>
            <img className="timeline-bloom" src={assets.mark} alt="" aria-hidden="true" />
          </article>
        </div>
      </section>

      <section className="practice-section section-pad" aria-labelledby="practice-title">
        <div className="practice-intro">
          <div className="section-kicker"><Flower2 size={16} aria-hidden="true" /> O que atravessa minha prática <img className="kicker-mark" src={assets.mark} alt="" aria-hidden="true" /></div>
          <h2 id="practice-title">Educação com olhar <em>amplo.</em></h2>
          <p>Minha formação reúne linguagem, acolhimento e investigação para pensar a aprendizagem de maneira humana e intencional.</p>
        </div>
        <div className="practice-cards">
          <article className="practice-card card-purple">
            <span className="card-note">CADERNO 01</span>
            <Languages size={28} aria-hidden="true" />
            <h3>Perspectiva bilíngue</h3>
            <p>Uma formação que valoriza a linguagem como ponte para novas experiências e conexões.</p>
          </article>
          <article className="practice-card card-pink">
            <span className="card-note">CADERNO 02</span>
            <Brain size={28} aria-hidden="true" />
            <h3>Aprendizagem singular</h3>
            <p>Um aprofundamento em Psicopedagogia para compreender processos e possibilidades.</p>
          </article>
          <article className="practice-card card-cream">
            <span className="card-note">CADERNO 03</span>
            <PenLine size={28} aria-hidden="true" />
            <h3>Palavras que abrem mundos</h3>
            <p>Alfabetização e letramento como caminhos de autonomia, expressão e descoberta.</p>
          </article>
        </div>
      </section>

      <section className="gallery-section section-pad" id="galeria" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div>
            <div className="section-kicker"><Sparkles size={16} aria-hidden="true" /> Entre livros e propósitos <img className="kicker-mark" src={assets.mark} alt="" aria-hidden="true" /></div>
            <h2 id="gallery-title">Um pouco da minha<br /><em>história em imagens.</em></h2>
          </div>
          <p>Livros, estudo e presença: elementos que acompanham a caminhada da Pro Polly.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-card gallery-tall">
            <img src={assets.bilingualBook} alt="Pro Polly segurando um livro de Pedagogia Bilíngue" loading="lazy" />
            <figcaption><span>ACERVO 01</span> Formação que amplia horizontes</figcaption>
          </figure>
          <figure className="gallery-card gallery-tall gallery-offset">
            <img src={assets.positiveDiscipline} alt="Pro Polly apresentando uma leitura sobre disciplina positiva em sala de aula" loading="lazy" />
            <figcaption><span>ACERVO 02</span> Leitura que inspira a prática</figcaption>
          </figure>
          <div className="gallery-note">
            <Flower2 size={28} aria-hidden="true" />
            <p>“O estudo é a raiz; a prática é o florescimento.”</p>
            <span>PRO POLLY</span>
          </div>
        </div>
      </section>

      <section className="share-section" aria-labelledby="share-title">
        <div className="share-orbit share-orbit-one" aria-hidden="true" />
        <div className="share-orbit share-orbit-two" aria-hidden="true" />
        <div className="share-content">
          <img src={assets.mark} alt="" aria-hidden="true" className="share-mark" />
          <p className="eyebrow eyebrow-light"><span /> Portfólio digital</p>
          <h2 id="share-title">Leve esta história<br />para a sua <em>bio.</em></h2>
          <p>Se o meu olhar pedagógico faz sentido para sua escola, família ou projeto, guarde este link e leve a Pro Polly para uma nova conversa sobre educação.</p>
          <button type="button" className="button button-light" onClick={sharePortfolio}>
            <Copy size={17} aria-hidden="true" /> Compartilhar portfólio
          </button>
          {shareNotice && <p className="share-notice" role="status">{shareNotice}</p>}
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand-lockup footer-brand" href="#topo">
          <img src={assets.mark} alt="Símbolo floral da Pro Polly" className="brand-mark" />
          <span className="brand-type"><span>PRO</span><em>Polly</em></span>
        </a>
        <p>Pollyana Nascimento · Professora e pedagoga bilíngue</p>
        <a className="back-top" href="#topo">Voltar ao topo <ArrowUpRight size={15} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
