import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Components/Header'

import './index.css'
import NewTransaction from './Components/NewTransactions'

function App() {
 

  return (
    <>

 <Router> 
       <Header/> 
         <Routes>
            <Route path="/transactions/new" element={<NewTransaction/>}/>

          </Routes>
       </Router> 
    </>
  )
}

export default App
