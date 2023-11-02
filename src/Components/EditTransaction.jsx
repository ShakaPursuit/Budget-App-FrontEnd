import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import {JSON} from "json-form-data"


import { Link } from "react-router-dom";

const EditTransaction = () => {

    const navigate=useNavigate()
    const [transaction, setTransaction] = useState([])
    const { index } = useParams()
    const [formData,setFormData]=useState(
        
        {
            date: "",
            item_name: "",
            amount: "",
            from: ""

        }

    )
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/transactions/`);
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                const data = await response.json();
                setTransaction(data);
                const specificTransaction = data[index];
        setFormData(specificTransaction);
            } catch (error) {
                console.error('Fetch error:', error)
            }
        }

        fetchData()
    }, [index])
    // const navigate=useNavigate()
    const handleChange=(event)=>{
        const value=event.target.value
        const name=event.target.name
        const parsedVal=name==="amount"? parseInt(value):value;
        // setFormData({...formData,[name]:parsedVal})
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: parsedVal,
          }));
        
    }


   
    const handlePost=()=>{
       
        const fetchData = async () => {
            try {
                
              const response = await fetch(`http://localhost:8000/transactions/${index}`, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
              });
      console.log(formData)
              if (!response.ok) {
                throw new Error(`Request failed with the status: ${response.status}`);
              }
      
              const data = await response.json();
         console.log(data);
              
             

              const updatedIndex= (data.length)-1;
            //   setUpdate(updatedIndex)
            // console.log(updatedIndex)
            // console.log(data.length)
            // console.log(formData)
            // console.log(data)
        
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
    <button id="backButton2"><Link to="/transactions">🔙 All Transactions</Link></button>
    
        

        <div>
       
        {transaction.map((item, specificIndex) => {
            if (index == specificIndex) {
                return (<div className="single" key={index} id={index}>



                <form onSubmit={handleSubmit}>
                    <div id="single-date"><strong><input name="date" id="input1" type="text" value={formData.date} onChange={handleChange}></input>{`${item.date}`}&nbsp;&nbsp;</strong></div>
                    <div id="single-company"><strong><input name="item_name" id="input2"type="text"value={formData.item_name} onChange={handleChange}></input> {`${item.item_name}`}</strong>&nbsp;&nbsp;-&nbsp;{item.from}</div>
                    <div id="single-amount">  <input id="input3" type="number" name="amount"value={formData.amount} onChange={handleChange}></input>{`${item.amount}`}</div>
                    <div><input id ="input4" type="text" value={formData.from} onChange={handleChange}></input>{`${item.from}`}</div>
                    
                    
                    
                    <div id="transaction-specific" type="submit"><button>Update Transaction</button></div>
                    
                    </form>


                </div>)


            }






        })}

        </div>
            


    </>)
}

export default EditTransaction