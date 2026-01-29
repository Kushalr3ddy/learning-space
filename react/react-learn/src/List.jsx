

function List() {
    
    const fruits = [
        // giving each element a unique id cause two element can have same .name or same prop values
        {id:1,name:'Apple', calories:95}, 
        {id:2,name:'Orange', calories:45},
        {id:3,name:'Banana', calories:105},
        {id:4,name:'coconut', calories:159},
        {id:5,name:'pineapple', calories:37},
    ];

    //sorting lexicographically i.e. alphabetically using .name prop
    fruits.sort((a, b) => a.name.localeCompare(b.name));
    //for reverse order
    //fruits.sort((a, b) => b.name.localeCompare(a.name));
    //for numeric ascending sorting using calories
    //fruits.sort((a, b) => a.calories - b.calories);
    //for reverse numeric using calories
    //fruits.sort((a, b) => b.calories - a.calories);

    //to filter out only low calorie fruits
    //const LoCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //to filter High calorie fruits   
    //const HiCalFruits = fruits.filter(fruit => fruit.calories > 100);
    
    const ListItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}:&nbsp;
                                            <b>{fruit.calories}</b></li>);
    return (<ol>{ListItems}</ol>);
}

export default List
