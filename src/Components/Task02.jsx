import { useState } from "react";
import { Button } from "./Button";
import { FieldFor02 } from "./Task02/Field";

export const Task02 = () => {
   const [squares, setSquares] = useState([]);

   const handleSquares = () => {
      setSquares([...squares, "square"]);
   };
   return (
      <div className="container-1">
         <FieldFor02
            newClass="border field d-flex flex-wrap justify-content-center align-items-center gap-1"
            squares={squares}
         />
         <Button
            newClass="btn btn-success m-3"
            name="ADD"
            handleClick={handleSquares}
         />
      </div>
   );
};
