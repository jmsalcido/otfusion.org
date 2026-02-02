export type Locale = 'en' | 'es'

interface Metric {
  value: string
  label: string
}

interface ExpertiseItem {
  title: string
  body: string
  highlights: string[]
}

interface VentureItem {
  name: string
  role: string
  summary: string
  tags: string[]
  imageUrl?: string
  link?: {
    label: string
    url: string
  }
}

interface TimelineEntry {
  period: string
  role: string
  org: string
  detail: string
}

export interface Translation {
  nav: {
    home: string
    expertise: string
    ventures: string
    timeline: string
    contact: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    highlight: string
    primaryCta: string
    secondaryCta: string
    metrics: Metric[]
  }
  expertise: {
    label: string
    title: string
    description: string
    items: ExpertiseItem[]
  }
  ventures: {
    label: string
    title: string
    description: string
    items: VentureItem[]
  }
  timeline: {
    label: string
    title: string
    description: string
    entries: TimelineEntry[]
  }
  newsletter: {
    label: string
    title: string
    description: string
    placeholder: string
    button: string
    note: string
    success: string
  }
  newsletterLanding: {
    backLink: string
    eyebrow: string
    title: string
    subtitle: string
    highlights: string[]
    quote: string
    quoteAuthor: string
    formTitle: string
    formDescription: string
  }
  contact: {
    label: string
    title: string
    description: string
    form: {
      name: string
      email: string
      message: string
      purposeLabel: string
      purposeOptions: string[]
      submit: string
      success: string
    }
  }
  footer: {
    message: string
  }
  notFound: {
    label: string
    title: string
    description: string
    ctaHome: string
    ctaNewsletter: string
  }
}

