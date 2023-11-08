import React, { useEffect } from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AlwaysShowBalance from "./showBalance";
import { Link } from "react-router-dom";



const NewTransaction = () => {
    const API= import.meta.env.VITE_REACT_API_KEY
//    const {index}=useParams()
// 
    const[update,setUpdate]=useState("")

    const [formData, setFormData] = useState(

        {
            date: "",
            item_name: "",
            amount: "",
            from: ""

        }


    )
    const navigate=useNavigate()
    const handleChange=(event)=>{
        const value=event.target.value
        const name=event.target.name
        const parsedVal=name==="amount"? parseInt(value):value;
        setFormData({...formData,[name]:parsedVal})
        
    }
    const handlePost=()=>{
       
        const fetchData = async () => {
            try {
              const response = await fetch(`${API}`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
              });
      
              if (!response.ok) {
                throw new Error(`Request failed with the status: ${response.status}`);
              }
      
              const data = await response.json();
              console.log(data);
              
             

              const updatedIndex= (data.length)-1;
            //   setUpdate(updatedIndex)
            console.log(updatedIndex)
            console.log(data.length)
            console.log(formData)
            console.log(data)
        
              navigate(`/transactions/${updatedIndex}`)
              
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchData();
        
        
        
        
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        handlePost()
       
        
       
      


            }
            


    return (<>

<div id="bal"><AlwaysShowBalance/></div>
<button id="backButton"><Link to="/transactions">🔙 All Transactions</Link></button>
        <div className="new-form">
            <form onSubmit={handleSubmit}>

                <label id="l1">Date&nbsp;</label>
                <input name="date"
                
                value={formData.date}
                type="date"
                 
                 onChange={handleChange}
                
                ></input>
                <br></br>
                <label id="l2">Transcation Name&nbsp;</label>
                <input name="item_name"  value={formData.item_name} onChange={handleChange} type="text"></input><br></br>

                <label id="l3">Amount </label>
                <input name="amount" value={formData.amount} id="amount" type='number' onChange={handleChange}></input><br></br>

                <label id="l4">From</label>
                <input value={formData.from} name="from" id="from" type="text" onChange={handleChange}></input><br></br>
                <button type="submit"  >Add Transaction</button>
            </form>



        </div>

    </>)
}

export default NewTransaction