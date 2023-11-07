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
    <button id="backButton2">Return<Link to="/transactions">🔙 All Transactions</Link></button>
    
        {transaction.map((item, specificIndex) => {
            if (index == specificIndex) {
                return (<div className="single" key={index} id={index}>


                <div id="trans-Background">
                    <label id="trans-Label">Date of Transaction
                    <div id="single-date"><strong>{`${item.date}`}&nbsp;&nbsp;</strong></div></label></div>
                    <div id="single-company"><strong> {`${item.item_name}`}</strong>&nbsp;&nbsp;-&nbsp;{item.from}</div><img id='swipe'src="data:image/png;base64,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"/>
                    <h2>5&nbsp;7&nbsp;3&nbsp;2&nbsp;&nbsp; 9&nbsp;5&nbsp;4&nbsp;3&nbsp;&nbsp; 8&nbsp;7&nbsp;6&nbsp;5&nbsp;&nbsp; 9&nbsp;0&nbsp;5&nbsp;4&nbsp;</h2>
                    <div id="single-amount">Transaction Amount&nbsp;&nbsp;➠
                     &nbsp;&nbsp;$&nbsp;{`${item.amount}`}
                     <div id="trans-text">(Currency-USA dollar)</div></div><img id="master-card" src="https://cdn.freebiesupply.com/logos/large/2x/mastercard-6-logo-png-transparent.png"/>




                </div>)


            }






        })}

        <div>

        </div>
            <div id="transaction-specific"><button onClick={deleteIndex}>Delete Transaction</button></div>
            <div><button><Link to={`/transactions/${index}/edit`}>Edit Transaction</Link></button></div>


    </>)
}

export default SingleTransaaction