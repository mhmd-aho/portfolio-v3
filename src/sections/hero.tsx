import { Button } from "@/components/ui/button";
import { contacts } from "@/lib/constants";
import { ArrowRight } from "lucide-react";


export function Hero() {
    const heroContacts =  contacts.filter((contact) => contact.hero)
    return (
        <section className="h-[calc(100vh-3.5rem)] w-screen grid grid-cols-4 lg:grid-rows-6 grid-rows-8 px-2 lg:px-5 mt-14">
            <h1 className="lg:text-9xl text-6xl font-bold lg:tracking-widest tracking-wide lg:col-span-2 col-span-3 col-start-1 row-start-2">Full-stack</h1>
            <h1 className="lg:text-9xl text-6xl font-bold lg:tracking-widest tracking-wide lg:col-span-2 col-span-3 lg:col-start-3 col-start-2 row-start-3">Developer</h1>
            <Button className="rounded-full group lg:col-start-3 col-start-1 col-span-2 lg:self-end self-start lg:mx-auto lg:w-1/2 lg:row-start-2 row-start-6 text-xl">
                Projects
                <ArrowRight className="w-6 h-6 ml-2 transition-all duration-300 group-hover:translate-x-3" />
            </Button>
            <p className="lg:text-2xl text-lg col-start-1 lg:col-span-2 col-span-4 lg:row-start-3 row-start-4 row-span-2 lg:pt-3 lg:leading-relaxed">
                Full-Stack Developer crafting fast, scalable, and visually striking <br/>web applications. I transform complex ideas into seamless digital experiences that perform in the real world.
            </p>
            <div className="lg:col-start-2 col-start-1 lg:col-span-2 col-span-4 lg:row-start-5 row-start-7 flex items-center justify-between">
                {
                    heroContacts.map((contact) => (
                        <Button key={contact.name} variant='outline' className="rounded-full lg:w-32 w-24 max-lg:gap-1">
                        <contact.icon />
                        {contact.name}
                        </Button>
                    ))
                }
            </div>
        </section>
    )
}