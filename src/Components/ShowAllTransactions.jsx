
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlwaysShowBalance from "./showBalance";
const ShowAllTransactions = () => {
    const [transaction, SetTransaction] = useState([])
    const[balance,setBalance]=useState('')

const API= import.meta.env.VITE_REACT_API_KEY
    

const balanceColor=()=>{
    if(parseInt(balance)>100){

return "green"

    }else{

        return "default"
    }



}
    

    

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response=await fetch(`${API}`);
                if(!response.ok){
                throw new Error(`Request failed with status: ${response.status}`);
                }
                const data= await response.json();
                SetTransaction(data);

                const sum=data.reduce((accumulator, item)=>{

                        return accumulator+item.amount;

            },0);
            setBalance(sum)


             }catch(error){
                console.error('Fetch error:',error);
             }
                }
             fetchData()
            }, [])
        
        return (<>
        
        
        <div id="transaction" >
        <div><AlwaysShowBalance/></div>
            {transaction.map((item,index)=>{
               



                return(<><div  className="single-Transact" key={index} id={index}>

<div key={index+1} id="date">{`${item.date}`}&nbsp;&nbsp;</div>
<div  key={index+2}id="company"><Link to={`/transactions/${index}`}>{`${item.item_name}`}</Link> &nbsp;&nbsp;-&nbsp;{item.from}</div>
<div key={index+3}id="amount">  ${`${item.amount}`}</div>
                 
                    
                    
                    
                    </div></>)
            })}
<>
<div id="accountBalance">
    <strong>Account Balance:&nbsp;&nbsp;
        <div id="balance" className={balanceColor()}>${(JSON.stringify(balance))}</div></strong>
        
        </div>
</>
        </div>
        </>)
}

export default ShowAllTransactions