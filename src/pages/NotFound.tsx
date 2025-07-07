import { Link } from 'react-router-dom'
import { Header, Footer } from '../components'
import notFoundImage from '../assets/404.png'

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <section className="py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <img 
                src={notFoundImage} 
                alt="404 illustration" 
                className="mx-auto mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-gray-300 dark:text-gray-700 mb-4">
                404
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Page Not Found
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Go Home
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                View Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 