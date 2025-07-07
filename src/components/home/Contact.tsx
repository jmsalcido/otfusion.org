export const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 scroll-mt-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white">Contact Me</h2>
            <p className="max-w-[900px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              Have a question or want to work with me? Fill out the form below and I will get back to you as soon as possible.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md sm:max-w-lg space-y-4">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 sm:py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors text-base"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-3 sm:py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors resize-none text-base"
              ></textarea>
              <button className="w-full bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-900/90 dark:hover:bg-gray-50/90 transition-all duration-300 text-base">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 