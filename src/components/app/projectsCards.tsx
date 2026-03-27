import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import type { Project } from "@/lib/constants";
import { Button } from "../ui/button";

export function ProjectCard({project}: {project: Project}){
    const container = useRef<HTMLDivElement>(null)
    const imgY = useRef<gsap.QuickToFunc | null>(null)
    const imgOpacity = useRef<gsap.QuickToFunc | null>(null)

    useGSAP(() => {
        gsap.set('.img', { opacity: 0 });
        imgY.current = gsap.quickTo('.img', 'y', {
            duration: 0.4,
            ease: 'power3.out'
        });

        imgOpacity.current = gsap.quickTo('.img', 'opacity', {
            duration: 0.4,
            ease: 'power3.out'
        });
    }, {scope: container, dependencies:[project]})

    const handleMouseMove = (e:React.MouseEvent)=>{
        if(!imgY.current || !container.current) return;
        const rect = container.current.getBoundingClientRect()
        const y = e.clientY - rect.top - (rect.height / 2)
        imgY.current(y)
    }

    const handleMouseEnter = () => {
        if(imgOpacity.current) imgOpacity.current(1);
    }

    const handleMouseLeave = () => {
        if(imgOpacity.current) imgOpacity.current(0);
        if(imgY.current) imgY.current(0);
    }

    return (
        <div 
            ref={container} 
            onMouseMove={handleMouseMove} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            key={project.name} 
            className="h-52 flex flex-col justify-center lg:gap-3 gap-1 border-b border-muted relative group">
            <div className="img w-96 rounded absolute pointer-events-none right-10 top-1/2 -translate-y-1/2 z-10 overflow-hidden shadow-xl">
                <img src={project.image} alt={project.name} className="pointer-events-none w-full h-full object-cover" />
            </div>
            
            <h1 className="z-20 lg:text-2xl text-xl font-semibold relative">{project.name}</h1>
            <p className="z-20 lg:text-lg text-sm font-medium text-muted-foreground relative">{project.description}</p>
            
            <div className="flex gap-2 flex-wrap z-20 relative mt-1">
                {project.tools.map((tool) => (
                    <span key={tool} className="text-xs bg-muted px-2 py-1 rounded-full">{tool}</span>
                ))}
            </div>
            
            <div className="flex gap-2 z-20 relative mt-1">
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