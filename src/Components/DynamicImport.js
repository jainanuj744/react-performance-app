import { useState } from "react";

export default function DynamicImport() {

    let [movies,setMovies] = useState([]);

    let handleClick = (e) =>{
        e.preventDefault();
    }
  return <>
    <button onClick={handleClick}>Show Movies</button>
    {
        
    }
  </>;
}