import { useState } from "react";

export function Counter() {
   const [score, setScore] = useState(0);

   return (
      <div className="square d-flex flex-column justify-content-around align-items-center">
         <h1>{score}</h1>
         <button
            className="btn btn-outline-success w-50"
            onClick={() => setScore(score + 1)}
         >
            +
         </button>
      </div>
   );
}
