import {Link} from "react-router-dom"
import AlwaysShowBalance from "./showBalance"


const Header=()=>{
    return(
        <header><h1 id="header"><strong>Budget App<button id="home-button"><Link to="/">RETURN HOME</Link></button></strong></h1>
            <button id="new-Log"><Link to="/transactions/new">Add Transaction</Link></button>
        </header>
    )


}

export default Header