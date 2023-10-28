import React from "react";
import { useState } from "react";


const NewTransaction = () => {

    const[formData, setFormData]=useState([

        {
            date: "" ,
            item_name: "",
            amount: "",
            from: ""
    
        }
    
        
    ])
    const handleSubmit=(event)=>{
        event.preventDefault()


    }
    




    return (<>
        <div className="new-form">
            <form onSubmit={handleSubmit}>

                <label id="l1">Date&nbsp;</label>
                <input name="date" id="date" value={formData.date} onChange={(e)=>{setFormData({...formData,date:e.target.value})}}type="date"></input><br></br>
                <label   id="l2">Transcation Name&nbsp;</label>
                <input  name="item_name" id="item_name"value={formData.item_name} onChange={(e)=>{setFormData({...formData,item_name:e.target.value})}} type="text"></input><br></br>

                <label id="l3">Amount </label>
                <input  name="amount"value={formData.amount} id="amount" type="text" onChange={(e)=>{setFormData({...formData,amount:e.target.value})}}></input><br></br>
               
                <label id="l4">From</label>
                <input value={formData.from} name="from" id="from" type="text" onChange={(e)=>{setFormData({...formData,from:e.target.value})}}></input><br></br>
                <button>Add Transaction</button>
            </form>



        </div>

    </>)
}

export default NewTransaction