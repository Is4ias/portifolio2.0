import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skils from "./components/Skils";
import Work from "./components/Work";
import Expirence from "./components/Expirence";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return(
    <>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Skils/>
      <Work/>
      <Expirence/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
  
}

export default App;