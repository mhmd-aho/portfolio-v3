import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger)
export function Projects({renderPage,isSoomtherReady}: {renderPage: boolean,isSoomtherReady: boolean}) {
    const container = useRef(null)
    useGSAP(()=>{
      if(!renderPage || !isSoomtherReady) return
      gsap.delayedCall(.1, () => {
      const slides = gsap.utils.toArray('.project')
      gsap.to(slides,{
        xPercent: -100 * (slides.length - 1),
        ease:'none',
        scrollTrigger:{
          trigger:container.current,
          start:'top top',
          scrub:true,
          pin:true,
        //   snap:{
        //     snapTo:1/(slides.length-1),
        //     delay:0,
        //     directional:false,            
        //   }
        }
      })
    })},{scope:container,dependencies:[renderPage,isSoomtherReady]})
    return(
         <section id="projects" ref={container} className="mt-14 w-full flex flex-col gap-5 lg:px-5 px-3 overflow-hidden ">
            <h2 className="lg:text-6xl text-4xl font-semibold">Projects</h2>
            <div className="h-[90vh] w-fit flex flex-nowrap">
                {
                    projects.map((project) => (
                        <div key={project.name} className='project h-full w-screen flex max-lg:flex-col items-start lg:justify-between gap-5 lg:p-5 p-2 group '>
                            <div className="projectInfo flex flex-col lg:gap-2 gap-1">
                                <div className="flex flex-col lg:gap-1">
                                    <h1 className="lg:text-5xl text-2xl font-semibold">{project.name}</h1>
                                    <p className="lg:text-xl text-lg text-muted-foreground">{project.description}</p>
                                </div>
                                <div>
                                    <h2 className="lg:text-4xl text-xl font-semibold">Tools:</h2>
                                    <p className="lg:text-lg text-sm">{project.tools.join(' / ')}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button asChild>
                                        <a href={project.link} target="_blank">View Project</a>
                                    </Button>
                                    <Button asChild variant='outline'>
                                        <a href={project.repo} target="_blank">View Repo</a>
                                    </Button>
                                </div>
                            </div>
                            <div className="projectImage w-3/4 h-full grid grid-cols-2 grid-rows-4 rounded-md overflow-hidden backdrop-blur-sm">
                                <img src={project.image} alt={project.name} className="h-full border rounded-md col-start-1 row-start-1 col-span-2 row-span-2"/>
                                <img src='/src/assets/images.jpg' alt="" className="w-full border rounded-md col-start-2 row-start-2 row-span-2"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}