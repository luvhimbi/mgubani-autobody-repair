import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import './index.css';

function App() {
  return (
    <>
      <div className="top-accent-bar"></div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <WhyUs />
      <QuoteForm />
      <Contact />
      <Footer />
      <MobileBar />
    </>
  );
}

export default App;
