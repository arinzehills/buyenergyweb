import React from 'react';
import Sidebar from './components/Sidebar';
import './Dashboard.css'
import {Link,Outlet} from 'react-router-dom';
import Home from './Home/Home';

function Dashboard() {

  return <>
           <Sidebar  />               
           <div className="section">
            <Outlet />
           </div>
        </>;
}

export default Dashboard;
