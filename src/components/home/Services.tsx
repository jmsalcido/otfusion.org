import React from "react";
import Image from "@/components/Image";

export const Services = () => {
  return (
    <section id={"services"} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Services</h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I provide a range of services to help your business succeed.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Engineering Manager</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    I can help you build and manage a high-performing engineering team.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Business Strategy</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    I can help you with your business strategy, software architecture, and more.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Consulting</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    As a consultant, I can help you with your business strategy, software architecture, and more.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src="otfusion/coffee.jpg"
            width="550"
            height="310"
            alt="Services"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}