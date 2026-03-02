import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";

export function Projects() {
    return(
         <section id="projects" className="min-h-[calc(100vh-4rem)] mt-14 w-full flex flex-col gap-5 max-lg:gap-5 lg:px-5 px-3 ">
            <h2 className="lg:text-6xl text-4xl font-semibold">Projects</h2>
            <div className="flex-1 flex flex-col items-center lg:gap-24 gap-10">
                {
                    projects.map((project,index) => (
                        <div key={index} className={`lg:w-5xl w-full flex max-lg:flex-col items-center lg:justify-between gap-5 lg:p-5 p-2 rounded-(--radius) shadow group ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} border`}>
                            <div className="flex flex-col lg:gap-2 gap-1 lg:w-1/3 w-full">
                                <div className="flex flex-col lg:gap-1">
                                    <h1 className="lg:text-4xl text-2xl font-semibold">{project.name}</h1>
                                    <p className="text-lg text-muted-foreground">{project.description}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">Tools:</h2>
                                    <p>{project.tools.join(' / ')}</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full relative rounded-md overflow-hidden">
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
                        </div>
                    ))
                }
            </div>
        </section>
    )
}