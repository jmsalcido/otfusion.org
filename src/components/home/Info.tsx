import Link from "next/link";
import React from "react";
import {Button} from "@nextui-org/button";
import Image from "next/image";

export const Info = () => {

  const name = "OTFusion";
  const description = "Just a place for my personal projects";

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{name}</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">{description}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Go to Projects
              </Button>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/dv6xqpn21/image/upload/v1718507949/otfusion/remolino.jpg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}