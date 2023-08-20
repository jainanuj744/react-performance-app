import { useRef, useState } from "react"

export default function UnControlled(){

    let inputRef = useRef(null);

    let handleClick = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }

    return <>
        <input ref={inputRef} type="text" placeholder="Uncontrolled"/>
        <button onClick={handleClick}>Submit</button>
    </>
}