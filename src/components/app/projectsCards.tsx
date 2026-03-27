import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import type { Project } from "@/lib/constants";
import { Button } from "../ui/button";

export function ProjectCard({project}: {project: Project}){
    const container = useRef(null)
    const {contextSafe} = useGSAP({scope:container,dependencies:[project]})
    const handleMouseMove = contextSafe((e:React.MouseEvent)=>{
        const imgY = gsap.quickTo('.img','y',{
            duration:.4,
            ease:'power3.out'
        })
            imgY(e.pageY)
        })
    return (
        <div ref={container} onMouseMove={(e)=>handleMouseMove(e)} key={project.name} className="h-32 flex flex-col gap-1 border-b  border-muted relative">
                        <div className="img w-60 rounded-full">
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
    )
}