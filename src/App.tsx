import { ThemeProvider } from './components/app/theme-provider'
import { Header } from './components/app/header'
import { Hero } from './sections/hero'
import { About } from './sections/about'
import { Projects } from './sections/projects'
import { Contact } from './sections/contact'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useEffect, useState } from 'react'
import { Loading } from './components/app/loading'
import { Footer } from './sections/footer'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)
function App() {
  const [renderPage,setRenderPage] = useState(false)
  const [isSoomtherReady,setIsSoomtherReady] = useState(false)
  useEffect(()=>{
    if(!renderPage){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto"
    }
  },[renderPage])
  useGSAP(() => {
    if(!renderPage) return
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    })
    setIsSoomtherReady(true)
  }, [renderPage])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {!renderPage && <Loading setRenderPage={setRenderPage}/>}
        <>
          <Header/>
          <div id='smooth-wrapper' >
              <main id='smooth-content' className='h-fit font-inter text-balance'>
                <Hero renderPage={renderPage} isSoomtherReady={isSoomtherReady}/>
                <About renderPage={renderPage} isSoomtherReady={isSoomtherReady}/>
                <Projects renderPage={renderPage} isSoomtherReady={isSoomtherReady}/>
                <Contact renderPage={renderPage} isSoomtherReady={isSoomtherReady}/>
                <Footer/>
              </main>
          </div>
        </>
      
    </ThemeProvider>
  )
}

export default App
