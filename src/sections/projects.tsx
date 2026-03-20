import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger)
export function Projects() {
    const container = useRef(null)
    const pin = useRef(null)
    useGSAP(() => {
        const projects = gsap.utils.toArray('.project')
        gsap.set('.projectImage',{
            clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)',
            autoAlpha: 0
        })
        gsap.set('.projectInfo',{
            autoAlpha: 0,
            y: 0
        })
        projects.forEach((project,i)=>{
            gsap.to(project,{
                scale: 0.8 + 0.2 * (i / (projects.length - 1)),
                ease: 'none',
                scrollTrigger: {
                    trigger: project,
                    start: 'top' +  (15 + 35 * i),
                    end: 'bottom bottom',
                    endTrigger: pin.current,
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                    invalidateOnRefresh: true
                }
            })
        })
    }, {scope: container})
    return(
         <section id="projects" ref={container} className="mt-14 w-full flex flex-col gap-5 max-lg:gap-5 lg:px-5 px-3 ">
            <h2 className="lg:text-6xl text-4xl font-semibold">Projects</h2>
            <div ref={pin} className="relative h-[90vh] w-full overflow-hidden">
                {
                    projects.map((project) => (
                        <div key={project.name} className='project h-[500px] w-3/4 bg-background flex flex-col items-center lg:justify-between gap-5 lg:p-5 p-2 rounded-(--radius) shadow group border '>
                            <div className="projectImage w-full relative rounded-md overflow-hidden">
                                <img src={project.image} alt={project.name} className="w-full"/>
                                <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full backdrop-blur-2xl justify-center items-center gap-2">
                                    <Button  asChild size='lg'>
                                        <a target="_blank" href={project.link}>Live</a>
                                    </Button>
                                    <Button variant='outline' asChild size='lg'>
                                        <a target="_blank" href={project.repo}>Repo</a>
                                    </Button>
                                </div>
                            </div>
                            <div className="projectInfo flex flex-col lg:gap-2 gap-1 w-full">
                                <div className="flex flex-col lg:gap-1">
                                    <h1 className="lg:text-4xl text-2xl font-semibold">{project.name}</h1>
                                    <p className="text-lg text-muted-foreground">{project.description}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">Tools:</h2>
                                    <p>{project.tools.join(' / ')}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}