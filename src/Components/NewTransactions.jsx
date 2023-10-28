import React from "react";


const NewTransaction = () => {




    return (<>
        <div className="new-form">
            <form >

                <label id="l1">Date&nbsp;</label>
                <input type="date"></input><br></br>
                <label id="l2">Transcation Name&nbsp;</label>
                <input type="text"></input><br></br>

                <label id="l3">Amount</label>
                <input type="text"></input><br></br>

                <label id="l4">From</label>
                <input type="text"></input><br></br>
                <button>Add Transaction</button>
            </form>



        </div>

    </>)
}

export default NewTransaction