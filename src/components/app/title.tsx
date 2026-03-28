import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export function Title({children,position,renderPage,isSoomtherReady}: {children: React.ReactNode,position: string,renderPage: boolean,isSoomtherReady: boolean}) {
    const container = useRef(null)
    useGSAP(() => {
        if(!renderPage || !isSoomtherReady) return
        const smoother = ScrollSmoother.get()
        if(smoother){
            const title = gsap.utils.toArray('.title')
            title.forEach((items,index)=>{
                smoother.effects(items as HTMLElement, {
                    lag: index / 10,
                })
            }) 
        }
    },{scope: container, dependencies: [renderPage,isSoomtherReady]})
    return (
        <div ref={container} className={`relative w-full h-full ${position}`}>
                <h1 className="title xl:text-9xl lg:text-7xl md:text-6xl text-3xl font-bold lg:tracking-wider absolute inset-0 z-40 ">{children}</h1>
                <h1 className="title xl:text-9xl lg:text-7xl md:text-6xl text-3xl text-transparent [text-stroke:1px_#1b4332] [-webkit-text-stroke:1px_#1b4332] font-bold lg:tracking-wider absolute inset-0 z-30">{children}</h1>
                <h1 className="title xl:text-9xl lg:text-7xl md:text-6xl text-3xl text-transparent [text-stroke:1px_#2d6a4f] [-webkit-text-stroke:1px_#2d6a4f] font-bold lg:tracking-wider absolute inset-0 z-20">{children}</h1>
                <h1 className="title xl:text-9xl lg:text-7xl md:text-6xl text-3xl text-transparent [text-stroke:1px_#40916c] [-webkit-text-stroke:1px_#40916c] font-bold lg:tracking-wider absolute inset-0 z-10">{children}</h1>
                <h1 className="title xl:text-9xl lg:text-7xl md:text-6xl text-3xl text-transparent [text-stroke:1px_#52b788] [-webkit-text-stroke:1px_#52b788] font-bold lg:tracking-wider absolute inset-0 z-0">{children}</h1>
        </div>
    )
}