
import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMobile, FaUser,FaAlignRight,FaTimes   } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { IoSettings} from "react-icons/io5";
import { HiViewGridAdd} from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { Button } from '../../../components/Button/Button';
import scrollreveal from "scrollreveal";
import './Sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import ResponsiveSidebar from "./ResponsiveSidebar";
export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1);
    const [navbarState, setNavbarState] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", () => setNavbarState(false));
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    useEffect(()=>{
      const sr=scrollreveal({
        origin: "left",
        distance:"80px",
        duration:2000,
        reset:false,
      });
      sr.reveal(`
          .brand,
          .links>ul>li:nth-of-type(1),
          .links>ul>li:nth-of-type(2),
          .links>ul>li:nth-of-type(3),
          .links>ul>li:nth-of-type(4),
          .links>ul>li:nth-of-type(5),
          .links>ul>li:nth-of-type(6),
          .logout
      `,{
        opacity:0,
        interval:100,
      })
    });
    const history=useNavigate()
    return (
        <>
        {/* <Section> */}
        <div className="toggle-nav">
          <Link to='/' className='sidebard-logo'>
                      <img
                        src='images/logo_transparent.png'
                        style={{height:40}}
                        alt="" />
          </Link>
          <div className="toggle" onClick={handleClick}>
                  {click ? < FaTimes /> : <FaAlignRight /> }             
            </div>

        </div>
        <ResponsiveSidebar className={click ? 'show ': 'show hide'} onClick={closeMobileMenu}/>
        <div className= 'left-section'>
        
            <div className="top">
                <div className="brand">
                <Link to='/'>
                    <img src="images/logo_transparent.png" alt="" />
                </Link>
                </div>
                
                <div className="links">
                    <ul >
                        <li onClick={()=>setCurrentLink(1)} className={currentLink===1 ? 'active-nav': ''}>                      
                           <Link to='/dashboard' >
                            <MdSpaceDashboard />
                            <span> Dashboard</span>   
                          
                           </Link>
                          
                        </li>
                        <li onClick={()=>setCurrentLink(2)} className={currentLink===2 ? 'active-nav': ''}>
                           <Link to='/dashboard/buyenergy'>
                            <ImPower />
                            <span> Buy energy units</span>
                           </Link>
                        </li>
                        <li onClick={()=>setCurrentLink(3)} className={currentLink===3 ? 'active-nav': ''}>
                           <Link to="/dashboard/buywater">
                            <GiWaterDrop />
                            <span> Buy water units</span>   
                          </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(4)} className={currentLink===4 ? 'active-nav': ''}>
                        <Link to="/dashboard/buyairtime">
                            <HiViewGridAdd />
                            <span> More</span>   
                            </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(5)} className={currentLink===5 ? 'active-nav': ''}>
                        <Link to="/dashboard/profile">
                            <FaUser />
                            <span> Profile</span>   
                         </Link>
                        </li>
                        <li onClick={()=>setCurrentLink(6)} className={currentLink===6 ? 'active-nav': ''}>
                        <Link to="/dashboard/settings">
                            <IoSettings />
                            <span> Settings</span>   
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="logout">
                <Link to='/'>
                 <Button buttonColor='orange' onClick={()=>history('/')}>                    
                 <FiLogOut /> Logout
                 </Button>
                </Link>
            </div>
        </div>
        {/* </Section> */}
        </>
    )
}