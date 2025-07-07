export const Services = () => {
  return (
    <section id="services" className="py-12 md:py-24 lg:py-32 scroll-mt-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white">Services</h2>
            <p className="max-w-[900px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              I provide a range of services to help your business succeed.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:gap-12 py-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Engineering Manager</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    I can help you build and manage a high-performing engineering team.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Business Strategy</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    I can help you with your business strategy, software architecture, and more.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Consulting</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    As a consultant, I can help you with your business strategy, software architecture, and more.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 w-full max-w-md lg:order-last lg:max-w-none flex items-center justify-center">
            <div className="text-gray-400 dark:text-gray-500 text-center p-4">
              <svg className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm sm:text-base">Services Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 