import { useState } from "react";
// import { moviesData } from "../data.js"

export default function DynamicImport() {
  let [movies, setMovies] = useState([]);

  let handleClick = (e) => {
    e.preventDefault();
    import("../data.js").then((data) => {
      // console.log(data.moviesData);
      setMovies(data.moviesData);
    });
  };
  return (
    <>
      <button onClick={handleClick}>Show DYnamic Movies</button>
      {movies.map((data) => {
        return (
          <>
            <div key={data.id}>{data.name}</div>
          </>
        );
      })}
    </>
  );
}
