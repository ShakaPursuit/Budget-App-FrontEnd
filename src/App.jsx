import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Components/Header'

import './index.css'
import NewTransaction from './Components/NewTransactions'
import ShowAllTransactions from './Components/ShowAllTransactions'
import SingleTransaaction from './Components/TransactionCard'
import LoginForm from './loginForm'

function App() {
 

  return (
    <>

 <Router> 
       <Header/> 
         <Routes>
         <Route path="/" element={<LoginForm/>}/>
        
            <Route path="/transactions/new" element={<NewTransaction/>}/>
            <Route path="/transactions" element={<ShowAllTransactions/>}/>
            <Route path="/transactions/:index" element={<SingleTransaaction/>}/>
          </Routes>
       </Router> 
    </>
  )
}

export default App
