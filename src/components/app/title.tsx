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
                    lag: index / 10
                })
            }) 
        }
    },{scope: container, dependencies: [renderPage,isSoomtherReady]})
    return (
        <div ref={container} className={`relative ${position}`}>
                <h1 className="title lg:text-9xl text-4xl font-bold lg:tracking-wider absolute inset-0 z-50 ">{children}</h1>
                <h1 className="title lg:text-9xl text-4xl text-transparent [text-stroke:1px_pink] [-webkit-text-stroke:1px_pink] font-bold lg:tracking-wider absolute inset-0 z-40">{children}</h1>
                <h1 className="title lg:text-9xl text-4xl text-transparent [text-stroke:1px_yellow] [-webkit-text-stroke:1px_yellow] font-bold lg:tracking-wider absolute inset-0 z-30">{children}</h1>
                <h1 className="title lg:text-9xl text-4xl text-transparent [text-stroke:1px_blue] [-webkit-text-stroke:1px_blue] font-bold lg:tracking-wider absolute inset-0 z-20">{children}</h1>
                <h1 className="title lg:text-9xl text-4xl text-transparent [text-stroke:1px_black] dark:[text-stroke:1px_white] [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white] font-bold lg:tracking-wider absolute inset-0 z-10">{children}</h1>
        </div>
    )
}