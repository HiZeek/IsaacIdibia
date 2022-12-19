import { Fragment } from "react";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Hero from "./components/pages/Hero";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}

export default App;
