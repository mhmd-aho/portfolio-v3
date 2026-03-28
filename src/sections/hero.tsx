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
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const handleIcon =(contact:Contact)=>{
            const useLightIcon = theme === 'dark'|| theme === 'system' && isSystemDark
            if(typeof contact.icon === 'string' ){
                return <img src={useLightIcon ? contact.icon : contact.iconLight} alt={contact.name} className="size-5"/>
            }else{
                return <contact.icon className="size-5"/>
            }
        }
    const heroContacts =  contacts.filter((contact) => contact.media).slice(0,4)
    return (
        <section id="hero" ref={container} className="h-[calc(100vh-3.5rem)] w-full overflow-x-hidden grid grid-cols-4 lg:grid-rows-6 grid-rows-8 lg:px-5 px-3 pt-14 overflow-hidden">
            <Title renderPage={renderPage} isSoomtherReady={isSoomtherReady} position="col-span-2 col-start-1 lg:row-start-2 row-start-1">Full-stack</Title>
            <Title renderPage={renderPage} isSoomtherReady={isSoomtherReady} position="col-span-2 col-start-3 lg:row-start-3 row-start-2">Developer</Title>
            <div className="bttn lg:col-start-3 col-start-1 col-span-2 lg:self-end self-start lg:mx-auto lg:w-1/2 lg:row-start-2 row-start-6 ">
                <Button asChild className="w-full h-full rounded-full group text-xl">
                    <a className="w-full h-full flex items-center justify-center" onClick={e=>{
                        e.preventDefault()
                        const smootherCurrent = ScrollSmoother.get()
                        if(smootherCurrent){
                            smootherCurrent.scrollTo('#projects', true,'top 56px')
                        }
                    }}>
                        Projects
                        <ArrowRight className="w-6 h-6 ml-2 transition-all duration-300 group-hover:translate-x-3" />
                    </a>
                </Button>

            </div>
            <p className="intro lg:text-2xl text-lg col-start-1 lg:col-span-2 col-span-4 row-start-3 row-span-2 lg:pt-3 lg:leading-relaxed">
                Full-Stack Developer crafting fast, scalable, and visually striking <br/>web applications. I transform complex ideas into seamless digital experiences that perform in the real world.
            </p>
            <div className="lg:col-start-2 col-start-1 lg:col-span-2 col-span-4 lg:row-start-5 row-start-7 flex items-center justify-between max-lg:justify-around">
                {
                    heroContacts.map((contact) => {
                        return (
                            <div key={contact.name}>
                                <Button asChild variant='outline' size={isMobile ? 'icon' : 'default'} className="rounded-full w-32 max-lg:size-10 max-lg:gap-1">
                                    <a href={contact.link} target="_blank">
                                        {handleIcon(contact)}
                                        <span className="max-lg:hidden">{contact.name}</span>
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