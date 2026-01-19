import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FloatingButton from './components/FloatingButton'

const MenuSection = lazy(() => import('./components/Menu'))
const Gallery = lazy(() => import('./components/Gallery'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Ładowanie...</div>}>
          <MenuSection />
          <Gallery />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingButton />
    </div>
  )
}

export default App
