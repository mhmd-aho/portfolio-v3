import { Github, Linkedin, Instagram, Phone, Mail,MapPinned,type LucideIcon } from 'lucide-react'
import ecommerce from '@/assets/e-co.png'
import notes from '@/assets/notes-app.png'
import XBlack from '@/assets/X-black.png' 
import XWhite from '@/assets/X-white.png' 
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
    description: string;
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
        link:'https://www.instagram.com/m_abouhamoud/',
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
export const backEnd = ['Convex']
export const projects = [
    {
        name:'E-commerce',
        description:'A high-performance, real-time e-commerce features a seamless shopping experience for browsing, filtering, and purchasing footwear.',
        image:ecommerce,
        tools:['Next.js','TypeScript','Tailwind','shadcn','Convex','better-auth'],
        link:'https://e-commerce-2-ruby.vercel.app/',
        repo:'https://github.com/mhmd-aho/e-commerce-2'
    },
    {
        name:'Collaborative Notes App',
        description:'A real-time collaborative note-taking platform that allows multiple users to create, edit, and create a team.',
        image:notes,
        tools:['Next.js','TypeScript','Tailwind','shadcn','Convex','better-auth'],
        link:'https://notes-app-dun-eight.vercel.app/',
        repo:'https://github.com/mhmd-aho/notes_app'
    }
]