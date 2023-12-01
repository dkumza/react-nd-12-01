/* eslint-disable react/prop-types */
export const Col = ({ items }) => {
   return (
      <div className="col w-100 h-full d-flex flex-column gap-2">
         {items.map((i, index) => (
            <div key={index} className={i}>
               {i}
            </div>
         ))}
      </div>
   );
};
