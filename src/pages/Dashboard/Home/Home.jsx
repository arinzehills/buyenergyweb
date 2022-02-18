import React from 'react'
import { Button } from '../../../components/Button/Button';
import DashboardCard from '../components/DashboardCard';
import ListCard from '../components/ListCard';
import Nav from '../components/Nav/Nav';
import Sidebar from '../components/Sidebar'
import './Home.css';
function Home() {
  const data={
    heading:'Total amount spent',
    Color:'red',
    description:'392323'
}
const data2={
    heading:'On Electricity',
    Color:'green',
    description:'NGN 392323'
}
const data3={
    heading:'On Water',
    Color:'blue2',
    description:'NGN 392323'
}
const data4={
    heading:'Energy consumed',
    Color:'blue',
    description:'392323 kWh'
}
const data5={
    heading:'On Airtime',
    Color:'purple2',
    description:'NGN 392323'
}
  return (
    <>
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
                    <ListCard />
    </>
  )
}

export default Home