import React from 'react';
import Sidebar from './components/Sidebar';
import './Dashboard.css'
import {Link,Outlet} from 'react-router-dom';
import Home from './Home/Home';
import useToken from '../../useToken';
import Login from '../Login/Login';
import useUser from '../../useUser';

function Dashboard() {
        const {user, setUser} = useUser();
        const {  token, setToken } = useToken();
  // console.log(token)
//   if(!token) {
//       return <Login setToken={setToken} setUser={setUser}/>
//   }
  return <>
           <Sidebar  />               
           <div className="section">
            <Outlet />
           </div>
        </>;
}

export default Dashboard;
