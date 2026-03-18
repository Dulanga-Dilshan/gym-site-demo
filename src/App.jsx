import { useState } from 'react'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Trainers } from './components/Trainers'
import { Membership } from './components/Membership'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Membership />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
