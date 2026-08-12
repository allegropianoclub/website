const upcomingEvents = [
  {
    date: "22 nov",
    title: "Allegro Piano Club: Noite de Estreia",
    venue: "Teatro na Avenida Paulista",
    status: "Inscricoes abertas",
    program: "12 pianistas, recitais de uma ou duas pecas, 60 minutos de concerto.",
  },
  {
    date: "13 dez",
    title: "Especial de Fim de Ano",
    venue: "Local em curadoria",
    status: "Lista de interesse",
    program: "Repertorio classico, trilhas marcantes e compositores brasileiros.",
  },
];

const pastEvents = [
  {
    date: "Ago 2026",
    title: "Encontro fechado de repertorio",
    detail: "Primeira selecao de pianistas e leitura coletiva de programa.",
  },
  {
    date: "Jul 2026",
    title: "Sessao de escuta",
    detail: "Curadoria inicial para definir a duracao, o ritmo e a proposta do palco.",
  },
];

const repertoireIdeas = [
  "Chopin: Noturno op. 9 n. 2",
  "Debussy: Clair de Lune",
  "Ernesto Nazareth: Odeon",
  "Rachmaninoff: Preludio em do sustenido menor",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="hero" id="inicio">
        <nav className="nav" aria-label="Navegacao principal">
          <a className="brand" href="#inicio" aria-label="Allegro Piano Club">
            <span className="brand-mark">A</span>
            <span>
              <strong>Allegro</strong>
              <small>Piano Club</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#eventos">Eventos</a>
            <a href="#pianistas">Pianistas</a>
            <a href="#repertorio">Repertorio</a>
            <a href="#inscricao">Inscricao</a>
          </div>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy" aria-labelledby="hero-title">
            <p className="eyebrow">Recitais de piano na Avenida Paulista</p>
            <h1 id="hero-title">Allegro Piano Club</h1>
            <p className="hero-lede">
              Um palco de uma hora para pianistas dividirem o concerto: cada
              artista toca uma ou duas musicas, o publico descobre novos nomes
              e a noite respira piano do primeiro ao ultimo acorde.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#inscricao">
                Quero tocar
              </a>
              <a className="button secondary" href="#novidades">
                Receber novidades
              </a>
            </div>
          </section>

          <section className="hero-card" aria-label="Resumo do proximo concerto">
            <div>
              <span className="card-kicker">Proximo recital</span>
              <h2>60 minutos, 12 pianistas, um teatro na Paulista.</h2>
            </div>
            <dl className="concert-facts">
              <div>
                <dt>Formato</dt>
                <dd>1 ou 2 musicas por pianista</dd>
              </div>
              <div>
                <dt>Publico</dt>
                <dd>Amantes de piano, amigos e convidados</dd>
              </div>
              <div>
                <dt>Palco</dt>
                <dd>Teatro intimista em Sao Paulo</dd>
              </div>
            </dl>
          </section>
        </div>
      </header>

      <section className="intro-band" aria-label="Conceito do projeto">
        <div>
          <span>01</span>
          <h2>Um recital coletivo, elegante e possivel.</h2>
        </div>
        <p>
          O Allegro organiza apresentacoes curtas para pianistas adultos,
          estudantes avancados e artistas convidados. A proposta e simples:
          dividir o custo de um bom teatro, montar uma noite consistente e
          receber o publico com a qualidade de um concerto de verdade.
        </p>
      </section>

      <section className="section events" id="eventos">
        <div className="section-heading">
          <p className="eyebrow">Agenda</p>
          <h2>Proximos eventos</h2>
        </div>
        <div className="event-list">
          {upcomingEvents.map((event) => (
            <article className="event-card" key={event.title}>
              <time>{event.date}</time>
              <div>
                <span>{event.status}</span>
                <h3>{event.title}</h3>
                <p>{event.venue}</p>
                <p>{event.program}</p>
              </div>
              <a href="#inscricao" aria-label={`Inscrever-se em ${event.title}`}>
                Participar
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="pianistas">
        <div className="section-heading">
          <p className="eyebrow">Para pianistas</p>
          <h2>Como funciona a noite</h2>
        </div>
        <div className="steps">
          <article>
            <span>1</span>
            <h3>Inscricao</h3>
            <p>
              Voce envia seus dados, nivel, disponibilidade e sugestao de
              repertorio para a proxima apresentacao.
            </p>
          </article>
          <article>
            <span>2</span>
            <h3>Curadoria</h3>
            <p>
              A ordem do programa equilibra estilos, duracao e energia do
              concerto para caber em uma hora.
            </p>
          </article>
          <article>
            <span>3</span>
            <h3>Palco</h3>
            <p>
              Cada pianista toca uma ou duas musicas, com tempo de entrada,
              foto oficial e chamada para convidados.
            </p>
          </article>
        </div>
      </section>

      <section className="section repertoire" id="repertorio">
        <div className="section-heading">
          <p className="eyebrow">Publico</p>
          <h2>Peca uma musica para ouvir</h2>
          <p>
            A curadoria recebe sugestoes do publico e cruza com o repertorio dos
            pianistas. Algumas ideias ja entraram na lista de desejos:
          </p>
        </div>
        <div className="request-panel">
          <ul aria-label="Ideias de repertorio">
            {repertoireIdeas.map((piece) => (
              <li key={piece}>{piece}</li>
            ))}
          </ul>
          <form className="compact-form" action="mailto:contato@allegropiano.club" method="post" encType="text/plain">
            <label>
              Musica desejada
              <input name="musica" placeholder="Ex.: Bach, Villa-Lobos, trilha de filme..." />
            </label>
            <label>
              Seu nome
              <input name="nome" placeholder="Como devemos te chamar?" />
            </label>
            <button type="submit">Enviar pedido</button>
          </form>
        </div>
      </section>

      <section className="section previous" aria-labelledby="previous-title">
        <div className="section-heading">
          <p className="eyebrow">Memoria</p>
          <h2 id="previous-title">Eventos anteriores</h2>
        </div>
        <div className="past-grid">
          {pastEvents.map((event) => (
            <article key={event.title}>
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p>{event.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section forms" id="inscricao">
        <div className="form-copy">
          <p className="eyebrow">Participe</p>
          <h2>Inscreva-se para o proximo recital</h2>
          <p>
            Envie sua candidatura como pianista ou entre na lista de interessados
            para assistir. A equipe retorna com datas, valores de participacao e
            detalhes do teatro assim que a agenda fechar.
          </p>
        </div>
        <form className="signup-form" action="mailto:contato@allegropiano.club" method="post" encType="text/plain">
          <label>
            Nome completo
            <input name="nome" autoComplete="name" />
          </label>
          <label>
            E-mail
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Quero participar como
            <select name="perfil" defaultValue="pianista">
              <option value="pianista">Pianista</option>
              <option value="publico">Publico</option>
              <option value="apoiador">Apoiador ou parceiro</option>
            </select>
          </label>
          <label>
            Repertorio ou mensagem
            <textarea name="mensagem" rows={4} placeholder="Conte quais pecas voce gostaria de tocar ou ouvir." />
          </label>
          <button type="submit">Enviar inscricao</button>
        </form>
      </section>

      <section className="newsletter" id="novidades">
        <div>
          <p className="eyebrow">Lista Allegro</p>
          <h2>Receba novidades dos proximos concertos</h2>
        </div>
        <form action="mailto:contato@allegropiano.club" method="post" encType="text/plain">
          <label className="sr-only" htmlFor="newsletter-email">
            E-mail para novidades
          </label>
          <input id="newsletter-email" name="email" type="email" placeholder="seuemail@exemplo.com" />
          <button type="submit">Entrar na lista</button>
        </form>
      </section>
    </main>
  );
}
