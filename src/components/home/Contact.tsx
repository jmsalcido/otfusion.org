import React from "react";
import {ContactForm} from "@/components/home/ContactForm";

export const Contact = () => {
  return (
    <section id={"contact"} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or want to work with me? Fill out the form below and I will get back to you as soon as
              possible.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}