import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const NewTransaction = () => {
    const {index}=useParams()

    const [formData, setFormData] = useState([

        {
            date: "",
            item_name: "",
            amount: "",
            from: ""

        }


    ])
    const handleChange=(event)=>{
        const value=event.target.value
        const name=event.target.name
        const parsedVal=name==="amount"? parseFloat(value):value;
        setFormData({...formData,[name]:parsedVal})
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const fetchData = async () => {
                  try {
                    const response = await fetch("http://localhost:8000/transactions", {
                      method: "POST",
                      body: JSON.stringify(formData),
                      headers: { "Content-Type": "application/json" }
                    });
            
                    if (!response.ok) {
                      throw new Error(`Request failed with the status: ${response.status}`);
                    }
            
                    const data = await response.json();
                    console.log(data);
                    // handlePost()
                  } catch (error) {
                    console.error("Fetch error:", error);
                  }
                };
                fetchData();
       
      


    }
    //adding Post Data in a fetch  to handle Form Data




const handlePost=(indexx)=>{
   const navigate= useNavigate()
   

   navigate(`/transactions/${index}`)

   

}



    return (<>

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