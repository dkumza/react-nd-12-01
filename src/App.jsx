import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Field } from "./Components/Field";
import { Task02 } from "./Components/Task02";

// #1 Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta
// į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”.
// Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje.
// Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.

function App() {
   return (
      <div className="container d-flex justify-content-center mt-5">
         {/* 1st task */}
         {/* <Field /> */}
         <Task02 />
      </div>
   );
}

export default App;
