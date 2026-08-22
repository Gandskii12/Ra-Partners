import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Approach from "./components/Approach";
import Services from "./components/Services";
import TrackRecord from "./components/TrackRecord";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body">
      <Nav />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Approach />
        <Services />
        <TrackRecord />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
