import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { backEnd, frontEnd, tools } from "@/lib/constants";
import { FileImage } from "lucide-react";

export function About() {
    return (
        <section id="about" className="min-h-[calc(100vh-4rem)] w-full flex flex-col max-lg:gap-5 lg:px-5 px-3 ">
            <div className="flex max-lg:flex-col lg:items-center lg:justify-between gap-3">
                <h2 className="lg:text-6xl text-4xl font-semibold">About me</h2>
                <p className="lg:text-2xl text-lg">Hey i’m Mohamad a <span className="font-semibold">full-stack developer</span><br/> from lebanon</p>
            </div>
            <div className="flex-1 flex max-lg:flex-col-reverse max-lg:gap-3 items-center justify-between">
                <div className="h-full flex flex-col justify-center gap-5 lg:w-1/2 w-full">
                    <Item variant='outline' className="w-full">
                        <ItemHeader>
                            <ItemTitle className="text-xl">Front-end</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            {
                                frontEnd.join(' / ')
                            }
                        </ItemContent>
                    </Item>
                    <Item variant='muted' className="lg:w-1/2 w-full">
                        <ItemHeader>
                            <ItemTitle className="text-xl">Tools</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            {
                                tools.join(' / ')
                            }
                        </ItemContent>
                    </Item>
                    <Item variant='outline' className="w-full">
                        <ItemHeader>
                            <ItemTitle className="text-xl">Back-end</ItemTitle>
                        </ItemHeader>
                        <ItemContent className="text-lg">
                            {
                                backEnd.join(' / ')
                            }
                        </ItemContent>
                    </Item>
                </div>
                <div/>
                <FileImage className="size-50"/>
            </div>
        </section>
    )
}