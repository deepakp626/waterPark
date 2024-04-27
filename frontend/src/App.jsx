import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Nav from '../src/components/Nav.jsx';
import HeroSection from './components/HeroSection.jsx';
import HappyPlace from './components/HappyPlace.jsx';
import YourTicket from './components/YourTicket.jsx';
import TicketBookingForm from './components/TicketBookingForm.jsx';
import Facilities from './components/Facilities.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav />
     <HeroSection />
     <HappyPlace />
     <YourTicket />
     <TicketBookingForm />
     <Facilities />
    </>
  )
}

export default App
