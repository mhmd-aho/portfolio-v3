import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import type { Project } from "@/lib/constants";
import { Button } from "../ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger,ScrollSmoother)

export function ProjectCard({project,renderPage,isSoomtherReady}: {project: Project,renderPage: boolean,isSoomtherReady: boolean}){
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
        const media = gsap.matchMedia()
        media.add("(max-width: 1024px)", () => {
            const smooth = ScrollSmoother.get()
            if(!smooth) return
            smooth.effects('.pic', {
                speed: 'auto',
            })
            ScrollTrigger.create({
                trigger: container.current,
                start: 'top center',
                end: '+=210px',
                scrub: 1,
                onEnter: () => gsap.set('.img', { opacity: 1 }),
                onLeave: () => gsap.set('.img', { opacity: 0 }),
                onEnterBack: () => gsap.set('.img', { opacity: 1 }),
                onLeaveBack: () => gsap.set('.img', { opacity: 0 })
            });
        })
    }, {scope: container, dependencies:[renderPage,isSoomtherReady]})

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
            className="h-52 pl-4 flex flex-col justify-center lg:gap-3 gap-1 border-b border-muted relative group">
            <div className="img lg:w-96 w-full h-full rounded absolute max-lg:inset-0 lg:right-10 pointer-events-none  overflow-hidden lg:shadow-xl">
                <img src={project.image} alt={project.name} className="pointer-events-none w-full lg:h-full h-[150%] object-cover pic max-lg:opacity-50" />
            </div>
            
            <h1 className="z-20 lg:text-2xl text-xl font-semibold relative">{project.name}</h1>
            <p className="z-20 lg:text-lg text-sm font-medium text-muted-foreground relative">{project.description}</p>
            
            <div className="flex gap-2 flex-wrap z-20 relative mt-1">
                {project.tools.join(' / ')}
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