import { useTheme } from "@/components/app/theme-provider";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { contacts, type Contact } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Send } from 'lucide-react'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schema";
import type z from "zod";
import emailjs from '@emailjs/browser';
import { useTransition } from 'react';
import { Spinner } from "@/components/ui/spinner";
export function Contact() {
    const {theme} = useTheme()
    const [isPending,startTransition] = useTransition()
    const genContact = contacts.filter((contact) => !contact.media)
    const mediaContact = contacts.filter((contact) => contact.media)
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const handleIcon =(contact:Contact)=>{
        const useLightIcon = theme === 'dark'|| theme === 'system' && isSystemDark
        if(typeof contact.icon === 'string' ){
            return <img src={useLightIcon ? contact.iconLight : contact.icon} alt={contact.name} className="size-5"/>
        }else{
            return <contact.icon className="size-5"/>
        }
    }
    const form = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })
    const onSubmit = (data: z.infer<typeof contactSchema>) => {
        startTransition(async () => {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            form.reset()
        })
    }
    return (
        <section id="contact" className="min-h-[calc(100vh-4rem)] mt-14 w-full flex flex-col items-center gap-5 max-lg:gap-5 lg:p-5 p-3 ">
            <div className="flex flex-col items-center justify-center gap-2 w-3/4">
                <h2 className="lg:text-6xl text-4xl font-semibold">Get in touch</h2>
                <p className="lg:text-lg text-sm text-muted-foreground text-center">Have a project in mind? Let's work together to bring your ideas to life.</p>
            </div>
            <div className="flex-1  w-full flex max-lg:flex-col items-start lg:justify-between gap-10">
                <div className="flex flex-col gap-6 lg:w-2xl w-full">
                    <div className="flex flex-col gap-1">
                        <h3 className="lg:text-2xl text-xl font-semibold">Let's Connect</h3>
                        <p className="max-lg:text-sm text-muted-foreground">I’m always open to discussing new opportunities, creative projects, or potential collaborations.</p>
                    </div>
                    <div className="flex flex-col lg:gap-3 gap-1">
                        {
                            genContact.map((contact) => (
                                <Item key={contact.name} className="pl-0">
                                    <ItemMedia>
                                        <Button asChild size='icon'>
                                            <a aria-disabled={!contact.link} target={contact.link ? (contact.link.startsWith('mailto') ? '_self' : '_blank') : '_self'} href={contact.link && contact.link }>
                                                <contact.icon className="size-5"/>
                                            </a>
                                        </Button>
                                    </ItemMedia>
                                    <ItemContent className='gap-0'>
                                        <ItemTitle>{contact.name}</ItemTitle>
                                        {contact.content && <ItemDescription>{contact.content}</ItemDescription>}
                                    </ItemContent>
                                </Item>
                            ))
                        }
                    </div>
                    <div className="flex flex-col lg:gap-3 gap-1">
                        <h4 className="lg:text-xl text-lg font-semibold">Follow me</h4>
                        <div className="flex lg:gap-2 gap-1">
                            {
                                mediaContact.map((contact) => (
                                        <Button  key={contact.name} asChild size='icon'  className="rounded-full">
                                            <a aria-disabled={!contact.link} target={contact.link ? (contact.link.startsWith('mailto') ? '_self' : '_blank') : '_self'} href={contact.link && contact.link }>
                                               {handleIcon(contact)}
                                            </a>
                                        </Button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Card className="lg:w-2xl w-full h-fit">
                    <CardContent>
                        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Controller 
                                control={form.control}
                                name="name"
                                render={({field,fieldState}) => (
                                    <Field>
                                        <FieldLabel>Name</FieldLabel>
                                        <Input placeholder="Mohamad" {...field}/>
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                                    </Field>
                                )}
                                />
                                <Controller
                                control={form.control}
                                name="email"
                                render={({field,fieldState}) => (
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input placeholder="john@example.com" {...field}/>
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                                </Field>
                                )}
                                />
                                <Controller
                                control={form.control}
                                name="message"
                                render={({field,fieldState}) => (
                                <Field>
                                    <FieldLabel>Message</FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea placeholder="Tell me about your project, goals, and timeline..." {...field}/>
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/2000 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <FieldDescription>I usually respond within 24-48 business hours.</FieldDescription>
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                                </Field>
                                )}
                                />
                            </FieldGroup>
                        </form>
                    </CardContent>
                    <CardFooter >
                        <Button form="contact-form" type="submit" disabled={isPending} size='lg' className="w-full group">
                            {
                                isPending?
                                <>
                                    Sending Message <Spinner/>
                                </>
                                :
                                <>
                                    Send Message <Send className="group-active:-translate-y-3 group-active:translate-x-2 transition-all duration-300"/>
                                </>
                            }
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}