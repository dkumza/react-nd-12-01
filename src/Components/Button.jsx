export const Button = ({ newClass, name, handleClick }) => {
   return (
      <button className={newClass} onClick={handleClick}>
         {name}
      </button>
   );
};
