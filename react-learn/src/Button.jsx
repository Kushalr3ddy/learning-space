

function Button() {
    //here e variable is the event
    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(
        <button onClick={(e)=>handleClick(e)}>click me</button>
        
    );
}

export default Button