import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contactus from './pages/Contact/Contactus';
import FAQ from './pages/FAQ/FAQ';
const App = () => {
  return (
            <Router >                
                <Navbar />                
            <Switch>
                <Route path='/' exact element={<Homepage/>}/>
                <Route path='/about' exact element={<About/>}/>
                <Route path='/contact' exact element={<Contactus/>}/>
                <Route path='/faq'  exact element={<FAQ />}/>
            </Switch>
                <Footer />
            </Router>
         );
};

export default App;
