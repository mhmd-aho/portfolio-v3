import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-2 lg:px-5 h-14 backdrop-blur-lg">
            <h1 className="lg:text-2xl text-lg font-bold lg:w-1/4">Mohamad Abou Hamoud</h1>
            <nav className="hidden lg:flex items-center gap-5">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="lg:w-1/4 w-fit flex items-center gap-3 justify-end">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger className="lg:hidden">
                        <Menu className="size-9" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <a href="#about">About</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="#projects">Projects</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="#contact">Contact</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}