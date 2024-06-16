import React from "react";
import Link from "next/link";
import Image from "next/image";

export const About = () => {
  return (
    <section id={"about"} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My name is José Salcido, a Software Engineer, Entrepreneur, Leader, Coffee Roaster and I dont know what will be my next adventure. With over 10 years of experience in different industries I am very passionate about helping all type of businesses succeed.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="https://jmsalcido.dev"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                See Work Resume
              </Link>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/dv6xqpn21/image/upload/v1718508573/otfusion/ce-bro.jpg"
            width="550"
            height="550"
            alt="Founder"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  )
}