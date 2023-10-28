import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const SingleTransaaction = () => {


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


    return (<>
    
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



    </>)
}

export default SingleTransaaction