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
import { useEffect,useState } from 'react'
import { Loading } from './components/app/loading'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [renderPage,setRenderPage] = useState(true)
  useEffect(() => {
     document.fonts.ready.then(() => {
      setIsLoaded(true)
     })
  }, [])
  useGSAP(() => {
    if(!renderPage) return
    ScrollSmoother.create({
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    })
  }, [renderPage])
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {!renderPage?
       <Loading isLoaded={isLoaded} setRenderPage={setRenderPage}/>
      :
        <>
          <Header/>
          <div id='smooth-wrapper'>
              <main id='smooth-content'>
                <Hero isLoaded={renderPage} />
                <About isLoaded={renderPage} />
                <Projects />
                <Contact />
              </main>
          </div>
        </>
      }
    </ThemeProvider>
  )
}

export default App
