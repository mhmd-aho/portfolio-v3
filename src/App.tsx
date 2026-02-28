import { ThemeProvider } from './components/app/theme-provider'
import { Header } from './components/app/header'
import { Hero } from './sections/hero'
import { About } from './sections/about'


function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </ThemeProvider>
  )
}

export default App
