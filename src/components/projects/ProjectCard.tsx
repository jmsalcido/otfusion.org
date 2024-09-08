import React from "react";
import {Project} from "@/app/projects/types";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import Link from "next/link";
import {Chip} from "@nextui-org/chip";
import Image from "@/components/Image";

interface Props {
  project: Project;
}

export const ProjectCard = (props: Props) => {
  const {project} = props;
  return (
    <Card className="relative overflow-hidden rounded-lg group">
      <Link href={project.url} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View Project</span>
      </Link>
      <CardBody className="p-0 overflow-hidden h-60">
        <Image
          src={project.image}
          alt={project.imageDescription}
          width={400}
          height={300}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </CardBody>
      <CardFooter className="flex flex-col p-4 bg-white dark:bg-gray-950 h-48 justify-between">
        <div>
          <h3 className="text-lg font-semibold md:text-xl mb-2 text-center">{project.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow text-center">{project.description}</p>
        </div>
        <div className={'flex flex-row flex-wrap'}>
          {project.tags.map((tag) => (
            <Chip key={tag} className="mx-1 mt-2" color="default">{tag}</Chip>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}