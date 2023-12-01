import { Col } from "./Col";
import { Button } from "./Button";
import { useState } from "react";

export const Field = () => {
   const [azuolai, setAzuolai] = useState([]);
   const [berzai, setBerzai] = useState([]);
   const [uosiai, setUosiai] = useState([]);

   const handleAzuolai = () => {
      //   console.log("azuolai");
      setAzuolai([...azuolai, "azuolai"]);
   };
   const handleBerzai = () => {
      setBerzai([...berzai, "berzai"]);
   };
   const handleUosiai = () => {
      setUosiai([...uosiai, "uosiai"]);
   };
   return (
      <div className="field">
         <div className="d-flex justify-content-center gap-1">
            <Col items={azuolai} />
            <Col items={berzai} />
            <Col items={uosiai} />
         </div>
         <div className="mt-2 buttons w-full d-flex justify-content-around">
            <Button
               name="Ązuolas"
               newClass="btn btn-success"
               handleClick={handleAzuolai}
            />
            <Button
               name="Beržas"
               newClass="btn btn-secondary"
               handleClick={handleBerzai}
            />
            <Button
               name="Uosis"
               newClass="btn btn-warning"
               handleClick={handleUosiai}
            />
         </div>
      </div>
   );
};
