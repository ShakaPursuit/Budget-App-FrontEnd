import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const SingleTransaaction = () => {

    const navigate=useNavigate()
    const [transaction, setTransaction] = useState([])
    const { index } = useParams()


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/transactions/`);
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                const data = await response.json();
                setTransaction(data);
            } catch (error) {
                console.error('Fetch error:', error)
            }
        }

        fetchData()
    }, [])
    const showDelete=()=>{

        console.log('Deleting .......')
    }

    const deleteIndex=(e)=>{
        fetch(`http://localhost:8000/transactions/${index}`,{method:'DELETE'})
        .then((response)=>{

            if(!response.ok){
                throw new Error('Something Went Wrong')
            }
            navigate('/transactions')

        })
        .catch((e)=>{console.log(e)})




    }


    return (<>
    <button id="backButton2"><Link to="/transactions">🔙 All Transactions</Link></button>
    
        {transaction.map((item, specificIndex) => {
            if (index == specificIndex) {
                return (<div className="single" key={index} id={index}>




                    <div id="single-date"><strong>{`${item.date}`}&nbsp;&nbsp;</strong></div>
                    <div id="single-company"><strong> {`${item.item_name}`}</strong>&nbsp;&nbsp;-&nbsp;{item.from}</div>
                    <div id="single-amount">  {`${item.amount}`}</div>




                </div>)


            }






        })}

        <div>

        </div>
            <div id="transaction-specific"><button onClick={deleteIndex}>Delete Transaction</button></div>


    </>)
}

export default SingleTransaaction