import Header from "./components/header/Header";
import Section from "./components/Section/Section";
import About from "./components/About/About";
import Safety from "./components/Safety/Safety";
import Services from "./components/Services/Services";
import App2 from "./components/App2/App2";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Section></Section>
     <About></About>
     <Safety></Safety>
     <Services></Services>
     <App2></App2>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
};

export default App;
