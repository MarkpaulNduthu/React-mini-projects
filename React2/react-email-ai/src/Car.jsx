import { useState } from "react";

function Car() {
    const [cars, setCars] = useState([{ year: new Date().getFullYear(), name: "Ford", model: "Mustang" }])
    const handleAddCar = () => {
        const year = document.getElementById('1').value
        const name = document.getElementById('2').value
        const model = document.getElementById('3').value
        document.getElementById('1').value = ''
        document.getElementById('2').value = ''
        document.getElementById('3').value = ''
        setCars(c => [...c, { year: year, name: name, model: model }])
    };

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index));
    }
    return (
        <>
            <ul>{cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.name} {car.model}</li>)}</ul>
            <input id="1" type="number" defaultValue={2024} />
            <br /><br /><input id="2" type='text' defaultValue="" />
            <br /><br /><input id="3" type='text' defaultValue="" /><br />
            <br /><br /><button onClick={handleAddCar}>Add Car</button>
        </>
    );
}

export default Car;