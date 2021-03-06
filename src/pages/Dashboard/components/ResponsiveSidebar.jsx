import React, { useState, useEffect }from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import {  FaUser,  } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { IoSettings} from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { HiViewGridAdd} from "react-icons/hi";
import './ResponsiveSidebar.css'
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../../components/Button/Button';

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
                        <Link to="/dashboard/buywater" onClick={onClick}>
                            <HiViewGridAdd />
                            <span> Home Energy plans</span>   
                            </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(5)} className={currentLink===5 ? 'active-nav': ''}>
                        <Link to="/dashboard/buywater" onClick={onClick}>
                            <HiViewGridAdd />
                            <span> Smart Meter</span>   
                            </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(6)} className={currentLink===6 ? 'active-nav': ''}>
                        <Link to="/dashboard/buywater" onClick={onClick}>
                            <HiViewGridAdd />
                            <span> Our Green Energy 
                                <p style={{fontSize:'10px'}}>(Wind, Solar, Hydro, 
                              Tiddal, Biomasss and Geothermal Energy)</p>
                              </span>   
                            </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(7)} className={currentLink===7 ? 'active-nav': ''}>
                        <Link to="/dashboard/buywater" onClick={onClick}>
                            <HiViewGridAdd />
                            <span> Compare Plans</span>   
                            </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(8)} className={currentLink===8 ? 'active-nav': ''}>
                        <Link to="/dashboard/buywater" onClick={onClick}>
                            <HiViewGridAdd />
                            <span> Buy Energy Beyond</span>   
                            </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(9)} className={currentLink===9 ? 'active-nav': ''}>
                        <Link to="/dashboard/buyairtime" onClick={onClick}>
                            <HiViewGridAdd />
                            <span> More</span>   
                            </Link> 
                        </li>
                        <li onClick={()=>setCurrentLink(10)} className={currentLink===10 ? 'active-nav': ''}>
                        <Link to="/dashboard/profile" onClick={onClick}>
                            <FaUser />
                            <span> Profile</span>   
                         </Link>
                        </li>
                        <li onClick={()=>setCurrentLink(11)} className={currentLink===11 ? 'active-nav': ''}>
                        <Link to="/dashboard/settings" onClick={onClick}>
                            <IoSettings />
                            <span> Settings</span>   
                          </Link>
                        </li>
                    </ul>
            </div>
            <div className="log">
              
                <Link to='/'>
                 <Button buttonColor='purple' buttonSize='btn--mobile'
                //  onClick={()=>history('/')}
                 >                    
                 <FiLogOut /> Logout
                 </Button>
                </Link> 
              </div>
        </div>
        
    </>
  )
}

export default ResponsiveSidebar