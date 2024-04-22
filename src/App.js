import logo from "./logo.svg";
import "./App.css";




function App() {
  const firstJSXString = <div>Ovo je prvi JSX string.</div>;
  const secondJSXString = <span>Ovo je drugi JSX string.</span>;
  return (
    <div className="App">
      <h1>Vjezba JSX</h1>
      <p> U nastavku ce se pokazati drugi sring : {secondJSXString}</p>
      <p>Ovdje ce se ispisati obje varijable koje su zadane : {firstJSXString }<></> {secondJSXString}</p>
    </div>
  );
}

export default App;
