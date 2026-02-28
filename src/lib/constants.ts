import { Github, Linkedin, Instagram, Phone, type LucideIcon } from 'lucide-react'
export type Contact = {
    name: string;
    icon: LucideIcon;
    link: string;
    hero : boolean
}
export const contacts: Contact[] =[
    {
        name:'Github',
        icon: Github,
        link:'https://github.com/mhmd-aho',
        hero: true
            
    },
    {
        name:'Linkedin',
        icon: Linkedin,
        link:'https://www.linkedin.com/in/mohamad-abou-hamoud',
        hero: true            
    },
    {
        name:'Instagram',
        icon: Instagram,
        link:'https://www.instagram.com/m_abouhamoud/',
        hero: true
    },
    {
        name:'whatsApp',
        icon:Phone ,
        link:'https://wa.me/+96171547591',
        hero: true
    },
        

]