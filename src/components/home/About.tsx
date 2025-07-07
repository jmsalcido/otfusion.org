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
          <div className="mx-auto aspect-video overflow-hidden rounded-xl w-full max-w-md lg:order-last lg:aspect-square lg:max-w-none">
            <img
              src="https://res.cloudinary.com/otfusion/image/upload/v1/otfusion/ce-bro.jpg"
              alt="José Salcido - Software Engineer and Entrepreneur"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 