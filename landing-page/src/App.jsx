import './App.css'
import All from './Sections/All'
import { Footer } from './Sections/Footer'
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import Investment from './Sections/Investment'
import Purchase from './Sections/Purchase'
import Suscribe from './Sections/Suscribe'
import Trade from './Sections/Trade'
import Payment from './Sections/payment'

function App() {
  return (
    <>
     <header>
      <Header />
    </header>
    <section>
      <Hero />
    </section>
    <section>
      <Purchase />
    </section>
    <section>
      <Payment />
    </section>
    <section>
      <Investment />
    </section>
    <section>
      <All />
    </section>
    <section>
      <Trade />
    </section>
    <section>
      <Suscribe />
    </section>
    <section>
      <Footer />
    </section>
    

    </>
  )
}

export default App
