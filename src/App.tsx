import { ThemeProvider } from './components/app/theme-provider'
import { Header } from './components/app/header'
import { Hero } from './sections/hero'
import { About } from './sections/about'
import { Projects } from './sections/projects'
import { Contact } from './sections/contact'


function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App
