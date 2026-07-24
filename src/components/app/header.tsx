import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Button } from "../ui/button";
export function Header() {
    const {contextSafe} = useGSAP()
    const handleNavClick = contextSafe((e: React.MouseEvent<HTMLElement>, target: string) => {
        e.preventDefault()
        const smootherCurrent = ScrollSmoother.get()
        if(smootherCurrent){
            smootherCurrent.scrollTo(target, true,'top 56px')
        }
    })
    return (
        <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-2 lg:px-5 h-14 bg-background/60 backdrop-blur-lg">
            <h1 onClick={(e)=>handleNavClick(e,'#hero')} className="lg:text-xl text-lg xl:text-2xl xl:w-1/3 font-space-grotesk font-bold cursor-pointer">Mohamad Abou Hamoud</h1>
            <nav className="hidden lg:flex items-center gap-5">
                <a className="cursor-pointer" onClick={(e) => handleNavClick(e, '#about')} >About</a>
                <a className="cursor-pointer" onClick={(e) => handleNavClick(e, '#projects')} >Projects</a>
                <a className="cursor-pointer" onClick={(e) => handleNavClick(e, '#contact')} >Contact</a>
            </nav>
            <div className="lg:w-1/4 w-fit flex items-center gap-3 justify-end">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="lg:hidden">
                        <Button variant='outline' size='icon' >
                            <Menu className="h-[1.2rem] w-[1.2rem]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <a onClick={(e) => handleNavClick(e, '#about')} >About</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a onClick={(e) => handleNavClick(e, '#projects')} >Projects</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a onClick={(e) => handleNavClick(e, '#contact')} >Contact</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}