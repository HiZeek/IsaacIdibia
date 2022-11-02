import { Fragment } from "react";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Hero from "./components/pages/Hero";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
