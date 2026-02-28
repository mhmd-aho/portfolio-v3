import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import { useState } from "react";
export function Header() {
    const [open, setOpen] = useState(false)
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
                <Menu className="size-9" onClick={() => {setOpen(!open)}} />
            </div>
        </header>
    )
}