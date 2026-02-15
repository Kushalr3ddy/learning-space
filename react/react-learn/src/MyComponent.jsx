import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {setName("spongebob");}

    const updateAge = () => {setAge(age+1);}

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>name: {name}</p>
            <button onClick={updateName}>set Name</button>
            
            <p>age: {age}</p>
            <button onClick={updateAge}>increment Age</button>
            
            <p>is employed: {isEmployed ? "Yes":"No"}</p>
            <button onClick={toggleEmployedStatus}>toggle status</button>
        </div>
    );
}

export default MyComponent;
