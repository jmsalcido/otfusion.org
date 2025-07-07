import { Header, Footer } from '../components'
import { ProjectsGrid } from '../components/projects/ProjectsGrid'

export const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-1 pt-32">
        <section className="py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A collection of projects I've worked on, showcasing my skills in software development, 
                engineering management, and business strategy.
              </p>
            </div>
            <ProjectsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 