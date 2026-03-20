import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect, useRef } from "react";
import { usePageReady } from "@/hooks/usePageReady";
gsap.registerPlugin(ScrambleTextPlugin)
export function Loading({setRenderPage}: {setRenderPage: (value: boolean) => void}) {
    const isLoaded = usePageReady()
    const container = useRef(null)
    const tl = useRef<gsap.core.Timeline>(null)
    useEffect(() => {
        if(isLoaded && tl.current){
            tl.current.play()
        }
    }, [isLoaded])
    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true })
       tl.current.to(".scrambleText", {
        scrambleText: {
            text: "WELCOME TO MOHAMAD ABO HAMOUD PORTFOLIO",
            chars: "XO",
            
        },
        duration: 3,
        
    })
    tl.current.to('.scrambleText',{
        opacity: 0,
    })
        tl.current.to('.left',{
            x: '-100%',
            ease: 'power2.in',
            stagger:{
                each: .1,
                from: 'end'
            }
        })
        tl.current.to('.right',{
            x: '100%',
            ease: 'power2.in',
            stagger:{
                each: .1,
                from: 'end'
            }
        },'<')
        tl.current.to(container.current,{
            opacity: 0,
            ease: 'power2.in',
            onComplete: () => {
                setRenderPage(true)
            }
        })
        
    }, {scope: container})
    return (
        <div className='h-screen w-full fixed inset-0 grid grid-cols-2 grid-rows-3 z-50 font-default overflow-hidden' ref={container}>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-background text-4xl font-bold w-full text-center scrambleText font-default">WELCOME TO MOHAMAD ABO HAMOUD PORTFOLIO</h1>
            <div className="bg-foreground col-start-1 row-start-1 left"/>
            <div className="bg-foreground col-start-1 row-start-2 left"/>
            <div className="bg-foreground col-start-1 row-start-3 left"/>
            <div className="bg-foreground col-start-2 row-start-1 right"/>
            <div className="bg-foreground col-start-2 row-start-2 right"/>
            <div className="bg-foreground col-start-2 row-start-3 right"/>
        </div>
    )
}