export const translations: Record<Locale, Translation> = {
  en: {
    nav: {
      home: 'Home',
      expertise: 'Expertise',
      ventures: 'Ventures',
      timeline: 'Timeline',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Software Engineering & Entrepreneurship',
      title: 'Technology for Ambitious Teams',
      subtitle:
        'I help founders, executives, and operators align product strategy, engineering systems, and human rituals so companies grow deliberately—not chaotically.',
      highlight: 'Based in Hermosillo, MX, collaborating globally.',
      primaryCta: 'Start a conversation',
      secondaryCta: 'Join the newsletter',
      metrics: [
        { value: '10+', label: 'years collaborating with teams' },
        { value: '4', label: 'ventures co-created' },
        { value: '$50M+', label: 'combined product impact' }
      ]
    },
    expertise: {
      label: 'Expertise',
      title: 'How I create momentum',
      description:
        'Hands-on leadership for engineering orgs, pragmatic venture advisory, and coaching for builders who value intentional progress.',
      items: [
        {
          title: 'Fractional Engineering Leadership',
          body:
            'Embed leadership to align architecture, hiring, delivery, and operating cadence across your org.',
          highlights: [
            'Org design & engineering rituals',
            'Architecture and systems audits',
            'Executive partnership & reporting'
          ]
        },
        {
          title: 'Startup & Venture Advisory',
          body:
            'Support founders through product strategy, GTM validation, hiring first teams, and securing sustainable growth.',
          highlights: [
            'Pre/post-seed technical diligence',
            'Hiring and leadership frameworks',
            'Board-level storytelling'
          ]
        },
        {
          title: 'Builder Coaching',
          body:
            '1:1 and small-cohort coaching for engineers and operators navigating new leadership challenges.',
          highlights: [
            'Mentorship sessions rooted in stoic principles',
            'Career architecture & narrative practice',
            'Accountability systems that feel humane'
          ]
        }
      ]
    },
    ventures: {
      label: 'Ventures',
      title: 'Entrepreneurial proof of work',
      description:
        'A sampling of ventures and collaborations that keep me close to the craft of building products, businesses, and communities.',
      items: [
        {
          name: 'Culto al Perro Café',
          role: 'Co-founder & roaster',
          summary:
            'Neighborhood coffee project blending hospitality, craft roasting, and local culture to create a welcoming social space.',
          tags: ['hospitality', 'operations', 'brand'],
          imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80&sat=-100',
          link: {
            label: 'perro.cafe',
            url: 'https://perro.cafe'
          }
        },
        {
          name: 'Taller Lobo y Osa',
          role: 'Partner engineer',
          summary:
            'Boutique software studio helping regional and international companies ship foundational products with modern tooling.',
          tags: ['software', 'leadership', 'delivery'],
          imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80&sat=-100',
          link: {
            label: 'loboyosa.com',
            url: 'https://loboyosa.com'
          }
        },
        {
          name: 'Juegathon',
          role: 'Founder',
          summary:
            'Annual charity stream rallying the gaming community in Hermosillo to fund local initiatives.',
          tags: ['community', 'nonprofit', 'production'],
          imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80&sat=-100',
          link: {
            label: 'juegathon.com',
            url: 'https://juegathon.com'
          }
        },
        {
          name: 'Urban Glow',
          role: 'Manager',
          summary:
            'Experimental AI-driven music project exploring the future of creative direction and audio production.',
          tags: ['music', 'AI', 'strategy'],
          imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80&sat=-100',
          link: {
            label: 'Spotify',
            url: 'https://open.spotify.com/artist/0iudDTKgNaU5SU9VF6P9oz?si=KOiQm57hSJyS5EzXSx4-0g'
          }
        }
      ]
    },
    timeline: {
      label: 'Trajectory',
      title: 'A timeline of impact',
      description:
        'Blending entrepreneurship, engineering leadership, and community building to keep perspective balanced.',
      entries: [
        {
          period: 'Present',
          role: 'CEO & Business Partner',
          org: 'Culto al Perro Café and Taller Lobo y Osa',
          detail:
            'Supporting scaling teams with org design, architecture reviews, and coaching grounded in stoic principles.'
        },
        {
          period: '2022 — 2025',
          role: 'Senior Software Engineer and Founding Engineer',
          org: 'Probably Genetic',
          detail:
            'Started as a Founding Engineer and grew into a Senior Software Engineer for a YC-Combinator-backed startup with the goal to find 2000+ patients with a rare genetic disorder and help them get a diagnosis.'
        },
        {
          period: '2020 — 2022',
          role: 'Founder & Barista',
          org: 'Culto al Perro Café',
          detail:
            'Started a neighborhood coffee project blending hospitality, craft roasting, and local culture to create a welcoming social space.'
        },
        {
          period: 'Earlier',
          role: 'Software Engineer',
          org: 'Various ventures',
          detail:
            'Worked as an engineer in various ventures, helping them ship products and grow their businesses.'
        }
      ]
    },
    newsletter: {
      label: 'Newsletter',
      title: 'Carta Stoica',
      description:
        'Short essays on leadership, experiments from the field, and curated reading notes. Sent only when there is substance.',
      placeholder: 'you@email.com',
      button: 'Get letters',
      note: 'No spam. Just thoughtful signal.',
      success: 'Thank you. The next letter will find you soon.'
    },
    newsletterLanding: {
      backLink: 'Back to site',
      eyebrow: 'Carta Stoica',
      title: 'A quiet note on leadership, systems, and patience.',
      subtitle:
        'Brief essays in Spanish. Delivered only when there is something worth keeping.',
      highlights: [
        'Stoic framing for modern work',
        'Experiments from product and operations',
        'Short, practical prompts to think better'
      ],
      quote: 'We suffer more in imagination than in reality.',
      quoteAuthor: 'Seneca',
      formTitle: 'Join the newsletter',
      formDescription: 'One email at a time. You can unsubscribe whenever you want.'
    },
    contact: {
      label: 'Contact',
      title: 'Start a conversation',
      description:
        'Share a little context and I will reach out within two business days. English or Spanish is welcome.',
      form: {
        name: 'Full name',
        email: 'Email address',
        message: 'How can I help?',
        purposeLabel: 'Focus',
        purposeOptions: [
          'Advisory or coaching',
          'Fractional leadership',
          'New venture collaboration',
          'Speaking / media',
          'Other'
        ],
        submit: 'Send message',
        success: 'Message received. I will respond shortly.'
      }
    },
    footer: {
      message: 'Technology built with intention.'
    },
    notFound: {
      label: 'Off the map',
      title: 'This page is lost in thought.',
      description:
        'Let’s get you back to steady ground. Return home or join Carta Stoica to keep up with new essays and experiments.',
      ctaHome: 'Return home',
      ctaNewsletter: 'Go to Carta Stoica'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      expertise: 'Experiencia',
      ventures: 'Proyectos',
      timeline: 'Trayectoria',
      contact: 'Contacto'
    },
    hero: {
      eyebrow: 'Ingeniería de Software y Emprendimiento',
      title: 'Tecnología para Equipos Ambiciosos',
      subtitle:
        'Ayudo a fundadores, ejecutivos y operadores a alinear estrategia de producto, sistemas de ingeniería y rituales humanos para que las empresas crezcan deliberadamente—no caóticamente.',
      highlight: 'Con base en Hermosillo, MX, colaborando globalmente.',
      primaryCta: 'Iniciar una conversación',
      secondaryCta: 'Unirse al newsletter',
      metrics: [
        { value: '10+', label: 'años colaborando con equipos' },
        { value: '4', label: 'proyectos co-creados' },
        { value: '$50M+', label: 'impacto combinado en productos' }
      ]
    },
    expertise: {
      label: 'Experiencia',
      title: 'Cómo creo impulso',
      description:
        'Liderazgo práctico para organizaciones de ingeniería, asesoría pragmática para ventures y coaching para constructores que valoran el progreso intencional.',
      items: [
        {
          title: 'Liderazgo Fraccional de Ingeniería',
          body:
            'Inserción de liderazgo para alinear arquitectura, contratación, entrega y cadencia operativa en toda tu organización.',
          highlights: [
            'Diseño organizacional y rituales de ingeniería',
            'Auditorías de arquitectura y sistemas',
            'Asociación ejecutiva y reportes'
          ]
        },
        {
          title: 'Asesoría para Startups y Ventures',
          body:
            'Apoyo a fundadores en estrategia de producto, validación de GTM, contratación de primeros equipos y crecimiento sostenible.',
          highlights: [
            'Diligencia técnica pre/post-seed',
            'Marcos de contratación y liderazgo',
            'Narrativas a nivel de consejo'
          ]
        },
        {
          title: 'Coaching para Constructores',
          body:
            'Coaching 1:1 y en pequeñas cohortes para ingenieros y operadores que navegan nuevos desafíos de liderazgo.',
          highlights: [
            'Sesiones de mentoría basadas en principios estoicos',
            'Arquitectura de carrera y práctica narrativa',
            'Sistemas de responsabilidad que se sienten humanos'
          ]
        }
      ]
    },
    ventures: {
      label: 'Proyectos',
      title: 'Prueba de trabajo emprendedora',
      description:
        'Una muestra de proyectos y colaboraciones que me mantienen cerca del oficio de construir productos, negocios y comunidades.',
      items: [
        {
          name: 'Culto al Perro Café',
          role: 'Co-fundador y tostador',
          summary:
            'Proyecto cafetero de barrio que combina hospitalidad, tostado artesanal y cultura local para crear un espacio social acogedor.',
          tags: ['hospitalidad', 'operaciones', 'marca'],
          imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80&sat=-100',
          link: {
            label: 'perro.cafe',
            url: 'https://perro.cafe'
          }
        },
        {
          name: 'Taller Lobo y Osa',
          role: 'Ingeniero socio',
          summary:
            'Estudio boutique de software que ayuda a empresas regionales e internacionales a lanzar productos fundacionales con herramientas modernas.',
          tags: ['software', 'liderazgo', 'entrega'],
          imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80&sat=-100',
          link: {
            label: 'loboyosa.com',
            url: 'https://loboyosa.com'
          }
        },
        {
          name: 'Juegathon',
          role: 'Fundador',
          summary:
            'Evento anual de caridad que convoca a la comunidad gamer de Hermosillo para financiar iniciativas locales.',
          tags: ['comunidad', 'sin fines de lucro', 'producción'],
          imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80&sat=-100',
          link: {
            label: 'juegathon.com',
            url: 'https://juegathon.com'
          }
        },
        {
          name: 'Urban Glow',
          role: 'Manager',
          summary:
            'Proyecto experimental de música impulsado por IA que explora el futuro de la dirección creativa y la producción de audio.',
          tags: ['música', 'IA', 'estrategia'],
          imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80&sat=-100',
          link: {
            label: 'Spotify',
            url: 'https://open.spotify.com/artist/0iudDTKgNaU5SU9VF6P9oz?si=KOiQm57hSJyS5EzXSx4-0g'
          }
        }
      ]
    },
    timeline: {
      label: 'Trayectoria',
      title: 'Una línea de tiempo de impacto',
      description:
        'Combinando emprendimiento, liderazgo de ingeniería y construcción de comunidad para mantener la perspectiva equilibrada.',
      entries: [
        {
          period: 'Presente',
          role: 'CEO y Socio de Negocios',
          org: 'Culto al Perro Café y Taller Lobo y Osa',
          detail:
            'Apoyando equipos en crecimiento con diseño organizacional, revisiones de arquitectura y coaching basado en principios estoicos.'
        },
        {
          period: '2022 — 2025',
          role: 'Ingeniero de Software Senior e Ingeniero Fundador',
          org: 'Probably Genetic',
          detail:
            'Comencé como Ingeniero Fundador y crecí hasta ser Ingeniero de Software Senior para una startup respaldada por Y Combinator con el objetivo de encontrar más de 2000 pacientes con un trastorno genético raro y ayudarlos a obtener un diagnóstico.'
        },
        {
          period: '2020 — 2022',
          role: 'Fundador y Barista',
          org: 'Culto al Perro Café',
          detail:
            'Inicié un proyecto cafetero de barrio que combina hospitalidad, tostado artesanal y cultura local para crear un espacio social acogedor.'
        },
        {
          period: 'Anteriormente',
          role: 'Ingeniero de Software',
          org: 'Varios proyectos',
          detail:
            'Trabajé como ingeniero en varios proyectos, ayudándolos a lanzar productos y hacer crecer sus negocios.'
        }
      ]
    },
    newsletter: {
      label: 'Newsletter',
      title: 'Carta Stoica',
      description:
        'Ensayos breves sobre liderazgo, experimentos del campo y notas de lectura curadas. Enviado solo cuando hay sustancia.',
      placeholder: 'tu@email.com',
      button: 'Recibir cartas',
      note: 'Sin spam. Solo señal reflexiva.',
      success: 'Gracias. La próxima carta te encontrará pronto.'
    },
    newsletterLanding: {
      backLink: 'Volver al sitio',
      eyebrow: 'Carta Stoica',
      title: 'Una nota tranquila sobre liderazgo, sistemas y paciencia.',
      subtitle:
        'Ensayos breves en español. Solo cuando hay algo que vale la pena guardar.',
      highlights: [
        'Marco estoico para el trabajo moderno',
        'Experimentos de producto y operaciones',
        'Prompts cortos y prácticos para pensar mejor'
      ],
      quote: 'Sufrimos más en la imaginación que en la realidad.',
      quoteAuthor: 'Séneca',
      formTitle: 'Únete a la lista',
      formDescription: 'Un correo a la vez. Puedes salir cuando quieras.'
    },
    contact: {
      label: 'Contacto',
      title: 'Iniciar una conversación',
      description:
        'Comparte un poco de contexto y me pondré en contacto contigo en un plazo de dos días hábiles. El inglés o el español son bienvenidos.',
      form: {
        name: 'Nombre completo',
        email: 'Dirección de correo electrónico',
        message: '¿Cómo puedo ayudar?',
        purposeLabel: 'Enfoque',
        purposeOptions: [
          'Asesoría o coaching',
          'Liderazgo fraccional',
          'Nueva colaboración de proyecto',
          'Charlas / medios',
          'Otro'
        ],
        submit: 'Enviar mensaje',
        success: 'Mensaje recibido. Responderé pronto.'
      }
    },
    footer: {
      message: 'Tecnología construida con intención.'
    },
    notFound: {
      label: 'Fuera del mapa',
      title: 'Esta página se quedó pensando.',
      description:
        'Regresemos al centro. Vuelve al inicio o súmate a Carta Stoica para recibir nuevos ensayos y experimentos.',
      ctaHome: 'Volver al inicio',
      ctaNewsletter: 'Ir a Carta Stoica'
    }
  }
}
