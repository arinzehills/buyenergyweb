import React from 'react';
import './App.css'
import {  Routes as Switch, Route,useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contactus from './pages/Contact/Contactus';
import FAQ from './pages/FAQ/FAQ';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Notfound from './pages/Notfound/Notfound';
import Home from './pages/Dashboard/Home/Home';
import Buywater from './pages/Dashboard/Buywater/Buywater';
import Buyairtime from './pages/Dashboard/Buyairtime/Buyairtime';
import Settings from './pages/Dashboard/Settings/Settings';
import Buyenergy from './pages/Dashboard/Buyenergy/Buyenergy';
import Profile from './pages/Dashboard/Profile/Profile';
import HomepageWrapper from './pages/HomepageWrapper/HomepageWrapper';
const App = () => {

    // const pagesToHide = ["login","dashboard","register"]
    const location=useLocation();
    // const showNavbar = pagesToHide.includes(location)
  return (
            <div>
            
            {/* {location.pathname!='/dashboard'   && <Navbar /> }                           */}
            <Switch>
                <Route path='/' exact element={<HomepageWrapper/>}>
                    <Route  index element={<Homepage/>}/>
                    <Route path='/about' exact element={<About/>}/>
                    <Route path='/contact' exact element={<Contactus/>}/>
                    <Route path='/faq'  exact element={<FAQ />}/>
                    <Route path='/login'  exact element={<Login />}/>
                    <Route path='/register'  exact element={<Register />}/>
                </Route>
              
                <Route path='/dashboard'  element={<Dashboard />}>
                    <Route path='buyenergy'   element={<Buyenergy />}/> 
                    <Route path='buyairtime'   element={<Buyairtime />}/> 
                    <Route path='buywater'   element={<Buywater />}/> 
                    <Route path='settings'   element={<Settings />}/>                     
                    <Route path='profile'   element={<Profile />}/>                     
                    <Route index element={<Home />} />  
                </Route>
                {/* <Redirect to='/dashboard' /> */}
                <Route path='*'  exact element={<Notfound />}/>
            </Switch>
               {/* {location.pathname!='/dashboard' && location.pathname!='/dashbaord/*' &&  <Footer /> } */}
            </div>  
           
         );
};
// Hi Arinze, you can manage some State at the navbar component which holds the name of the pages you want to hide -
// const pagesToHide = ["login","dashboard","register"]
// then use-
// Import useLocation from "react-router-dom".
// const location = useLocation( ).substring()//enter a length to get the exact names
// const showNavbar = pagesToHide.includes(location)
// then in the navbar component you can Render
// return (<>
// {showNavbar && <Navbar />}
// </>)
// GoodLuck
export default App;
