import React, { useState, useEffect }from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import {  FaUser,  } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { IoSettings} from "react-icons/io5";
import { HiViewGridAdd} from "react-icons/hi";
import './ResponsiveSidebar.css'
import { Link, useNavigate } from "react-router-dom";

function ResponsiveSidebar({className,onClick}) {
    const [currentLink, setCurrentLink] = useState(1);

  return (
    <>
        <div className={`sidebar ${className}`}>
            <div className="responsive__links" >
            <ul >
                        <li onClick={()=>setCurrentLink(1)} className={currentLink===1 ? 'active-nav': ''}>
                           
                           <Link to='/dashboard' onClick={onClick}>                          
                            <MdSpaceDashboard />
                            <span> Dashboard</span>                             
                           </Link>
                          
                        </li>
                        <li onClick={()=>setCurrentLink(2)} className={currentLink===2 ? 'active-nav': ''}>
                           <Link to='/dashboard/buyenergy' onClick={onClick}>
                            <ImPower />
                            <span> Buy energy units</span>
                           </Link>
                        </li>
                        <li onClick={()=>setCurrentLink(3)} className={currentLink===3 ? 'active-nav': ''}>
                           <Link to="/dashboard/buywater" onClick={onClick}>
                            <GiWaterDrop />
                            <span> Buy water units</span>   
                          </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(4)} className={currentLink===4 ? 'active-nav': ''}>
                        <Link to="/dashboard/buyairtime" onClick={onClick}>
                            <HiViewGridAdd />
                            <span> More</span>   
                            </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(5)} className={currentLink===5 ? 'active-nav': ''}>
                        <Link to="/dashboard/profile" onClick={onClick}>
                            <FaUser />
                            <span> Profile</span>   
                         </Link>
                        </li>
                        <li onClick={()=>setCurrentLink(6)} className={currentLink===6 ? 'active-nav': ''}>
                        <Link to="/dashboard/settings" onClick={onClick}>
                            <IoSettings />
                            <span> Settings</span>   
                          </Link>
                        </li>
                    </ul>
            </div>
        </div>
    </>
  )
}

export default ResponsiveSidebar