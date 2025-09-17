import { useState } from "react";
function Form(){

    const [name, setName] = useState("Change Me");
    function updateName(e){
        setName(e.target.value)
    }
    return(
        <>
            <input value={name} onChange={(e)=>updateName(e)} />
            <p>Name: {name}</p>
        </>
    );
}

export default Form