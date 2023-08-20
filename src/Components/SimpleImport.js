// import { useState } from "react";
// import { moviesData } from "../data.js";

// export default function SimpleImport() {
//   let [movies, setMovies] = useState([]);

//   let handleClick = (e) => {
//     e.preventDefault();
//     setMovies(moviesData);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Show Simple Movies</button>
//       {movies.map((data) => {
//         return (
//           <>
//             <div key={data.id}>{data.name}</div>
//           </>
//         );
//       })}
//     </>
//   );
// }
