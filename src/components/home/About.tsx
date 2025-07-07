export const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 scroll-mt-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white">About Me</h2>
              <p className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                My name is José Salcido, a Software Engineer, Entrepreneur, Leader, Coffee Roaster and I dont know what will be my next adventure. With over 10 years of experience in different industries I am very passionate about helping all type of businesses succeed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://jmsalcido.dev"
                className="inline-flex h-12 sm:h-10 items-center justify-center rounded-md bg-gray-900 dark:bg-gray-50 px-6 sm:px-8 text-sm font-medium text-gray-50 dark:text-gray-900 shadow transition-colors hover:bg-gray-900/90 dark:hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
              >
                See Work Resume
              </a>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 w-full max-w-md lg:order-last lg:aspect-square lg:max-w-none flex items-center justify-center">
            <div className="text-gray-400 dark:text-gray-500 text-center p-4">
              <svg className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-sm sm:text-base">About Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 