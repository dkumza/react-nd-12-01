import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Field } from "./Components/Field";
import { Task02 } from "./Components/Task02";

// #1 Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta
// į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”.
// Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje.
// Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.

// #2 Sukurti aplikaciją su vienu mygtuku “pridėti”.
// Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje.
// Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus 3 - atsirastų 3 ir t.t.
// Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje esantis skaičius didėtų vienetu
// (kiekviename kvadrate atskirai).

function App() {
   return (
      <div className="container d-flex justify-content-center m-5 ">
         {/* 1st task */}
         {/* <Field /> */}
         <Task02 />
      </div>
   );
}

export default App;
