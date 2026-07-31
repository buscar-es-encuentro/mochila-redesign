import Link from "next/link";

const destinations = [
  {
    slug: "amazonas",
    name: "Amazonas",
    country: "Colombia",
    duration: "5 días · Naturaleza",
    image:
      "https://images.unsplash.com/photo-1744918409575-515d9e5286bf?auto=format&fit=crop&w=1200&q=85",
    alt: "Lancha navegando por el río Amazonas entre vegetación tropical",
  },
  {
    slug: "cartagena",
    name: "Cartagena",
    country: "Colombia",
    duration: "4 días · Cultura",
    image:
      "https://images.unsplash.com/photo-1714686495394-73e2bb1bbd39?auto=format&fit=crop&w=1200&q=85",
    alt: "Calle colonial colorida en Cartagena de Indias",
  },
  {
    slug: "ciudad-perdida",
    name: "Ciudad Perdida",
    country: "Colombia",
    duration: "5 días · Aventura",
    image:
      "https://images.unsplash.com/photo-1621945036417-683d6703bbc0?auto=format&fit=crop&w=1200&q=85",
    alt: "Terrazas verdes de Ciudad Perdida en la Sierra Nevada",
  },
  {
    slug: "tailandia",
    name: "Tailandia",
    country: "Asia",
    duration: "12 días · Cultura",
    image:
      "https://images.unsplash.com/photo-1748501035800-1e7749dcae95?auto=format&fit=crop&w=1200&q=85",
    alt: "Templo tailandés iluminado junto al río",
  },
  {
    slug: "egipto",
    name: "Egipto",
    country: "África",
    duration: "10 días · Historia",
    image:
      "https://images.unsplash.com/photo-1678388103961-5e1254fcc42a?auto=format&fit=crop&w=1200&q=85",
    alt: "Pirámides de Giza bajo el cielo del desierto",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Me viajo y me voy, inicio">
        <span className="brand-mark">M</span>
        <span>
          ME VIAJO
          Y ME VOY
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegación principal">
        <a href="#destinos">Destinos</a>
        <a href="#experiencias">Experiencias</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#inspiracion">Inspiración</a>
      </nav>
      <a className="button button-small" href="#cotizar">
        Cotizar viaje <Arrow />
      </a>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <div className="concept-banner">
        Rediseño conceptual · Sitio demostrativo · No procesa reservas
      </div>
      <Header />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Viajes con propósito · Desde Colombia</p>
          <h1>Viajes que empiezan con una historia</h1>
          <p className="hero-intro">
            Creamos experiencias auténticas por Colombia y el mundo, diseñadas
            para conectar con cada lugar y volver con algo más que fotografías.
          </p>
          <div className="hero-actions">
            <a className="button" href="#destinos">
              Explorar destinos <Arrow />
            </a>
            <a className="button button-outline" href="#cotizar">
              Diseñar mi viaje <Arrow />
            </a>
          </div>
          <div className="hero-trust">
            <span className="trust-icon" aria-hidden="true">✦</span>
            <p>
              Itinerarios a medida, proveedores responsables y atención humana
              antes, durante y después de cada viaje.
            </p>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Viajeros recorriendo el páramo colombiano">
          <div className="hero-location">
            <span>05° 58&apos; N</span>
            <strong>Páramo de Sonsón</strong>
            <span>Colombia</span>
          </div>
          <div className="hero-index">01 <i /> 03</div>
        </div>
      </section>

      <section className="intro-band" id="experiencias">
        <p className="eyebrow">Nuestra forma de viajar</p>
        <h2>Menos turismo de catálogo.<br />Más historias para recordar.</h2>
        <p>
          Diseñamos cada ruta con curiosidad, conocimiento local y tiempo para
          vivir el destino sin prisa.
        </p>
      </section>

      <section className="destinations-section" id="destinos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Una mochila, muchos caminos</p>
            <h2>Destinos que inspiran</h2>
          </div>
          <a className="text-link" href="#todos-los-destinos">
            Ver todos los destinos <Arrow />
          </a>
        </div>
        <div className="destination-grid" id="todos-los-destinos">
          {destinations.map((destination, index) => (
            <Link
              href={`/destinos/${destination.slug}`}
              className={`destination-card card-${index + 1}`}
              key={destination.slug}
            >
              <img src={destination.image} alt={destination.alt} />
              <span className="card-shade" />
              <span className="card-number">0{index + 1}</span>
              <span className="card-content">
                <small>{destination.country}</small>
                <strong>{destination.name}</strong>
                <span>{destination.duration}</span>
              </span>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="why-section" id="nosotros">
        <div className="why-image">
          <span>Viajar es coleccionar historias</span>
        </div>
        <div className="why-copy">
          <p className="eyebrow">Viaja acompañado, nunca empaquetado</p>
          <h2>Tu viaje debe sentirse tan único como tú.</h2>
          <p>
            No creemos en itinerarios impersonales. Escuchamos cómo imaginas tu
            viaje y transformamos esa conversación en una ruta cuidada, flexible
            y memorable.
          </p>
          <div className="benefits">
            <article>
              <span>01</span>
              <div>
                <h3>Diseño personalizado</h3>
                <p>Ritmos, intereses y presupuesto convertidos en una ruta propia.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Acompañamiento cercano</h3>
                <p>Una persona real disponible antes y durante la experiencia.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Experiencias auténticas</h3>
                <p>Conexiones locales que van más allá de marcar lugares en un mapa.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="process-section">
        <p className="eyebrow">Así empieza la aventura</p>
        <h2>De una idea a tu próxima historia</h2>
        <div className="process-grid">
          <article><span>01</span><h3>Cuéntanos tu idea</h3><p>Destino, fechas, viajeros y la experiencia que imaginas.</p></article>
          <article><span>02</span><h3>Diseñamos la ruta</h3><p>Preparamos una propuesta clara, flexible y sin sorpresas.</p></article>
          <article><span>03</span><h3>Alista tu mochila</h3><p>Confirmamos cada detalle y te acompañamos hasta el regreso.</p></article>
        </div>
      </section>

      <section className="quote-section" id="cotizar">
        <div>
          <p className="eyebrow eyebrow-light">Tu próxima historia comienza aquí</p>
          <h2>¿A dónde quieres ir?</h2>
          <p>
            Cuéntanos lo que tienes en mente. Esta maqueta no envía información,
            pero muestra cómo funcionaría el primer contacto.
          </p>
          <div className="contact-meta">
            <span>RNT 163048</span>
            <span>Mosquera, Cundinamarca</span>
          </div>
        </div>
        <form className="quote-form">
          <label>
            Nombre
            <input type="text" placeholder="¿Cómo te llamas?" />
          </label>
          <label>
            Destino
            <select defaultValue="">
              <option value="" disabled>Elige una opción</option>
              <option>Amazonas</option>
              <option>Cartagena</option>
              <option>Ciudad Perdida</option>
              <option>Tailandia</option>
              <option>Egipto</option>
              <option>Aún no lo sé</option>
            </select>
          </label>
          <label>
            WhatsApp
            <input type="tel" placeholder="+57 300 000 0000" />
          </label>
          <label>
            ¿Qué viaje imaginas?
            <textarea rows={3} placeholder="Fechas, número de viajeros y lo que te gustaría vivir..." />
          </label>
          <button type="button" className="button form-button">
            Solicitar propuesta <Arrow />
          </button>
          <small>Demostración visual: el formulario no almacena ni envía datos.</small>
        </form>
      </section>

      <footer>
        <Link className="brand brand-light" href="/">
          <span className="brand-mark">M</span>
          <span>MOCHILA<small>Y NOS FUIMOS</small></span>
        </Link>
        <p>
          Rediseño conceptual desarrollado para portafolio. No corresponde al
          sitio oficial y no procesa reservas.
        </p>
        <p>© 2026 · Concepto de diseño</p>
      </footer>
    </main>
  );
}
