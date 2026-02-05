import List from "./List";

function App() {
    const fruits = [
        // giving each element a unique id cause two element can have same .name or same prop values
        {id:1,name:'Apple', calories:95}, 
        {id:2,name:'Orange', calories:45},
        {id:3,name:'Banana', calories:105},
        {id:4,name:'coconut', calories:159},
        {id:5,name:'pineapple', calories:37},
    ];
    return(
        <List items={fruits} category="fruits"/>
    );
}

export default App
