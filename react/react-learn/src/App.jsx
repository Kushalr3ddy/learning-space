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

    const vegetables = [
        // giving each element a unique id cause two element can have same .name or same prop values
        {id:6,name:'potatoes', calories:110}, 
        {id:7,name:'celery', calories:15},
        {id:8,name:'carrots', calories:25},
        {id:9,name:'corn', calories:63},
        {id:10,name:'broccoli', calories:58},
    ];

    return(
    <>
        {fruits.length > 0 ? <List items={fruits} category="fruits"/>:null}
        {vegetables.length > 0 ?<List items={vegetables} category="vegetables"/>: null}
    </>
    );
}

export default App
