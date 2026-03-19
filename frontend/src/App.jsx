import { useState } from 'react'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Trainers } from './components/Trainers'
import { Membership } from './components/Membership'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Trainers />
        <Membership />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
