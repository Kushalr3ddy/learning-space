import React, {useState, useEffect}from "react";

/*
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
export default MyComponent;
