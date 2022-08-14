import Home from "./modules/home/Home";
import About from "./modules/about/About";
import "./App.css";
import Blog from "./modules/blog/Blog";
import Contact from "./modules/contact/Contact";
import Footer from "./modules/footer/Footer";
import Service from "./modules/service/Service";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="">
      <div className="App">
        <Home />
        <About />
        <Blog />
        <Service />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
