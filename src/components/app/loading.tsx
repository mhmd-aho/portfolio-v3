import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef } from "react";
gsap.registerPlugin(ScrambleTextPlugin)
export function Loading({isLoaded, setRenderPage}: {isLoaded: boolean, setRenderPage: (value: boolean) => void}) {
    const container = useRef(null)
    useGSAP(() => {
       gsap.to(".scrambleText", {
        scrambleText: {
            text: "WELCOME TO MOHAMAD ABO HAMOUD PORTFOLIO",
            chars: "XO",
            revealDelay: isLoaded ? 0 : 10,
            
        },
        repeat: isLoaded ? 0 : -1,
        yoyo: true,
        duration: 3,
        onComplete: () => {
            setRenderPage(true)
        }
    })
       
    }, {scope: container, dependencies: [isLoaded]})
    return (
        <div className='h-screen w-screen flex justify-center items-center font-default' ref={container}>
            <h1 className="text-5xl font-bold scrambleText">WELCOME TO MOHAMAD ABO HAMOUD PORTFOLIO</h1>
        </div>
    )
}