

function List(props) {
    
    const itemList = props.items;
    const category = props.category;
    //sorting lexicographically i.e. alphabetically using .name prop
    //fruits.sort((a, b) => a.name.localeCompare(b.name));
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
    
    const ListItems = itemList.map(item => <li key={item.id}>
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b></li>);
    return (<>
    <h3>{category}</h3> 
    <ol>{ListItems}</ol>
    </> 
    );
}

export default List
