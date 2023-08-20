import { useState } from "react"

export default function Controlled(){

    let [state,setState] = useState("");

    let handleClick = (e) => {
        e.preventDefault();
        console.log(state);
    }

    let handleChange = (e) => {
        setState(e.target.value);
    }

    return <>
        <input type="text" value={state} onChange={handleChange} placeholder="Controlled" />
        <button onClick={handleClick}>Submit</button>
    </>
}