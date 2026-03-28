import { ProjectCard } from "@/components/app/projectsCards";
import { projects } from "@/lib/constants";

export function Projects(){
    return (
        <section id="projects" className="min-h-[calc(100vh-4rem)] w-full flex flex-col max-lg:gap-5 lg:px-5 px-3 pt-5">
            <h2 className="lg:text-6xl text-4xl font-semibold">Projects</h2>
            <div className="flex flex-col">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project}/>
                ))}
            </div>
        </section>
    )
}