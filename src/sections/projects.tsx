import { ProjectCard } from "@/components/app/projectsCards";
import { projects } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger)
export function Projects({renderPage,isSoomtherReady}: {renderPage: boolean,isSoomtherReady: boolean}){
    const container = useRef(null)
    useGSAP(()=>{
        const titleSplit = SplitText.create(".title", {
            type: "chars",
        })
        gsap.from(titleSplit.chars, {
            yPercent:-100,
            stagger: .2,
            ease:'bounce',
            scrollTrigger: {
                trigger: '.title',
                start: "-40px bottom",
                end: "+=200px",
            }
        })
    }, {scope: container,dependencies: [renderPage,isSoomtherReady]})
    return (
        <section id="projects" ref={container} className="min-h-screen w-full flex flex-col max-lg:gap-5 lg:px-5 px-0 pt-5">
            <h2 className="lg:text-6xl text-4xl font-semibold font-space-grotesk max-lg:px-3 overflow-hidden lg:h-20 h-14 title">Projects</h2>
            <div className="flex flex-col">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} renderPage={renderPage} isSoomtherReady={isSoomtherReady}/>
                ))}
            </div>
        </section>
    )
}