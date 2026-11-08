import React,{useContext} from 'react';
import { UserContext } from './ComponentA.jsx'; // usercontext is defined in componentA.jsx file and exported to use in other files

function ComponentD() {

    const user = useContext(UserContext); // usecontext hook is used to access the value of usercontext in componentD.jsx file
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`hello ${user}`}</h2>
        </div>
    );
}

export default ComponentD;