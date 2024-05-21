import "./App.css";
import Number from "./components/Number/Number";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const name = "Pepe";
  const whoIAm = <h1>Hola, me llamo {name}</h1>;
  const numbers = [2, 6, 8, 2, 7];
  // const printNumbers = numbers.map((number) => <p>{number}</p>);
  const printNumbers = numbers.map((number) => <Number number={number}/>);
  return (
    <div>
      <p className="text">Hola</p>
      <Welcome text={name} surname={"García"} />
      <Welcome text={"Dani"} surname={"Barraza"} />
      {whoIAm}
      {printNumbers}
    </div>
  );
}

export default App;
