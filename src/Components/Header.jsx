import {Link} from "react-router-dom"


const Header=()=>{
    return(
        <header><h1 id="header"><strong>Budget App</strong></h1>
            <button id="new-Form"><Link to="/transactions/new">Add Transaction</Link></button>
        </header>
    )


}