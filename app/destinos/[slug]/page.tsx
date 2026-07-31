import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const trips = {
  amazonas: {
    name: "Amazonas",
    region: "Puerto Nariño, Colombia",
    duration: "5 días / 4 noches",
    style: "Naturaleza · Cultura · Aventura",
    image: "https://images.unsplash.com/photo-1744918409575-515d9e5286bf?auto=format&fit=crop&w=2000&q=88",
    summary: "Una inmersión en la selva, sus ríos y las comunidades que la conocen desde siempre.",
    intro: "Navega por el río Amazonas, escucha la selva despertar y descubre una forma distinta de entender el tiempo. Esta ruta conceptual combina naturaleza, cultura local y espacios para observar sin prisa.",
    highlights: ["Navegación por el río Amazonas", "Encuentro cultural responsable", "Avistamiento de fauna", "Amanecer en la selva"],
  },
  cartagena: {
    name: "Cartagena",
    region: "Bolívar, Colombia",
    duration: "4 días / 3 noches",
    style: "Cultura · Gastronomía · Mar",
    image: "https://images.unsplash.com/photo-1714686495394-73e2bb1bbd39?auto=format&fit=crop&w=2000&q=88",
    summary: "Calles con memoria, cocina caribeña y el ritmo de una ciudad que se vive caminando.",
    intro: "Recorre la historia de Cartagena lejos de los itinerarios apresurados. Una experiencia entre arquitectura, sabores locales, conversaciones y atardeceres frente al Caribe.",
    highlights: ["Centro histórico a pie", "Experiencia gastronómica", "Atardecer en el Caribe", "Tiempo libre para explorar"],
  },
  "ciudad-perdida": {
    name: "Ciudad Perdida",
    region: "Sierra Nevada de Santa Marta",
    duration: "5 días / 4 noches",
    style: "Trekking · Naturaleza · Historia",
    image: "https://images.unsplash.com/photo-1621945036417-683d6703bbc0?auto=format&fit=crop&w=2000&q=88",
    summary: "Un camino entre selva y montaña hacia uno de los lugares más extraordinarios de Colombia.",
    intro: "Una travesía exigente y transformadora por la Sierra Nevada. Caminos ancestrales, ríos, selva tropical y el acompañamiento necesario para disfrutar la experiencia con respeto y seguridad.",
    highlights: ["Trekking acompañado", "Territorios ancestrales", "Campamentos en la ruta", "Ingreso a Ciudad Perdida"],
  },
  tailandia: {
    name: "Tailandia",
    region: "Bangkok y norte de Tailandia",
    duration: "12 días / 11 noches",
    style: "Cultura · Gastronomía · Templos",
    image: "https://images.unsplash.com/photo-1748501035800-1e7749dcae95?auto=format&fit=crop&w=2000&q=88",
    summary: "Templos, mercados y sabores en una ruta que mezcla energía urbana y calma.",
    intro: "Una introducción pausada a Tailandia: barrios vibrantes, patrimonio, cocina y experiencias culturales seleccionadas para comprender el destino más allá de sus postales.",
    highlights: ["Bangkok con guía local", "Templos y patrimonio", "Mercados y gastronomía", "Extensión de playa opcional"],
  },
  egipto: {
    name: "Egipto",
    region: "El Cairo y valle del Nilo",
    duration: "10 días / 9 noches",
    style: "Historia · Cultura · Navegación",
    image: "https://images.unsplash.com/photo-1678388103961-5e1254fcc42a?auto=format&fit=crop&w=2000&q=88",
    summary: "Una ruta por civilizaciones milenarias, desierto y las historias que siguen vivas junto al Nilo.",
    intro: "Del Cairo a los templos del sur, esta propuesta equilibra los lugares esenciales con tiempo para comprender su contexto y viajar con acompañamiento cercano.",
    highlights: ["Pirámides de Giza", "Museos y patrimonio", "Navegación por el Nilo", "Templos del Alto Egipto"],
  },
} as const;

type TripSlug = keyof typeof trips;

export function generateStaticParams() {
  return Object.keys(trips).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trip = trips[slug as TripSlug];
  if (!trip) return {};
  return {
    title: `Viaje a ${trip.name}`,
    description: `${trip.summary} Conoce la propuesta e imagina tu viaje personalizado.`,
  };
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = trips[slug as TripSlug];
  if (!trip) notFound();

  return (
    <main className="trip-page">
      <div className="concept-banner">Rediseño conceptual · Información ilustrativa</div>
      <header className="trip-header">
        <Link className="brand" href="/">
          <span className="brand-mark">M</span>
          <span>MOCHILA<small>Y NOS FUIMOS</small></span>
        </Link>
        <Link className="back-link" href="/#destinos">← Todos los destinos</Link>
        <Link className="button button-small" href="/#cotizar">Cotizar viaje ↗</Link>
      </header>

      <section className="trip-hero" style={{ backgroundImage: `linear-gradient(to top, rgba(14,18,14,.76), transparent 65%), url("${trip.image}")` }}>
        <div>
          <p className="eyebrow eyebrow-light">{trip.region}</p>
          <h1>{trip.name}</h1>
          <p>{trip.summary}</p>
        </div>
        <aside>
          <span>Duración<strong>{trip.duration}</strong></span>
          <span>Experiencia<strong>{trip.style}</strong></span>
        </aside>
      </section>

      <section className="trip-story">
        <div>
          <p className="eyebrow">Una ruta para vivirla</p>
          <h2>El viaje, a tu manera.</h2>
        </div>
        <p>{trip.intro}</p>
      </section>

      <section className="trip-highlights">
        <p className="eyebrow">Momentos esenciales</p>
        <div>
          {trip.highlights.map((highlight, index) => (
            <article key={highlight}>
              <span>0{index + 1}</span>
              <h2>{highlight}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="trip-cta">
        <p className="eyebrow eyebrow-light">¿Te imaginas aquí?</p>
        <h2>Diseñemos esta historia juntos.</h2>
        <p>Las fechas, precios e itinerarios de esta maqueta son ilustrativos.</p>
        <Link className="button" href="/#cotizar">Solicitar una propuesta ↗</Link>
      </section>
    </main>
  );
}
