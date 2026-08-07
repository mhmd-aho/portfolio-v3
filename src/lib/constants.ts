import { Github, Linkedin, Instagram, Phone, Mail,MapPinned,type LucideIcon } from 'lucide-react'
import ecommerce from '@/assets/e-commerce-2-desktop.png'
import notes from '@/assets/notes-app-desktop.png'
import finflow from '@/assets/finflow.png'
import XBlack from '@/assets/x-black.png' 
import XWhite from '@/assets/x-white.png' 
import upworkBlack from '@/assets/upwork-black.svg'
import upworkWhite from '@/assets/upwork-white.svg'


export type Contact = {
    name: string;
    icon: LucideIcon | string;
    iconLight?: string;
    link?: string;
    media: boolean;
    content?: string;
}
export type Project = {
    name: string;
    image: string;
    link: string;
    repo: string;
    tools: string[];
}
export const contacts: Contact[] =[
    {
        name:'Github',
        icon: Github,
        link:'https://github.com/mhmd-aho',
        media: true
            
    },
    {
        name:'Linkedin',
        icon: Linkedin,
        link:'https://www.linkedin.com/in/mohamad-abou-hamoud',
        media: true            
    },
    {
        name:'Upwork',
        icon: upworkWhite,
        iconLight: upworkBlack,
        link:'https://www.upwork.com/freelancers/~01787781516479794b',
        media: true
    },
    {
        name:'Instagram',
        icon: Instagram,
        link:'https://www.instagram.com/m_abouhamoud/',
        media: true
    },

    {
        name:'X',
        icon: XWhite,
        iconLight: XBlack,
        link:'https://x.com/m_abouhamoud',
        media: true
    },
    {
        name:'Phone',
        icon:Phone ,
        link:'https://wa.me/+96171547591',
        content:'+961 71 547 591',
        media: false
    },
    {
        name:'Email',
        icon:Mail,
        link:'mailto:mohamadabouhamoudb@gmail.com',
        content:'mohamadabouhamoudb@gmail.com',
        media: false
    },
    {
        name:'Location',
        icon:MapPinned,
        content:'Lebanon, Saida',
        media: false
    }    
]
export const frontEnd=['HTML','CSS','JavaScript','TypeScript','Tailwind','Bootstrap','React','Next.js','GSAP','Motion']
export const tools =['Figma','GitHub','Git','Antigravity','Vite','Postman','Vercel']
export const backEnd = ['Python','Django','Convex']
export const projects:Project[] = [
    {
        name:'Aura E-commerce',
        image:ecommerce,
        tools:['Next.js','TypeScript','Tailwind','Django'],
        link:'https://aura-frontend-bay.vercel.app/',
        repo:'https://github.com/mhmd-aho/pft-frontend'
    },
    {
        name:'Collaborative Notes App',
        image:notes,
        tools:['Next.js','TypeScript','Tailwind','shadcn','Convex','better-auth'],
        link:'https://notes-app-dun-eight.vercel.app/',
        repo:'https://github.com/mhmd-aho/notes_app'
    },
    {
        name:'Finflow',
        image:finflow,
        tools:['Next.js','TypeScript','Tailwind','shadcn','Django'],
        link:'https://finflow-mhmd-a-gamma.vercel.app/',
        repo:'https://github.com/mhmd-aho/pft-frontend'
    }

]