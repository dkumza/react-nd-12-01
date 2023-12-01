import { useState } from "react";
import { Button } from "../Button";

export function Counter() {
   const [score, setScore] = useState(0);

   const handleScore = () => {
      setScore(score + 1);
   };

   return (
      <div className="square d-flex flex-column justify-content-around align-items-center">
         <h1>{score}</h1>
         <Button
            handleClick={handleScore}
            newClass="btn btn-outline-success m-3 w-50"
            name="+"
         />
      </div>
   );
}
