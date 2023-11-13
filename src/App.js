import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Project from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     
      <Header />
      <Routes>
        <Route path={"/"} element = {<Herosection/>}/>
        <Route path={"/Project"} element = {<Project/>}/>
        <Route path={"/About"} element = {<About />}/>
        <Route path={"/Contact"} element = {<Contact />}/>
      </Routes>  
      <Footer />
     
      
    </div>
      
  );
}

export default App;
