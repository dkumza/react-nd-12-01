import { Col } from "./Col";
import { Button } from "./Button";

export const Field = () => {
   return (
      <div className="field">
         <div className="d-flex justify-content-center gap-1">
            <Col />
            <Col />
            <Col />
         </div>
         <div className="mt-2 buttons w-full d-flex justify-content-around">
            <Button name="Ązuolas" newClass="btn btn-success" />
            <Button name="Beržas" newClass="btn btn-secondary" />
            <Button name="Uosis" newClass="btn btn-warning" />
         </div>
      </div>
   );
};
