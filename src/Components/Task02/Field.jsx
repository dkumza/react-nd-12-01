import { Counter } from "./Counter";

export const FieldFor02 = ({ newClass, squares }) => {
   return (
      <div className={newClass}>
         {squares.slice(0, 30).map((sq, index) => (
            <div key={index} className={sq}>
               <Counter />
            </div>
         ))}
      </div>
   );
};
