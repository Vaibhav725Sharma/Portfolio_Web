import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
