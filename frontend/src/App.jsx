import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Nav from '../src/components/Nav.jsx';
import HeroSection from './components/HeroSection.jsx';
import HappyPlace from './components/HappyPlace.jsx';
import YourTicket from './components/YourTicket.jsx';
import TicketBookingForm from './components/TicketBookingForm.jsx';
import Facilities from './components/Facilities.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import Reviews from './components/Reviews.jsx';
import ContactUs from './components/ContactUs.jsx';
import QNA from './components/QNA.jsx';
import Footer from './components/Footer.jsx';

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
     <PhotoGallery />
     <Reviews />
     <ContactUs />
     <QNA />
     <Footer />
    </>
  )
}

export default App
