import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    
    const error = useRouteError();
    console.log('error',error);

    return(
    
            <div>
                <h1>{error.status}</h1>
                <h1>{error.statusText}</h1>
                <h1>{error.data}</h1>
            </div>

        
    )
}


export default Error;

// while using direct export default error = () =>{} its not working