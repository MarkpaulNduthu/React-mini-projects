import {useState} from 'react'
function List(){
    const [fruitList,setfruitList] = useState(["apple","Banana","Orange","Pineapple"])
    function handleAddFruit(){
        const value = document.getElementById('fruit-value').value;
        document.getElementById('fruit-value').value = '';
        setfruitList(f => ([...f,value]));
    }
    return (
        <div>
            <h2>Fruit List</h2>
            <ul>{fruitList.map((fruit,index) => <li key={index}>{fruit}</li>)}</ul>
            <input id='fruit-value' type='text' placeholder='Enter any Fruit'/>
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
    );
}

export default List