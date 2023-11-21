

import Corporate from "./components/Corporate";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sostenibilidad from "./components/Sostenibilidad";
import Vision from "./components/Vision";


function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Vision/>
      <Corporate/>
      <Projects/>
      <Sostenibilidad/>
      <Footer/>
    </div>
  );
}

export default App;
