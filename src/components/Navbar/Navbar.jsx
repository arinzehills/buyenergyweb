import React,{ useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom';
import { Button } from '../Button/Button';
// import {logo} from '../../../assets/logo_transparent.png
import './Navbar.css';
const Navbar = () => {

    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const [button,setButton]=useState(true);
    const closeMobileMenu = () => setClick(!click);
    // const [onHover, setOnHover] = useState(false);
    // const hoverEvent= () =>{
    //     onmouseenter{()=>setOnHover(!onHover)};
    // }
    // const router=useNavigate()
    //     router.
  const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return {
        // window.removeEventListener('resize', showButton)
        }
    }, []);

      const pagesToHide = ["dashboard/buyairtime","dashboard","dashboard/buyenergy"]
      const location=useLocation();
      const showNavbar = pagesToHide.includes(location)
  return (
        <>
            <div className='navbar'>
            <div className='navbar-container container'>
                 <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                     <img
                      src='images/logo_transparent.png'
                      style={{height:60}}
                      alt="" />
                 </Link>
             <div className="menu-icon" onClick={handleClick}>
                 {click ? <FaTimes /> : <FaBars /> }
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-items'>
                     <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                 </li>
                 <li className='nav-items'>
                     <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About us</Link>
                 </li>
                 <li className='nav-items'>
                     <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact us</Link>
                 </li>
                 <li className='nav-items'>
                     <Link to="/faq" className='nav-links' onClick={closeMobileMenu}>FAQ</Link>
                 </li>
                 <li className='nav-btn' onClick={closeMobileMenu}>
                     {button ?
                        <Link to="/login"><Button 
                                 buttonColor='orange' 
                                 >Login </Button>
                        </Link> 
                                 :
                                 <Link to="/login">
                                     <Button buttonColor='purple'
                                        buttonSize='btn--wide'
                                     >Sign In</Button>
                                </Link>
                                     }
                  </li>
                 {/* <li className="nav-btn">
                     {button ? (    
                        <Link className="btn-link">
                            <Button>Sign up</Button>
                        </Link>
                     ): (
                         <Link className="btn-link">
                             <Button className="btn-outline" buttonSize='btn-mobile'
                             >
                                 s=Sign in
                             </Button >
                         </Link>
                     )}
                 </li> */}
             </ul>
            </div>
            </div>

        </>
        )        ;
};

{/* <div className='navbar'>
<div className='navbar-container container'>
  <Link to='/' className='navbar-logo'>
  <img style={{ width: "175px" }} src={"/images/logo_transparent.png"} alt='dsa' />
  <h1>dsahfiso</h1>
  </Link>
  <div className="menu-img">

  </div>
</div>
</div> */}
export default Navbar;
