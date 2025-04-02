import { useEffect, useState } from "react";

const useCurrencyInfo =(currency)=>{
    const [data, setData] = useState({});
    // let date = new Date();
    // let DATE = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-03-31/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
    } ,[currency])
    return data;
}

export default useCurrencyInfo;