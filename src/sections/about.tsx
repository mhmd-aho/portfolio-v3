import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { backEnd, frontEnd, tools } from "@/lib/constants";
import pic from '@/assets/my-pic.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import React from "react";
gsap.registerPlugin(useGSAP, SplitText)
export function About({renderPage,isSoomtherReady}: {renderPage: boolean,isSoomtherReady: boolean}) {
    const container = useRef(null)
    useGSAP(() => {
        if(!renderPage || !isSoomtherReady) return
        gsap.delayedCall(.1, () => {
        const paraSplit = new SplitText(".para", {
            type: "lines",
            mask: 'lines'
        })
        gsap.from(paraSplit.lines, {
            y:200,
            stagger: .2,
            ease:'none',
            scrollTrigger: {
                trigger: '.para',
                start: "-40px bottom",
                end: "+=200px",
                scrub: true,
            }
        })
        gsap.from('.frontEndBlock',{
            opacity:1,
            stagger: .2,
            ease:'none',
            scrollTrigger: {
                trigger: '.frontEnd',
                start: "+30px bottom",
                end: "+=200px",
                scrub: true,
            }
        })
        gsap.from('.frontEndWord',{
            y:200,
            stagger: .2,
            ease:'none',
            scrollTrigger: {
                trigger: '.frontEnd',
                start: "+30px bottom",
                end: "+=200px",
                scrub: true,
            }
        })
         gsap.from('.toolsBlock',{
            opacity:1,
            stagger: .2,
            ease:'none',
            scrollTrigger: {
                trigger: '.tools',
                start: "+30px bottom",
                end: "+=200px",
                scrub: true,
            }
        })
        gsap.from('.toolsWord',{
            y:200,
            stagger: .2,
            ease:'none',
            scrollTrigger: {
                trigger: '.tools',
                start: "+30px bottom",
                end: "+=200px",
                scrub: true,
            }
        })
         gsap.from('.backEndBlock',{
            opacity:1,
            stagger: .2,
            ease:'none',
            scrollTrigger: {
                trigger: '.backEnd',
                start: "+30px bottom",
                end: "+=200px",
                scrub: true,
            }
        })
        gsap.from('.backEndWord',{
            y:200,
            stagger: .2,
            ease:'none',
            scrollTrigger: {
                trigger: '.backEnd',
                start: "+30px bottom",
                end: "+=200px",
                scrub: true,
            }
        })
    }
)}, {scope: container,dependencies: [renderPage,isSoomtherReady]})
    return (
        <section ref={container} id="about" className="min-h-[calc(100vh-4rem)] w-full flex flex-col max-lg:gap-5 lg:px-5 px-3 ">
            <div className="flex max-lg:flex-col lg:items-center lg:justify-between gap-3">
                <h2 className="lg:text-6xl text-4xl font-semibold">About me</h2>
                <p className="lg:text-2xl text-lg para">Hey i’m Mohamad a <span className="font-semibold">full-stack developer</span><br/> from lebanon</p>
            </div>
            <div className="flex-1 flex max-lg:flex-col-reverse max-lg:gap-3 items-center justify-between">
                <div className="h-full flex flex-col justify-center gap-5 lg:w-1/2 w-full">
                    <Item variant='outline' className="w-full frontEnd">
                        <ItemHeader>
                            <ItemTitle className="text-xl">Front-end</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            <div className="flex flex-wrap justify-start items-start gap-1">
                           {
                            frontEnd.map((item,i) => {
                                return (
                                    <React.Fragment key={`${item}-${i}`}>
                                        <div className="flex items-center gap-1 overflow-hidden relative">
                                            <div className="frontEndBlock w-full h-full bg-accent absolute top-0 left-0 rounded-lg opacity-0"/>
                                            <p className="frontEndWord"> {item} </p>
                                        </div>
                                        {i < frontEnd.length - 1 && <p>/</p>}
                                    </React.Fragment>
                                )
                            })
                           }
                           </div>
                        </ItemContent>
                    </Item>
                    <Item variant='muted' className="lg:w-1/2 w-full tools">
                        <ItemHeader>
                            <ItemTitle className="text-xl">Tools</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            <div className="flex flex-wrap justify-start items-start gap-1">
                            {
                            tools.map((item,i) => {
                                return (
                                    <React.Fragment key={`${item}-${i}`}>
                                        <div className="flex items-center gap-1 overflow-hidden relative">
                                            <div className="toolsBlock w-full h-full bg-background absolute top-0 left-0 rounded-lg opacity-0"/>
                                            <p className="toolsWord"> {item} </p>
                                        </div>
                                        {i < tools.length - 1 && <p>/</p>}
                                    </React.Fragment>
                                )
                            })
                           }
                           </div>
                        </ItemContent>
                    </Item>
                    <Item variant='outline' className="w-full backEnd">
                        <ItemHeader>
                            <ItemTitle className="text-xl">Back-end</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            <div className="flex flex-wrap justify-start items-start gap-1">
                            {
                            backEnd.map((item,i) => {
                                return (
                                    <React.Fragment key={`${item}-${i}`}>
                                        <div className="flex items-center gap-1 overflow-hidden relative">
                                            <div className="backEndBlock w-full h-full bg-accent absolute top-0 left-0 rounded-lg opacity-0"/>
                                            <p className="backEndWord"> {item} </p>
                                        </div>
                                        {i < backEnd.length - 1 && <p>/</p>}
                                    </React.Fragment>
                                )
                            })
                           }
                           </div>
                        </ItemContent>
                    </Item>
                </div>
                <div/>
                <div className="w-96 h-96 overflow-hidden relative">
                    <img src={pic} alt='my pic' className="absolute h-[150%]" data-speed="auto" />
                </div>
            </div>
        </section>
    )
}