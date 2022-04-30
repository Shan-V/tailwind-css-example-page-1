import './App.css';
import CTA from './components/CTA';
import Feature from './components/Feature';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import { bgMain } from './assets/img';

function App() {
  return (
    <div style={{ backgroundImage: `url(${bgMain})` }} className='bg-image'>
      <NavBar />
      <div className='container mx-auto md:px-6 lg:px-12'>
        <Hero />
        <Feature />
        <Testimonial />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
