import React,{useState,useEffect} from 'react';
import {  Routes as Switch, Route,useLocation } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
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
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import useToken from './useToken';
import useUser from './useUser';
import Loader from './components/Loader/Loader'
    // function setToken(userToken) {
    //     sessionStorage.setItem('token', JSON.stringify(userToken));
    // }

    // function getToken() {
    //         const tokenString = sessionStorage.getItem('token');
    //         const userToken = JSON.parse(tokenString);
    //         console.log(userToken?.token)
    //         console.log(userToken)
    //         // return userToken?.token
    // }

const App = () => {
        // getToken()
        const {user, setUser} = useUser();
        const { token, setToken } = useToken();     
         const [successMessage,setSuccessMessage]=useState('');
         const [loading, setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
  return (
         <div>                      
                {loading ? 
                <Loader />:
                <Switch>
                            <Route path='/' exact element={<HomepageWrapper/>}>
                            <Route  index element={<Homepage/>}/>
                            <Route path='/about' exact element={<About/>}/>
                            <Route path='/contact' exact element={<Contactus/>}/>
                            <Route path='/faq'  exact element={<FAQ />}/>
                            <Route path='/login' 
                            
                            exact element={<Login 
                                setToken={setToken}
                                setUser={setUser}
                                message={successMessage}/>}/>
                            <Route path='/forgotPassword'  exact element={<ForgotPassword />}/>
                            <Route path='/resetPassword'  exact element={<ResetPassword />}/>
                            <Route path='/register' 
                                                
                            exact element={<Register setSuccessMessage={setSuccessMessage} />}/>
                        </Route>              
                        <Route path='/dashboard'  token={token} setToken={setToken} element={<Dashboard />}>
                            <Route path='buyenergy'   element={<Buyenergy />}/> 
                            <Route path='buyairtime'   element={<Buyairtime />}/> 
                            <Route path='buywater'   element={<Buywater />}/> 
                            <Route path='settings'   element={<Settings />}/>                     
                            <Route path='profile'   element={<Profile />}/>                     
                            <Route index element={<Home />} />  
                        </Route>
                        {/* <Redirect to='/dashboard' /> */}
                        <Route path='*'  exact element={<Notfound />}/>
                    </Switch>}
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

            
        //    {location.pathname!='/dashboard'   && <Navbar /> }  
export default App;
