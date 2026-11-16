import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Button } from "../ui/button";
import Mo from "../ui/logo";
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
        <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center  h-15 ">
            <div className="px-5 h-12 sm:w-1/2 w-3/4 rounded-full flex justify-between items-center bg-background/10 backdrop-blur-md shadow-lg">
                <div className="hidden sm:flex justify-start items-center mr-auto">
                    <Mo/>
                </div>
                <nav className="hidden lg:flex items-center gap-5">
                    <a className="cursor-pointer" onClick={(e) => handleNavClick(e, '#about')} >About</a>
                    <a className="cursor-pointer" onClick={(e) => handleNavClick(e, '#projects')} >Projects</a>
                    <a className="cursor-pointer" onClick={(e) => handleNavClick(e, '#contact')} >Contact</a>
                </nav>
                <div className="ml-auto sm:w-fit w-full flex items-center sm:gap-3 justify-between">
                    <ModeToggle />
                    <div className="sm:hidden block">
                        <Mo/>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="lg:hidden">
                            <Button variant='ghost' size='icon' >
                                <Menu className="size-5" />
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
            </div>
        </header>
    )
}