import React,{ useState,useEffect } from 'react'
import { Button } from '../../../components/Button/Button';
import Loader from '../../../components/Loader/Loader';
import useUser from '../../../useUser';
import DashboardCard from '../components/DashboardCard';
import ListCard from '../components/ListCard';
import Nav from '../components/Nav/Nav';
import Sidebar from '../components/Sidebar'
import './Home.css';
function Home() {

    const {user, setUser} = useUser();
    const [loading,setLoading]=useState(false)
    const [transactions,setTransactions]=useState({})
    console.log(user['name'])
    const id=user['id']
  const data={
    heading:'Total amount spent',
    Color:'red',
    description: `NGN ${transactions['total_amount']}` ?? 'NGN 0'
}
const data2={
    heading:'On Electricity',
    Color:'green',
    description:'NGN 392323'
}
const data3={
    heading:'On Water',
    Color:'blue2',
    description:transactions['water_units'] ?? 'NGN 0'
}
const data4={
    heading:'Energy consumed',
    Color:'purple2',
    description: `kWh ${transactions['total_units']}` ?? '0 kWh'
}
const data5={
    heading:'On Airtime',
    Color:'purple2',
    description:'NGN 392323'
}
useEffect(()=>{
    userTransaction()
    
    
},[])
console.log(loading)
const userTransaction=async ()=>{
    const data = { 
        user_id: id, 
        };
const url="http://localhost/buyenergy_api/public/api/getUserTransactions";
    fetch(
        url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
              },
            method:'POST',
            body:JSON.stringify(data)              
        })
        .then(response => response.json())
        .then(data => {
        console.log( data);
        setTransactions(data)
        console.log(transactions['total_amount'])
        setLoading(true)
        })
        .catch((error) => {
        console.warn('Error:', error);
        });
}
  return (
    <>
                   {loading ? <div className="grid"> 
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
                            {/* <DashboardCard {...data5} /> */}
                        </div>
                    </div> : <Loader />}
                    <ListCard 
                    // transactions= { transactions['transactions']}
                    id={id}
                    noOfTrx={transactions['total_transactions']}
                    />
    </>
  )
}

export default Home