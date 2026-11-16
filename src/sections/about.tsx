import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { backEnd, frontEnd, tools } from "@/lib/constants";
import GithubSection from "@/components/app/githubSection";
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
        const paraSplit = new SplitText(".para", {
            type: "lines",
            mask: 'lines'
        })
        const titleSplit = new SplitText(".title", {
            type: "lines",
            mask: 'lines'
        })
        gsap.from(titleSplit.lines, {
            y:200,
            stagger: .2,
            ease:'none',
            scrollTrigger: {
                trigger: '.title',
                start: "-40px bottom",
                end: "+=200px",
                scrub: true,
            }
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
        const skills = gsap.utils.toArray('.skill')
        skills.forEach((skill)=>{
            gsap.from((skill as HTMLElement).querySelectorAll('.skillBlock'),{
                opacity:1,
                stagger: .2,
                ease:'none',
                scrollTrigger: {
                    trigger: skill as HTMLElement,
                    start: "+30px bottom",
                    end: "+=200px",
                    scrub: true,
                }
            })
            gsap.from((skill as HTMLElement).querySelectorAll('.skillWord'),{
                yPercent:100,
                stagger: .2,
                ease:'none',
                scrollTrigger: {
                    trigger: skill as HTMLElement,
                    start: "top bottom",
                    end: "+=200px",
                    scrub: true,
                }
            })
        })
    }, {scope: container,dependencies: [renderPage,isSoomtherReady]})
    return (
        <section ref={container} id="about" className="min-h-screen w-full flex flex-col gap-8 lg:gap-12 lg:px-5 px-3 pt-5 pb-12">
            <h2 className="title lg:text-6xl text-4xl font-semibold font-space-grotesk lg:h-20 h-14 overflow-hidden">About me</h2>
            <div className="flex-1 flex flex-col items-center sm:justify-between gap-5 lg:gap-12">
                <p className="lg:text-6xl text-3xl para text-center">Hey i’m Mohamad a full-stack developer from lebanon</p>
                <div className="flex flex-col justify-center self-start gap-4 lg:w-3/4 w-full">
                    <Item variant='outline' className="w-full skill">
                        <ItemHeader>
                            <ItemTitle className="text-xl font-space-grotesk">Front-end</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            <div className="flex flex-wrap justify-start items-start gap-1">
                            {
                             frontEnd.map((item,i) => {
                                 return (
                                     <React.Fragment key={`${item}-${i}`}>
                                         <div className="flex items-center gap-1 overflow-hidden relative">
                                             <div className="skillBlock w-full h-full bg-accent absolute top-0 left-0 rounded-lg opacity-0"/>
                                             <p className="skillWord"> {item} </p>
                                         </div>
                                         {i < frontEnd.length - 1 && <p>/</p>}
                                     </React.Fragment>
                                 )
                             })
                            }
                            </div>
                        </ItemContent>
                    </Item>
                    <Item variant='muted' className="sm:w-3/4 w-full skill">
                        <ItemHeader>
                            <ItemTitle className="text-xl font-space-grotesk">Back-end</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            <div className="flex flex-wrap justify-start items-start gap-1">
                            {
                             backEnd.map((item,i) => {
                                 return (
                                     <React.Fragment key={`${item}-${i}`}>
                                         <div className="flex items-center gap-1 overflow-hidden relative">
                                             <div className="skillBlock w-full h-full bg-accent absolute top-0 left-0 rounded-lg opacity-0"/>
                                             <p className="skillWord"> {item} </p>
                                         </div>
                                         {i < backEnd.length - 1 && <p>/</p>}
                                     </React.Fragment>
                                 )
                             })
                            }
                            </div>
                        </ItemContent>
                    </Item>
                    <Item variant='outline' className="w-full skill">
                        <ItemHeader>
                            <ItemTitle className="text-xl font-space-grotesk">Tools</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            <div className="flex flex-wrap justify-start items-start gap-1">
                            {
                             tools.map((item,i) => {
                                 return (
                                     <React.Fragment key={`${item}-${i}`}>
                                         <div className="flex items-center gap-1 overflow-hidden relative">
                                             <div className="skillBlock w-full h-full bg-background absolute top-0 left-0 rounded-lg opacity-0"/>
                                             <p className="skillWord"> {item} </p>
                                         </div>
                                         {i < tools.length - 1 && <p>/</p>}
                                     </React.Fragment>
                                 )
                             })
                            }
                            </div>
                        </ItemContent>
                    </Item>
                </div>
            </div>
        </section>
    )
}