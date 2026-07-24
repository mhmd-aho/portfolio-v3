import { useTheme } from "@/components/app/theme-provider";
import { Button } from "@/components/ui/button";
import { contacts, type Contact } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import { Title } from "@/components/app/title";
gsap.registerPlugin(useGSAP, SplitText, ScrollSmoother)
export function Hero({renderPage,isSoomtherReady}: {renderPage: boolean,isSoomtherReady: boolean}) {
    const container = useRef(null)
    const {theme} = useTheme()
    const [isMobile,setIsMobile] = useState(window.innerWidth < 768)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const handleIcon =(contact:Contact)=>{
            const useLightIcon = theme === 'dark'
            if(typeof contact.icon === 'string' ){
                return <img src={useLightIcon ? contact.icon : contact.iconLight} alt={contact.name} className="size-5"/>
            }else{
                return <contact.icon className="size-5"/>
            }
        }
    const heroContacts =  contacts.filter((contact) => contact.media).slice(0,4)
    return (
        <section id="hero" ref={container} className="min-h-screen w-full overflow-x-hidden grid grid-cols-4 lg:grid-rows-5 grid-rows-7 lg:px-5 px-3 pt-16 overflow-hidden relative">
            <Title renderPage={renderPage} isSoomtherReady={isSoomtherReady} position="col-span-3 lg:col-span-2  col-start-1 lg:row-start-2 row-start-1">Full-stack</Title>
            <Title renderPage={renderPage} isSoomtherReady={isSoomtherReady} position="col-span-2 col-start-3 lg:row-start-3 row-start-2">Developer</Title>
            <Button onClick={e=>{e.preventDefault();const smootherCurrent = ScrollSmoother.get();if(smootherCurrent){smootherCurrent.scrollTo('#projects', true,'top 56px')}}} className="lg:col-start-3 col-start-1 col-span-2 lg:self-end self-start lg:mx-auto lg:w-1/2 lg:row-start-2 md:row-start-5 row-start-6 rounded-full group z-40">
                Projects
                <ArrowRight className="size-5 ml-2 transition-all duration-300 group-hover:translate-x-3" />
            </Button>
            <p className="intro lg:text-2xl text-lg col-start-1 lg:col-span-2 col-span-4 row-start-3 row-span-2 lg:pt-3 lg:leading-relaxed">
                Full-Stack Developer crafting fast, scalable, and visually striking <br/>web applications. I transform complex ideas into seamless digital experiences that perform in the real world.
            </p>
            <div className="col-start-1  col-span-4 lg:row-start-5 md:row-start-6 row-start-7 flex items-center justify-around">
                {
                    heroContacts.map((contact) => {
                        return (
                            <div key={contact.name}>
                                <Button asChild variant='outline' size={isMobile ? 'icon' : 'default'} className="rounded-full w-32 max-md:size-10 max-md:gap-1">
                                    <a href={contact.link} target="_blank">
                                        {handleIcon(contact)}
                                        <span className="max-md:hidden">{contact.name}</span>
                                    </a>
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}