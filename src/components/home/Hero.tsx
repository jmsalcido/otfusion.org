import { Link } from 'react-router-dom'

interface HeroProps {
  isVisible: boolean
}

export const Hero = ({ isVisible }: HeroProps) => {
  return (
    <section id="home" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
                  <span className="inline-block mr-2 sm:mr-4">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
                      <path fill="currentColor" className="text-gray-900 dark:text-white"
                            d="M262.97 19.438c-3.533.036-7.074.17-10.595.375 37.426 5.91 74.12 23.423 102.188 49.624-55.762-26.124-129.46-27.253-186.875-3.5 10.37-9.73 21.777-17.51 33.875-23.343C48.768 80.06-6.44 197.116 56.72 343.938c-16.45-26.78-29.106-55.588-35.626-84.688-5.23 74.055 32.02 134.952 102.47 197.406.06.063.124.126.186.188 12.107 12.125 24.238 22.045 32.875 27.03 64.588 37.292 121.345-63.365 57.78-100.062-11.465-6.62-33.518-14.218-56.56-18.875-76.657-36.295-93.91-155.886-20.282-240.687-6.654 16.82-11.594 34.836-14.844 53.375 76.21-134.99 312.3-129.124 324.124 72.063-10.722-61.622-53.708-113.837-121.03-135.344 56.69 23.942 96.28 79.752 96.28 145.25 0 94.252-72.826 148.403-154.594 165.625 42.582 2.34 94.684-13.826 125.438-36.314-23.357 39.58-72.146 67.082-123.25 81.594 72.736-2.804 136.515-41.146 175.406-97.375-10.316 11.652-22.718 22.04-36.78 30.97 46.54-55.267 70.795-137.97 61.31-210.25 8.428 16.284 13.583 33.51 15.782 51.374C485.26 97.63 372.46 18.3 262.97 19.437z"/>
                    </svg>
                  </span>
                  OTFusion
                </h1>
                <p className="max-w-[600px] text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                  A place for personal experiments.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  to="/projects"
                  className="inline-flex h-12 sm:h-10 items-center justify-center rounded-md bg-gray-900 dark:bg-gray-50 px-6 sm:px-8 text-sm font-medium text-gray-50 dark:text-gray-900 shadow transition-colors hover:bg-gray-900/90 dark:hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
                >
                  Go to Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 w-full max-w-md lg:order-last lg:aspect-square lg:max-w-none flex items-center justify-center">
            <div className="text-gray-400 dark:text-gray-500 text-center p-4">
              <svg className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm sm:text-base">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 