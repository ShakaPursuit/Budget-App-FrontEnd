// import React from "react";

// import {  useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";





// const DeleteTransaction = () => {
//     const index=useParams()
//     // 
    
//     const handleSubmit = (event) => {
//         event.preventDefault()
        
//     }
//     handleSubmit()
    
//     const navigate=useNavigate()
    

    

// const handlePost=()=>{
       
//         const fetchData = async () => {
//             try {
//               const response = await fetch(`http://localhost:8000/transactions/${index}`, {
//                 method: "DELETE" });
      
//               if (!response.ok) {
//                 throw new Error(`Request failed with the status: ${response.status}`);
//               }
      
//               const data = await response.json();
//               console.log(data);
              
             

             
        
//               navigate(`/transactions`)
              
//             } catch (error) {
//                 console.error("Fetch error:", error);
//             }
//             fetchData();
//         };
        
        
        
        
//         handlePost()
//     }
    
    
   

//     return (<>{null}



//     </>)
// }

// export default DeleteTransaction