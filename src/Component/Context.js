import React, {  useEffect, useState } from "react";
import { data } from "../data";

export const Context = React.createContext();


export const Provider =  (props)=>{
    const [portfolios,setPortfolios] = useState([])


    console.log(portfolios)

    useEffect(()=>{
        setPortfolios(data)
    },[])

    const value ={
        portfolios
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}