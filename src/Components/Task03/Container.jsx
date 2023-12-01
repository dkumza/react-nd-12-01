import { useEffect, useState } from "react";
import { Button } from "../Button";
import { CountWrapper } from "./CountWrapper";

export const Container = () => {
   const [value, setValue] = useState(
      JSON.parse(localStorage.getItem("data")) || 0
   );

   const handleValue = () => {
      setValue(value + 1);
   };

   useEffect(() => {
      localStorage.setItem("data", JSON.stringify(value));
   }, [value]);

   return (
      <div className="counter">
         <CountWrapper value={value} />
         <Button
            name="+"
            newClass="btn btn-outline-success m-3 w-25"
            handleClick={handleValue}
         />
      </div>
   );
};
