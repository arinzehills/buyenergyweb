import React,{ useEffect,useState }  from 'react';
import { Button } from '../../../components/Button/Button';
import Loader from '../../../components/Loader/Loader';
import './ListCard.css'
function ListCard({noOfTrx,id}) {
    const [trx,setTrx]=useState([])
    const [loading,setLoading]=useState(false)

  useEffect(()=>{
    // transactions
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
      setTrx(data['transactions'])
      setLoading(true)
      console.log(trx)
      })
      .catch((error) => {
      console.warn('Error:', error);
      });
    
  },[])
 
  console.log(trx)
  console.log(loading)
  return <>
            <div className="list-card-section">
              <h2>Transactions ({noOfTrx})</h2>
                {loading ? trx.map((transaction)=>
                <div className="list-card transactions-input" key={transaction.order_id}>   
                    <h4>{transaction.product_name}</h4>
                    <h4>{transaction.amount}</h4>
                    <h4>{transaction.created_at}</h4>
                </div>
                ) :
                <Loader />
                }
            </div>
        </>;
}

export default ListCard;
