import { useEffect,useState } from "react";

function useCurrencyinfo({currency,date}){
    const [data,setdata]=useState({});
    useEffect(()=>{
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
     .then((res)=>res.json())
     .then((res)=>{setdata(res[currency])})
    },[currency,date]);
 console.log(data);
 return data;
}
export default useCurrencyinfo;