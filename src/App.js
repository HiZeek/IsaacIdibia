import { Fragment } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/pages/Hero";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Hero />
      </main>
    </Fragment>
  );
}

export default App;
