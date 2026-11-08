import React, {useState, useEffect, useRef}from "react";

/* use effect hook stuff
function MyComponent(){

    const [count, setCount] = useState(0);
    const [color,setColor] = useState("green");

    useEffect(() => {
        document.title=`Count: ${count} ${color}`
    },[count,color]);//add the component to the dependency array because the useEffect() hook will be trigerred if the component is rerendered for any reason
    
    function addCount(){
        setCount(c => c+1 );
    }
    
    function subCount(){
        setCount(c => c-1);
    }

    function changeColor(){
        setColor(col => col=== "green" ? "red" : "green");
    }

    return(<>
    <p style ={{color:color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subCount}>Subtract</button><br />
    <button onClick={changeColor}>Change Color</button>
    </>);
}
*/
/* more use effect hook stuff
function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("Event listener added");
        return () => {
            window.removeEventListener("resize",handleResize);
            console.log("Event listener removed");
        }
    },[]);
    
    useEffect(() => {
        document.title = `size :${width} ${height}`
    });
    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(<>
    <p>Window Width: {width}px</p>
    <p>Window Height:{height}px</p>
    </>);
    
}
*/

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="yellow";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="yellow";
    }

    return(
        <div>

        <button onClick={handleClick1}>
            click me 1!
        </button>
        <input ref={inputRef1} />
        <button onClick={handleClick2}>
            click me 2!
        </button>
        <input ref={inputRef2} />
        <button onClick={handleClick3}>
            click me 3!
        </button>
        <input ref={inputRef3} />

        </div>
    );
}
export default MyComponent;
