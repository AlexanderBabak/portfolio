import Home from "./modules/home/Home";
import About from "./modules/about/About";
import "./App.css";
import Blog from "./modules/blog/Blog";
import Contact from "./modules/contact/Contact";
import Footer from "./modules/footer/Footer";
import Service from "./modules/service/Service";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Blog />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
