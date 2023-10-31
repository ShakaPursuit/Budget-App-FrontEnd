
import {useEffect,useState} from "react"


const AlwaysShowBalance=()=>{
const[balance,setBalance]=useState('')
const balanceColor=()=>{
    if(parseInt(balance)>100){

return "green"

    }else{

        return "default"
    }



}

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response=await fetch('http://localhost:8000/transactions/');
                if(!response.ok){
                throw new Error(`Request failed with status: ${response.status}`);
                }
                const data= await response.json();
                console.log(data);

                const sum=data.reduce((accumulator, item)=>{

                        return accumulator+item.amount;

            },0);
            setBalance(sum)


             }catch(error){
                console.error('Fetch error:',error);
             }
                }
             fetchData()
            }, [])
        

    return(<>
        <div id="headerBal" >
            <strong>Account Balance:&nbsp;&nbsp;
                <div id="balance" className={balanceColor()} >{`${JSON.stringify(balance)}`}</div></strong>
                
                </div>
        
              
    </>)




}


export default AlwaysShowBalance