import { Navbar, Home, About, Skills, Work, Projects, Contact, Footer } from "./components";

const App = () => {

  return (
    <div>
      <div>
          <Navbar/>
          <Home />
          <About />
          <Skills />
          <Work />
          <Projects />
          <Contact />
      </div>
      <div>
          <Footer/>
      </div>
    </div>
  )
}

export default App

