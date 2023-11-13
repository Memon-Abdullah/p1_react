import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Project from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <Project/>
      <About />
      <Contact />
      <Footer />
    </div>
      
  );
}

export default App;
