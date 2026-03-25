import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP)
export function Projects(){
    const container = useRef(null)
    return (
        <section ref={container} id="projects" className="min-h-[calc(100vh-4rem)] w-full flex flex-col max-lg:gap-5 lg:px-5 px-3 ">
            <h2 className="lg:text-6xl text-4xl font-semibold">Projects</h2>
            <div className="flex flex-col">
                {projects.map((project) => (
                    <div key={project.name} className="h-32 flex flex-col gap-1 border-b  border-muted relative group">
                        <div className="img group-hover:visible invisible w-60 absolute top-1/2 right-0 translate-y-1/2 rounded-full">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                        <div className="flex gap-2">
                            {project.tools.map((tool) => (
                                <span key={tool} className="text-xs bg-muted px-2 py-1 rounded-full">{tool}</span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <Button asChild>
                                <a href={project.link} target="_blank">View</a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href={project.repo} target="_blank">Repo</a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}