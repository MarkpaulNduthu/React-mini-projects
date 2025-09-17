
function List() {
    const list = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "Banana", calories: 49 },
    { id: 3, name: "Orange", calories: 89 },
    { id: 4, name: "WaterMelon", calories: 90 }]
    const listItems = list.map(fruit => <li key={fruit.id}>
        {fruit.name}:&nbsp;
        {fruit.calories}</li>);
    return (
        <ul>{listItems}</ul>
    );
}

export default List;