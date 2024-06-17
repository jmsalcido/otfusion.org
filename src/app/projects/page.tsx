import {Header} from "@/components/layout/Header";
import {ProjectCard} from "@/components/projects/ProjectCard";

import fs from 'fs';
import path from 'path';
import {Project} from "@/app/projects/types";

const Page = () => {
  const projectsFilePath = path.join(process.cwd(), 'src/data/projects.json');
  const projectsData = fs.readFileSync(projectsFilePath, 'utf8');
  const projects = JSON.parse(projectsData);

  return (
    <>
      <Header/>
      <main className="flex-1 mx-auto">
        <section className="w-full py-12">
          <div className="container grid gap-6 px-4 md:px-6">
            <div id='header' className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Personal Projects</h2>
                <p className="max-w-[1000px] text-gray-500 md:text-xl dark:text-gray-400">
                  A collection of projects that I have worked on. Some are personal hobbies, other are professional
                  projects.
                </p>
              </div>
            </div>
            <div id='projects' className="mt-1 sm:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((project: Project) => (
                <ProjectCard key={project.title} project={project}/>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;

export const metadata = {
  title: "OTFusion | Projects",
  description: "I have multiple projects that I have worked on. Here are some of them.",
};