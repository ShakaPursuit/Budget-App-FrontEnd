
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
const ShowAllTransactions = () => {
    const [transaction, SetTransaction] = useState([])

    // const API = import.meta.VITE_REACT_API

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response=await fetch('http://localhost:8000/transactions/');
                if(!response.ok){
                throw new Error(`Request fiales with status: ${response.status}`);
                }
                const data= await response.json();
                SetTransaction(data);
             }catch(error){
                console.error('Fetch error:',error);
             }
                }
             fetchData()
            }, [])
        
        return (<>
        <div id="transaction">
            {transaction.map((item,index)=>{
                return(<><div  className="single-Transact" key={index} id={index}>

<div id="date">{`${item.date}`}&nbsp;&nbsp;</div>
<div id="company"> {`${item.item_name}`}&nbsp;&nbsp;-&nbsp;{item.from}</div>
<div id="amount">  {`${item.amount}`}</div>
                 
                    
                    
                    
                    </div></>)
            })}


        </div>
        </>)
}

export default ShowAllTransactions