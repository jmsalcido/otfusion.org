import { ProjectCard, type ProjectCardProps } from './ProjectCard'

const projects = [
  {
    title: "Culto al Perro Café",
    description: "A Coffee Shop in Hermosillo, Sonora, I am roaster, administrator, manager and some times barista!",
    technologies: ["coffee", "cofounder", "business"],
    imageUrl: "https://res.cloudinary.com/otfusion/image/upload/v1/otfusion/projects/cpc.png",
    liveUrl: "https://perro.cafe",
    active: true
  },
  {
    title: "Tepache Dev",
    description: "A Software Development Agency in Hermosillo, Sonora",
    technologies: ["cofounder", "business", "software", "engineering"],
    imageUrl: "https://res.cloudinary.com/otfusion/image/upload/v1/otfusion/projects/tepache-dev.png",
    liveUrl: "https://eslegalmitrabajo.com",
    active: true
  },
  {
    title: "Juegathon",
    description: "Yearly Charity Event in Hermosillo, Sonora, I am the founder and organizer",
    technologies: ["founder", "charity", "stream", "videogames"],
    imageUrl: "https://res.cloudinary.com/otfusion/image/upload/v1718600472/otfusion/projects/juegathon.png",
    liveUrl: "https://juegathon.com",
    active: true
  },
  {
    title: "Urban Glow",
    description: "An AI Musician, I am the manager of this AI Project",
    technologies: ["music", "manager", "producer"],
    imageUrl: "https://res.cloudinary.com/otfusion/image/upload/v1718600472/otfusion/projects/urban-glow.jpg",
    liveUrl: "https://open.spotify.com/artist/0iudDTKgNaU5SU9VF6P9oz?si=KOiQm57hSJyS5EzXSx4-0g",
    active: true
  },
  {
    title: "Gato Gordo",
    description: "\"Los mejores desayunos de la cuadra\", a small restaurant in Hermosillo, Sonora",
    technologies: ["investor", "business", "food"],
    imageUrl: "https://res.cloudinary.com/otfusion/image/upload/v1718600472/otfusion/projects/gatogordocc.png",
    liveUrl: "https://www.instagram.com/gatogordocc/",
    active: true
  },
  {
    title: "Algo asi es vivir en mi cabeza",
    description: "A personal podcast about my life and my thoughts, I am the host and producer",
    technologies: ["podcast", "personal", "producer"],
    imageUrl: "https://res.cloudinary.com/otfusion/image/upload/v1718600472/otfusion/projects/podcast.jpg",
    liveUrl: "https://podcasters.spotify.com/pod/show/algoasiesvivirenmicabeza",
    active: false
  },
  {
    title: "Taller Lobo y Osa",
    description: "A small workshop in Hermosillo, Sonora, I am working as business development in this venture",
    technologies: ["business-dev", "design", "branding"],
    imageUrl: "https://loboyosa.com/assets/characters-B8DLn75m.svg",
    liveUrl: "https://loboyosa.com",
    active: true
  },
  // {
  //   title: "OTFusion Website",
  //   description: "A modern personal website built with React, TypeScript, and Tailwind CSS. Features responsive design, dark mode support, and smooth animations.",
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  //   liveUrl: "https://otfusion.org",
  //   githubUrl: "https://github.com/jmsalcido/otfusion.org",
  //   active: true
  // }
]

export const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project: ProjectCardProps, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          imageUrl={project.imageUrl}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          active={project.active}
        />
      ))}
    </div>
  )
} 