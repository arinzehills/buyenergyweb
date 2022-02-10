import React from 'react';
import { Button } from '../../components/Button/Button';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import DashboardCard from './components/DashboardCard';
import ListCard from './components/ListCard';
import Nav from './components/Nav/Nav';
import Sidebar from './components/Sidebar';
import './Dashboard.css'
import {Routes as Switch, Route,useRoutes} from 'react-router-dom';
import Home from './Home/Home';

function Dashboard() {
    const data={
        heading:'Total amount spent',
        Color:'red',
        description:'392323'
    }
    const data2={
        heading:'On Electricity',
        Color:'green',
        description:'392323'
    }
    const data3={
        heading:'On Water',
        Color:'orange',
        description:'392323'
    }
    const data4={
        heading:'On Airtime',
        Color:'blue',
        description:'392323'
    }
    const data5={
        heading:'On Airtime',
        Color:'purple',
        description:'392323'
    }
  return <>
                <Sidebar  />
                <Switch >
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/buyairtime' element={<Home />}></Route>
                    <Route element={<Dashboard />}></Route>
                </Switch>   
                <div className="section">
                    <div className="grid"> 
                    <div className="button-div">
                        <Nav />
                  {window.innerWidth >= 960 && <Button  buttonColor='orange' children='Logout' />}
                        </div>                                 
                        <div className="row-one">
                            <DashboardCard {...data} />
                            <DashboardCard {...data2} />
                            <DashboardCard {...data3} />
                        </div>  
                        <div className="row-one">
                            <DashboardCard {...data4} />
                            <DashboardCard {...data5} />
                        </div>
                    </div>
                    <div className="list">
                        <ListCard />
                    </div>
                </div>
        </>;
}

export default Dashboard;
